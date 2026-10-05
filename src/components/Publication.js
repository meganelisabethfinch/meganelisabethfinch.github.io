import styles from './publication.module.css';

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const formatAuthors = (authors) =>
  escapeHtml(authors).replace(/Megan(?: E\.)? Finch/g, '<b>$&</b>');

export function publicationToHtml({
  authors,
  year,
  title,
  titleUrl,
  venue,
  pdfUrl,
  bibtexUrl,
  scholarUrl,
}) {
  const titleMarkup = titleUrl
    ? `<a href="${escapeHtml(titleUrl)}">${escapeHtml(title)}</a>`
    : escapeHtml(title);
  const links = [
    pdfUrl && `<a href="${escapeHtml(pdfUrl)}">[PDF]</a>`,
    bibtexUrl && `<a href="${escapeHtml(bibtexUrl)}">[BibTeX]</a>`,
    scholarUrl && `<a href="${escapeHtml(scholarUrl)}">[Google Scholar]</a>`,
  ].filter(Boolean).join('');

  return `<li class="${styles.publication}"><div><b class="${styles.title}">${titleMarkup}</b></div><div>${formatAuthors(authors)} (${escapeHtml(year)}). <i>${escapeHtml(venue)}</i></div><div class="${styles.links}">${links}</div></li>`;
}

export default function Publication({
  authors,
  year,
  title,
  titleUrl,
  venue,
  pdfUrl,
  bibtexUrl,
  scholarUrl,
}) {
  return (
    <li className={styles.publication}>
      <div>
        <b className={styles.title}>
          {titleUrl ? <a href={titleUrl}>{title}</a> : title}
        </b>
      </div>
      <div>
        {authors.split(/(Megan(?: E\.)? Finch)/g).map((authorPart, index) =>
          /Megan(?: E\.)? Finch/.test(authorPart) ? (
            <b key={index}>{authorPart}</b>
          ) : (
            authorPart
          )
        )}{' '}
        ({year}). <i>{venue}</i>
      </div>
      <div className={styles.links}>
        {pdfUrl ? <a href={pdfUrl}>[PDF]</a> : null}
        {bibtexUrl ? <a href={bibtexUrl}>[BibTeX]</a> : null}
        {scholarUrl ? <a href={scholarUrl}>[Google Scholar]</a> : null}
      </div>
    </li>
  );
}
