/*
 Project metadata (source of truth for the Projects list and article routing).
 Edit or add entries here; each project needs a `slug` field. The site will look for
 the article body at `public/content/<slug>.html` (server-side read into the Article component).
*/

const projects = [
  {
    slug: "triolingo",
    title: "Triolingo",
    type: "Hackathon",
    date: "2022/07/09",
    description:
      "A foreign language chatbot, built in 24 hours for Hack Cambridge Atlas.",
    image: "/assets/images/thumbnails/triolingo.png",
    // contentPath points to an HTML file under `public/content/` which the
    // Article component can render when the blog page reads it server-side.
    contentPath: "/content/triolingo.html",
    hidden: false,
    tags: ["Hackathon", "Web Dev"],
  },
  {
    slug: "structure-from-motion",
    title: "Inferring Structure from Motion",
    type: "Dissertation",
    date: "2022/07/09",
    description:
      "Third year dissertation project for the University of Cambridge.",
    image: "/assets/images/thumbnails/structure-from-motion.png",
    hidden: false,
    tags: ["Computer Vision", "C++"],
  },
  {
    slug: "durhack-2025",
    title: "DurHack 2025",
    type: "Hackathon",
    date: "2025/11/02",
    description:
      "todo",
    image: "/window.svg",
    hidden: true,
    tags: ["Hackathon"],
  },
];

export default projects;
