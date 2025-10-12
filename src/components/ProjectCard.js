"use client";

import Link from "next/link";
import styles from "./projectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../lib/formatDate";

export default function ProjectCard({ title, subtitle = "", description, image, tags = [], slug, type, date }) {
  const href = slug ? `/blog/${slug}` : "#";

  const formattedDate = formatDate(date);
  return (
    <Link href={href} className={styles.card}>
        <article>
          <div className={styles.media}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.body}>
          <div>
            <h3 className={styles.title}>{title}</h3>
            {type || formattedDate ? (
              <div className={styles.metaRow}>
                {type ? <span className={styles.metaItem}>{type}</span> : null}
                {type && formattedDate ? <span className={styles.metaSep}>•</span> : null}
                {formattedDate ? <span className={styles.metaItem}>{formattedDate}</span> : null}
              </div>
            ) : subtitle ? (
              <div className={styles.subtitle}>{subtitle}</div>
            ) : null}
          </div>

          <p className={styles.desc}>{description}</p>

          <div className={styles.bottomArea}>
            <div className={styles.actionsRow}>
              <span className={styles.cta} aria-hidden>
                <span>Read More</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </div>

            <div className={styles.tagsRow}>
              {tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          </div>
        </article>
    </Link>
  );
}
