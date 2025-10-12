// Small utility to parse and format project dates.
// Exports:
// - parseDateToTs(d): returns timestamp (ms) or null
// - formatDate(d): returns a string formatted as `DD Mon YYYY` or the original input on failure

export function parseDateToTs(d) {
  if (!d) return null;
  if (d instanceof Date && !isNaN(d)) return d.getTime();

  // If it's a number that's very large, treat as ms timestamp. Otherwise avoid treating compact numbers
  // like 20220907 as millisecond timestamps (they're not).
  if (typeof d === "number" && d > 1e12) return d;

  const s = String(d).trim();

  // Explicitly handle YYYYMMDD
  const ymdCompact = s.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (ymdCompact) {
    const [, y, m, day] = ymdCompact;
    const dt = new Date(`${y}-${m}-${day}`);
    if (!isNaN(dt)) return dt.getTime();
  }

  // Explicitly handle YYYY/MM/DD or YYYY-MM-DD
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

export function formatDate(d) {
  if (!d) return "";
  try {
    const ts = parseDateToTs(d);
    if (!ts) return d;
    return new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(ts));
  } catch (err) {
    return d;
  }
}
