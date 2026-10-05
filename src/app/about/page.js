import Article from "../../components/Article";
import { publicationToHtml } from "../../components/Publication";
import { publications } from "../../data/publications";
import fs from "fs/promises";
import path from "path";

export default async function About() {
  const filePath = path.join(process.cwd(), "public", "content", "about.html");
  let html = "";
  try {
    html = await fs.readFile(filePath, "utf8");
  } catch (e) {
    html = "<p>About content not found.</p>";
  }

  const publicationList = `<ul>${[...publications]
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
    .map((publication) => publicationToHtml(publication))
    .join("")}</ul>`;

  return (
    <Article
      title="About Me"
      html={html.replace("<!-- PUBLICATIONS -->", publicationList)}
    />
  );
}
