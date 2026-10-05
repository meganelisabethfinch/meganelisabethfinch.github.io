import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./linkButton.module.css";

export default function LinkButton({ label, href, icon, external = false }) {
  return (
    <a
      className={styles.link}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span>{label}</span>
      {icon ? (
        <FontAwesomeIcon icon={icon} aria-hidden="true" />
      ) : (
        <span className={styles.external}>↗</span>
      )}
    </a>
  );
}
