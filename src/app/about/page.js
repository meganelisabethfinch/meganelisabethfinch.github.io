import Article from "../../components/Article";
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

  return (
    <Article title="About Me" html={html} />
  );
}
