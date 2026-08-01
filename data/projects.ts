export interface WebProject {
  id: string;
  name: string;
  tags: string[];
  description: string;
  previewUrl?: string;
  href?: string;
  imageSrc: string;
  imageBg?: string;
}

export interface GraphicDesignProject {
  id: string;
  title: string;
  description: string;
  driveUrl: string;
  images: string[];
}

export const webProjects: WebProject[] = [
   {
    id: "1",
    name: "Redeemgo",
    tags: ["Ai chatbot", "Nextjs", "map"],
    description:
      "Reedem go is a minimal, precision-guided navigation app mapping every parish, auditorium, bank, car park, and street inside the campground layout, with assisted ai of the Reedem christian church.",
    href: "https://redeemgo.netlify.app/",
    imageSrc: "/project-img/redeemgo.png",
    imageBg: "#E8E6EE",
  },
  {
    id: "2",
    name: "Dexa mail parser",
    tags: ["Next.js", "google sheet"],
    description: "Connect Gmail or Zoho, define your workflows — Brunch, Reservation, Wedding, whatever you need — and let AI classify and extract the right fields into the right Google Sheet automatically.",
    previewUrl: "https://dexaemail.netlify.app/",
    imageSrc: "/project-img/dexa-parser.png",
    imageBg: "#242424",
  },
  {
    id: "3",
    name: "Microlens",
    tags: ["Ai diagnose", "React.js", "Landing page"],
    description:
      "Microlens is a progressive web app powerd by Gemini AI built for everyone, from healthcare providers to everyday users, bringing accurate diagnosis and health education right to your fingertips.",
    href: "https://microlens-sf5r.onrender.com/",
    imageSrc: "/project-img/microlens.png",
    imageBg: "#a78bfa",
  },
  {
    id: "4",
    name: "Butler",
    tags: ["Web Developer", "React.js", "Landing page"],
    description:
      "Butler is a startup landing page i built,it offers home cleaning, laundry service, and food preparation.",
    href: "https://develop.d5rp29qz4fsyd.amplifyapp.com/",
    imageSrc: "/project-img/butler.png",
    imageBg: "#EDE8FF",
  },
  {
    id: "5",
    name: "ZG site",
    tags: ["Framer", "animation", "Landing page"],
    description:
      "A sleek landing page built in framer .",
    href: "https://sincere-taxonomy-665097.framer.app/",
    imageSrc: "/project-img/zgsite.png",
    imageBg: "#100F13",
  },
  // Additional projects for the full /projects page...
];

export const graphicDesignProjects: GraphicDesignProject[] = [
  {
    id: "gd-1",
    title: "Graphic Design Portfolio",
    description:
      "I create visually compelling designs that communicate ideas effectively, from social media graphics to print materials. My designs are crafted to engage and leave a lasting impression.",
    driveUrl: "https://drive.google.com/drive/folders/1c0vswNRwzwny5MFekvmI-TbmwZrNIQE3?usp=sharing",
    images: [
      "/designs/flyer1.png",
      "/designs/flyer2.png",
      "/designs/flyer3.png",
      "/designs/flyer4.png",
      "/designs/flyer5.png",
    ],
  },
];