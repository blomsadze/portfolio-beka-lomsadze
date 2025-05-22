import React from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { FaBrain, FaGlobeAmericas, FaBullseye } from "react-icons/fa";
import {
  HiChatBubbleLeftEllipsis,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

const skills = [
  {
    title: "What I bring to teams",
    items: [
      { name: "Strong UI/UX instincts", icon: <FaBrain color="#f87171" /> },
      {
        name: "Cross-platform experience",
        icon: <FaGlobeAmericas color="#38bdf8" />,
      },
      {
        name: "Proactive communication",
        icon: <HiChatBubbleLeftEllipsis color="#facc15" />,
      },
      {
        name: "Product-oriented mindset",
        icon: <FaBullseye color="#ef4444" />,
      },
      {
        name: "Clean, maintainable code",
        icon: <HiOutlineCodeBracket color="#34d399" />,
      },
    ],
  },
  {
    title: "Front-end Engineer Design",
    items: [
      { name: "React.js", icon: <SiReact color="#61DAFB" /> },
      { name: "React Native", icon: <SiReact color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs color="white" /> },
      { name: "Vite", icon: <SiVite color="#646CFF" /> },
      { name: "Figma", icon: <SiFigma style={{ color: "#A259FF" }} /> },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="white" /> },
      { name: "Prisma", icon: <SiPrisma color="#0C344B" /> },
      { name: "Redis", icon: <SiRedis color="#DC382D" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-blafck text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
        These are the <br /> technologies I’ve been using
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
        {skills.map((group) => (
          <div
            key={group.title}
            className="bg-zinc-900 rounded-lg p-6 w-full max-w-xs"
          >
            <h3 className="text-lg font-medium mb-4">{group.title}</h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
