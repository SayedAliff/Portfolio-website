// src/contents/projects.ts (Project Data File)

interface Project {
  title: string;
  description: string;
  image: string; // Path to the project image in /public
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export const projects: Project[] = [
  {
    title: "Gemini Chat CLI",
    description: "A powerful command-line interface (CLI) tool built to quickly query the Google Gemini API directly from your terminal, simplifying development workflows and rapid prototyping.",
    image: "/images/gemini-cli-placeholder.png", 
    technologies: ["Python", "Google Gemini API", "CLI", "Terminal"],
    githubLink: "https://github.com/SayedAliff/gemini-chat-cli",
    demoLink: "#", // Add your live demo URL or keep '#' if none exists
  },
  // If you have other projects, you can add them here following the Project interface structure.
];