export const SOCIAL_LINKS = {
  linkedIn: "https://www.linkedin.com/in/rabeet-ahmer-b4204a332/",
  github: "https://www.github.com/Rabeet-Ahmer/",
  x: "https://x.com/RabeetAhmer25",
  email: "rabeetahmer9749@gmail.com",
  cv: "/resume.pdf",
};

export const PROJECTS_DATA = [
  {
    title: "Mentora",
    category: "SaaS Platform — AI Coaching",
    description:
      "An AI-powered coaching platform for students to talk to the topics they get stuck on.",
    image: "/project1.jpeg",
    githubLink: "https://www.github.com/Rabeet-Ahmer/Converso",
    liveLink: "https://mentora-smoky.vercel.app/",
  },
  {
    title: "AI Todo App",
    category: "Web App — AI Assistant",
    description:
      "An AI-powered todo app that helps you stay organized and focused.",
    image: "/project2.jpeg",
    githubLink: "https://www.github.com/Rabeet-Ahmer/AI-Todo-App",
    liveLink: "https://ai-todo-app-ten-ebon.vercel.app/"
  },
  {
    title: "Deep Research Agent",
    category: "Web App — AI Assistant",
    description:
      "An AI-powered research agent for student's and professional's deep research work.",
    image: "/project3.jpeg",
    githubLink: "https://www.github.com/Rabeet-Ahmer/Deep-Research-Agent",
    liveLink: "https://research-agent.live", // Replace with actual live link if available
  },
];

export const FOOTER_LINKS = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedIn },
  { label: "GitHub", href: SOCIAL_LINKS.github },
  { label: "X (Twitter)", href: SOCIAL_LINKS.x },
  { label: "Email", href: `mailto:${SOCIAL_LINKS.email}` },
];
