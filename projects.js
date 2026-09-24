/* ------------------------------------------------------------------
   YOUR PROJECTS  -  this is the only file you need to edit.

   To add a project: copy one { ... } block, paste it, change the words.

   id        a short code shown top-left of the row (P2401, 2024-03, ...)
   update    true = shows a small UPDATE label next to the code (optional)
   category  ONE word shown in the row and used by the filter at the top
             (built, ongoing, study, competition, masterplan, ...)
   tags      extra filter words for this project (optional)
   place     where it is
   years     "2024 - 2026", "2024 - ..." or "2023"
   title     the project name
   href      link to the project's own page (optional; leave "" if none)
   text      the description, one string per paragraph
   images    image files you uploaded to the images folder, e.g. "images/house-01.jpg"
             ("placeholder" shows a grey box until you have the picture)
------------------------------------------------------------------- */

const SITE = { name: "YOUR NAME" };          // shown top-left

const PROJECTS = [
  {
    id: "P2503", update: true, category: "masterplan", tags: ["study"],
    place: "City name", years: "2025 - 2026",
    title: "Project title, icw Partner name", href: "",
    text: [
      "Replace this with a few sentences about the project: where it is, what the brief was, and what you did.",
      "A second paragraph is optional. Add as many as you need."
    ],
    images: ["placeholder", "placeholder"]
  },
  {
    id: "P2402", update: true, category: "built",
    place: "Town name", years: "2022 - 2026",
    title: "Another project title", href: "",
    text: [
      "Write the description here. Long descriptions work too, the row simply grows taller to fit the text and the pictures."
    ],
    images: ["placeholder", "placeholder"]
  },
  {
    id: "P2317", category: "ongoing",
    place: "Place", years: "2024 - ...",
    title: "House, icw Engineer name", href: "",
    text: [
      "First paragraph about the house.",
      "Second paragraph about its structure or materials.",
      "Third paragraph about the facade and windows."
    ],
    images: ["placeholder", "placeholder"]
  },
  {
    id: "P2405", category: "competition",
    place: "Place", years: "2024 - 2025",
    title: "Competition entry title", href: "",
    text: ["A short description of the competition and your proposal."],
    images: ["placeholder"]
  },
  {
    id: "P2401", category: "study",
    place: "Place", years: "2024",
    title: "A study or research project", href: "",
    text: ["A short description of the study."],
    images: []
  }
];
