interface DevSkill {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export const devSkills: DevSkill[] = [
  {
    title: "Frontend (web)",
    href: "/docs/primitives/alert-dialog",
    description: "React (NextJs)",
    icon: "/dev-skills-icon/nextjs.png",
  },
  {
    title: "Backend",
    href: "/docs/primitives/hover-card",
    description: "Node (Express), .NET, Thinkphp",
    icon: "/dev-skills-icon/backend.png",
  },
  {
    title: "Mobile",
    href: "/docs/primitives/progress",
    description: "React Native + Android SDK integration",
    icon: "/dev-skills-icon/react-native.png",
  },
  {
    title: "Deep learning",
    href: "/docs/primitives/scroll-area",
    description: "Generative Adversarial Network (GAN), Object detection (YOLO)",
    icon: "/dev-skills-icon/ai.png",
  },
  {
    title: "Cloud and BaaS",
    href: "/docs/primitives/scroll-area",
    description: "AWS, Firebase",
    icon: "/dev-skills-icon/aws.png",
  },
  {
    title: "Authentication",
    href: "/docs/primitives/scroll-area",
    description: "OAuth2, JWT",
    icon: "/dev-skills-icon/auth.png",
  },
];
