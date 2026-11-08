import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const profileLinks = [
  {
    id: "cv",
    label: "Curriculum Vitae",
    shortLabel: "CV",
    href: "/megan_finch_cv.pdf",
    icon: null,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/meganelisabethfinch",
    icon: faGithub,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/megan-finch/",
    icon: faLinkedin,
    external: true,
  },
  {
    id: "scholar",
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=57kMP_MAAAAJ&hl=en&oi=sra",
    icon: faGraduationCap,
    external: true,
  },
  {
    id: "email",
    label: "Email me",
    href: "mailto:megan.e.finch@durham.ac.uk",
    icon: faEnvelope,
    external: false,
  },
];
