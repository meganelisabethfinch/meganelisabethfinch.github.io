import ProjectCard from "../../components/ProjectCard";
import styles from "./page.module.css";
import projects from "../../data/projects";

// Try to parse a variety of common date formats. Returns a timestamp (ms) or null.
function parseDateToTs(d) {
  if (!d) return null;
  if (d instanceof Date && !isNaN(d)) return d.getTime();

  // If it's a number that's very large, treat as ms timestamp. Otherwise avoid treating compact numbers
  // like 20220907 as a millisecond timestamp (they're not).
  if (typeof d === "number" && d > 1e12) return d;

  const s = String(d).trim();

  // Explicitly handle YYYYMMDD or YYYY/MM/DD or YYYY-MM-DD
  const ymdCompact = s.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (ymdCompact) {
    const [, y, m, day] = ymdCompact;
    const dt = new Date(`${y}-${m}-${day}`);
    if (!isNaN(dt)) return dt.getTime();
  }

  const ymdSep = s.match(/^(\d{4})[\/-](\d{2})[\/-](\d{2})$/);
  if (ymdSep) {
    const [, y, m, day] = ymdSep;
    const dt = new Date(`${y}-${m}-${day}`);
    if (!isNaN(dt)) return dt.getTime();
  }

  // Try native Date parsing (handles ISO and many readable formats)
  const dt = new Date(s);
  if (!isNaN(dt)) return dt.getTime();

  // Fallback: try splitting into parts and heuristics for MM/DD/YYYY or DD/MM/YYYY
  const parts = s.split(/[.\-/ ]+/).map((p) => parseInt(p, 10));
  if (parts.length >= 3) {
    let [a, b, c] = parts;
    if (c >= 1000) {
      // Assume either MM/DD/YYYY or DD/MM/YYYY. Try both.
      let try1 = new Date(`${c}-${String(a).padStart(2, "0")}-${String(b).padStart(2, "0")}`);
      if (!isNaN(try1)) return try1.getTime();
      let try2 = new Date(`${c}-${String(b).padStart(2, "0")}-${String(a).padStart(2, "0")}`);
      if (!isNaN(try2)) return try2.getTime();
    }
  }

  return null;
}

export default function Projects() {
  // Filter out hidden projects, create a shallow copy, and sort by parsed date descending (most recent first).
  const visible = projects.filter((p) => !p.hidden);
  const sorted = [...visible].sort((a, b) => {
    const at = parseDateToTs(a.date) || 0;
    const bt = parseDateToTs(b.date) || 0;
    return bt - at;
  });

  return (
    <div className={styles.pageWrap}>
      <div className={styles.section}>
        <h2>All Projects</h2>
        <div className={styles.allGrid}>
          {sorted.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
