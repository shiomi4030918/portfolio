import {
  Code2,
  Smartphone,
  Database,
  Bot,
  ClipboardList,
} from "lucide-react";
import React from "react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "フロントエンド",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      icon: Smartphone,
      title: "モバイルアプリ",
      skills: ["React Native"],
    },
    {
      icon: Database,
      title: "バックエンド",
      skills: ["API開発", "データベース設計", "サーバー管理"],
    },
    {
      icon: Bot,
      title: "AI",
      skills: [
        "Gemini API",
        "LLM活用",
        "AIチャットボット開発",
        "AI導入支援",
      ],
    },
    {
      icon: ClipboardList,
      title: "プロジェクトマネジメント",
      skills: [
        "要件定義",
        "顧客ヒアリング",
        "進捗管理",
        "チームマネジメント",
        "開発ディレクション",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-4xl mb-12 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
          保有スキル
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                <h3 className="card-title text-lg mb-4 text-cyan-300">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="skill-item text-sm text-slate-300 flex items-start"
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
