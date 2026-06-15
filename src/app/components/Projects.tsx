import {
  Smartphone,
  Globe,
  GraduationCap,
  Briefcase,
  ClipboardList,
  Building,
  Bot,
  Layout,
  Box,
} from "lucide-react";
import React from "react";

export function Projects() {
  const projects = [
    {
      icon: Briefcase,
      title: "学生起業・受託事業",
      client: "Bondly合同会社",
      description:
        "学生期間中に起業し、自社アプリの開発・運営に加え、Webサイト・LP制作やシステム開発の受託事業を展開。クライアントとの要件定義・提案から開発チームのマネジメントまで一貫して担当しています。",
      tags: ["起業", "受託開発", "PM"],
      color: "cyan",
    },
    {
      icon: Globe,
      title: "大阪・関西万博 Webサイト制作",
      client: "大阪・関西万博関連プロジェクト",
      description:
        "アプリ開発サークル「はしるアルパカ」として、大阪・関西万博関連プロジェクトのWebサイト制作に参加。多くの訪問者に対応できる、スケーラブルで使いやすいサイトを構築しました。",
      tags: ["Web Development", "Frontend", "UX/UI"],
      color: "emerald",
    },
    {
      icon: Smartphone,
      title: "立命館大学 アプリ開発",
      client: "立命館大学",
      description:
        "大学から正式に依頼を受け、学生向けスマホアプリケーションの開発を担当。企画から設計、実装まで一貫して手がけました。",
      tags: ["Mobile App", "React Native"],
      color: "teal",
    },
    {
      icon: GraduationCap,
      title: "プログラミング教育イベント",
      client: "地域の小中学生",
      description:
        "地域の小中学生を対象としたプログラミング教育イベントの企画・運営を担当。次世代のエンジニア育成に貢献するとともに、メンバー育成および組織運営にも携わりました。",
      tags: ["Education", "イベント運営", "組織運営"],
      color: "cyan",
    },
    {
      icon: ClipboardList,
      title: "製造業向け図面管理アプリ開発",
      client: "STARUP（インターン）",
      description:
        "製造業向け図面管理アプリの開発プロジェクトに参加し、図面書き込み機能のプロジェクトマネージャーを担当。顧客企業へのヒアリング、要件整理、エンジニアとの仕様調整、進捗管理を行い、実際の利用企業へ訪問して現場の課題を直接ヒアリングすることで、ユーザー目線の機能改善を推進しました。",
      tags: ["PM", "要件定義", "顧客ヒアリング"],
      color: "emerald",
    },
    {
      icon: Building,
      title: "Hitotech株式会社",
      client: "Hitotech株式会社",
      description:
        "Webサイト開発、システム開発、新規事業向けHP・LP制作、社内システム開発、AI導入支援、営業活動、外部パートナーとの調整、サーバー管理、マーケティング業務など幅広い業務を担当。エンジニアリングだけでなく、企画・営業・運用まで一貫して携わっています。",
      tags: ["Web", "システム開発", "AI導入", "マーケティング"],
      color: "teal",
    },
    {
      icon: Bot,
      title: "AIチャットボット開発",
      client: "複数プロジェクト",
      description:
        "Gemini APIを活用したチャットボット機能の実装。Webサイトへの組み込みにより、ユーザーからの問い合わせ対応の自動化を実現しました。",
      tags: ["Gemini API", "LLM", "Web API"],
      color: "cyan",
    },
    {
      icon: Layout,
      title: "Webサイト・LP制作",
      client: "複数の企業・団体",
      description:
        "複数の企業や団体向けにWebサイト・LPの制作を担当。要件定義、UI/UX設計、フロントエンド実装、デプロイ、運用保守まで一貫して対応しています。",
      tags: ["Next.js", "React", "TypeScript", "Vercel"],
      color: "emerald",
    },
    {
      icon: Box,
      title: "3D・可視化技術開発",
      client: "研究・開発プロジェクト",
      description:
        "Three.jsを活用した3Dデータ表示や断面表示機能の開発に取り組み。3Dモデル表示、断面表示機能、CADデータ活用、Webブラウザ上での可視化技術の研究を行っています。",
      tags: ["Three.js", "3D", "CAD", "可視化"],
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="section-title text-4xl mb-4 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
          実績・活動
        </h2>
        <p className="section-lead text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          技術力だけでなく、プロジェクト管理やチーム運営にも携わってきた主な実績です。
        </p>
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
                <h3 className="card-title text-xl mb-2 text-slate-100">{project.title}</h3>
                <p className="card-subtitle text-sm text-slate-400 mb-3">
                  {project.client}
                </p>
                <p className="card-body text-slate-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`project-tag px-3 py-1 ${colorClasses.tag} border rounded-lg text-xs`}
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
