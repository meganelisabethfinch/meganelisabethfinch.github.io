import styles from './article.module.css';
import { formatDate } from '../lib/formatDate';
import MathRender from './MathRender.client';

export default function Article({ title, children, type, date, html }) {
  return (
    <div className={styles.articleWrapper}>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          {(type || date) && (
            <div className={styles.metaRow}>
              {type ? <span className={styles.metaItem}>{type}</span> : null}
              {type && date ? <span className={styles.metaSep}>•</span> : null}
              {date ? <span className={styles.metaItem}>{formatDate(date)}</span> : null}
            </div>
          )}
        </header>

        {html ? (
          <section id="article-content" className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <section id="article-content" className={styles.content}>{children}</section>
        )}
        {/* Run client-side KaTeX auto-render on the article content (inline LaTeX) */}
        <MathRender targetId="article-content" />
      </main>
    </div>
  );
}
