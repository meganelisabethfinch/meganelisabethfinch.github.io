import Article from "../../../components/Article";
import projects from "../../../data/projects";
import fs from 'fs';
import path from 'path';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    const title = slug ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) : "Post";
    return (
      <Article title={title}>
        <p style={{ marginTop: 12, maxWidth: 720 }}>
          Placeholder blog page for <strong>{slug}</strong>. Replace this with the project writeup.
        </p>
      </Article>
    );
  }

  // Try to read a server-side HTML article body from public/content/<slug>.html
  let html = null;
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const articlePath = project.contentPath
      ? path.join(publicDir, project.contentPath)
      : path.join(publicDir, 'content', `${project.slug}.html`);

    if (fs.existsSync(articlePath)) {
      html = fs.readFileSync(articlePath, 'utf8');
    }
  } catch (e) {
    // non-fatal; fall back to description below
    console.warn('Could not read article HTML for', project.slug, e && e.message);
  }

  return (
    <Article title={project.title} type={project.type} date={project.date} html={html}>
      {!html ? <p style={{ marginTop: 12, maxWidth: 720 }}>{project.description}</p> : null}
    </Article>
  );
}
