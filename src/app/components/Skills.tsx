import { Code2, Palette, Database, Rocket } from "lucide-react";
import React from "react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Web Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: Palette,
      title: "App Development",
      skills: ["React Native", "Firebase", "Supabase"],
    },
    {
      icon: Database,
      title: "Design Tools",
      skills: [
        "Figma",
        "Canva",
        "manus",
      ],
    },
    {
      icon: Rocket,
      title: "Communication",
      skills: [
        "Slack",
        "Discord",
        "Zoom",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl mb-12 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg mb-4 text-cyan-300">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm text-slate-300 flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}