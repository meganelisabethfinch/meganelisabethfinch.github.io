import { profileLinks } from "../../data/profileLinks";
import LinkButton from "../../components/LinkButton";
import styles from "./page.module.css";

export default function Links() {
  return (
    <main className={styles.page}>
      <section className={styles.linkTree} aria-labelledby="links-title">
        <img
          className={styles.avatar}
          src="/assets/images/megan-graduation-portfolio.png"
          alt=""
        />
        <h1 id="links-title">Megan Elisabeth Finch</h1>
        <p className={styles.handle}>PhD Researcher in Music and AI</p>
        <p className={styles.intro}>
          Find out more about my work below.
        </p>

        <div className={styles.links}>
          {profileLinks.map((link) => (
            <LinkButton key={link.id} {...link} />
          ))}
        </div>
      </section>
    </main>
  );
}
