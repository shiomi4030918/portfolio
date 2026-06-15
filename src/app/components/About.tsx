import React from "react";
import { Building2, GraduationCap, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title text-4xl mb-12 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <Building2 className="text-white" size={24} />
            </div>
            <h3 className="card-title text-xl mb-3 text-cyan-300">学生起業</h3>
            <p className="card-subtitle text-slate-200 mb-2">Bondly合同会社 代表社員</p>
            <p className="card-body text-slate-400 text-sm">
              学生期間中に起業し、自社アプリの開発・運営およびWeb制作・システム開発の受託事業を行っています。
              自社サービスの企画・開発・運営、Webサイト・LP制作、システム開発受託、クライアントとの要件定義・提案、開発チームのマネジメントを担当しています。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="card-title text-xl mb-3 text-emerald-300">大学生</h3>
            <p className="card-subtitle text-slate-200 mb-2">
              立命館大学 理工学部 電子情報工学科 3回生
            </p>
            <p className="card-body text-slate-400 text-sm">
              2028年卒業予定。学業とビジネスを両立しながら活動しています。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(20,184,166,0.5)]">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="card-title text-xl mb-3 text-teal-300">副代表</h3>
            <p className="card-subtitle text-slate-200 mb-2">
              アプリ開発サークル「はしるアルパカ」
            </p>
            <p className="card-body text-slate-400 text-sm">
              立命館大学公認のアプリ開発サークルの副代表として活動。大阪・関西万博関連プロジェクトのWebサイト制作、大学から依頼を受けたアプリ開発、地域の小中学生向けプログラミング教育イベントの企画・運営、メンバー育成および組織運営に携わっています。
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
          <p className="card-body text-slate-300">
            立命館大学理工学部電子情報工学科に在籍しています。学生起業家として自社サービスの開発・運営を行う一方、Webサイト制作やシステム開発の受託事業にも取り組んでいます。
            また、アプリ開発サークル「はしるアルパカ」の副代表として、企業・大学との共同プロジェクトやプログラミング教育イベントの運営を経験してきました。
            エンジニアとしての技術力だけでなく、プロジェクトマネージャーとして顧客ヒアリングや要件定義、チームマネジメントまで一貫して担当しており、「技術とビジネスをつなぐ開発者」を目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}
