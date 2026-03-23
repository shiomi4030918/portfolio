import { Smartphone, Globe, GraduationCap } from "lucide-react";
import React from "react";

export function Projects() {
  const projects = [
    {
      icon: Smartphone,
      title: "立命館大学 スマホアプリ開発",
      client: "立命館大学",
      description:
        "大学から正式に依頼を受け、学生向けスマホアプリケーションの開発を担当。企画から設計、実装まで一貫して手がけました。",
      tags: ["Mobile App", "iOS", "Android"],
      color: "cyan",
    },
    {
      icon: Globe,
      title: "大阪万博 Webサイト開発",
      client: "大阪万博",
      description:
        "大阪万博から依頼されたWebサイトの開発プロジェクト。多くの訪問者に対応できる、スケーラブルで使いやすいサイトを構築しました。",
      tags: ["Web Development", "Frontend", "UX/UI"],
      color: "emerald",
    },
    {
      icon: GraduationCap,
      title: "プログラミング教育プログラム",
      client: "地域中学校",
      description:
        "地域の中学生を対象としたプログラミング授業のカリキュラムを作成。次世代のエンジニア育成に貢献しました。",
      tags: ["Education", "Programming", "Curriculum"],
      color: "teal",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        border: "border-cyan-500/30 hover:border-cyan-500/50",
        iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        iconShadow: "shadow-[0_0_20px_rgba(34,211,238,0.5)]",
        cardShadow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
        tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      },
      emerald: {
        border: "border-emerald-500/30 hover:border-emerald-500/50",
        iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        iconShadow: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
        cardShadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]",
        tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      },
      teal: {
        border: "border-teal-500/30 hover:border-teal-500/50",
        iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
        iconShadow: "shadow-[0_0_20px_rgba(20,184,166,0.5)]",
        cardShadow: "hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
        tag: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl mb-12 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border ${colorClasses.border} ${colorClasses.cardShadow} transition-all hover:-translate-y-2`}
              >
                <div
                  className={`w-12 h-12 ${colorClasses.iconBg} ${colorClasses.iconShadow} rounded-xl flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-slate-100">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-3 font-medium">
                  依頼元: {project.client}
                </p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 ${colorClasses.tag} border rounded-lg text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}