interface DevSkill {
  title: string;
  href: string;
  description: string;
  icon: string;
}

export const devSkills: DevSkill[] = [
  {
    title: "Frontend (web)",
    href: "/dev-skills",
    description: "React (NextJs)",
    icon: "nextjs_zt22nk",
  },
  {
    title: "Backend",
    href: "/docs/primitives/hover-card",
    description: "Node (Express), .NET, Thinkphp",
    icon: "backend_rp4ohq",
  },
  {
    title: "Mobile",
    href: "/docs/primitives/progress",
    description: "React Native + Android SDK integration",
    icon: "react-native_tou0cy",
  },
  {
    title: "Deep learning",
    href: "/docs/primitives/scroll-area",
    description:
      "Generative Adversarial Network (GAN), Object detection (YOLO)",
    icon: "ai_pezfgj",
  },
  {
    title: "Cloud & Deploy",
    href: "/docs/primitives/scroll-area",
    description: "AWS, Docker, Firebase",
    icon: "cloud_liwdcj",
  },
  {
    title: "Authentication",
    href: "/docs/primitives/scroll-area",
    description: "OAuth2, JWT",
    icon: "auth_wyyg2p",
  },
];
