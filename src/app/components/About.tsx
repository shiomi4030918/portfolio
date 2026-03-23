import React from "react";
import { Building2, GraduationCap, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl mb-12 text-center text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              <Building2 className="text-white" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-cyan-300">代表社員</h3>
            <p className="text-slate-200 font-medium mb-2">Bondly合同会社</p>
            <p className="text-slate-400 text-sm">
              業務委託や自社開発アプリの開発、保守運営を行っています。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-emerald-300">大学生</h3>
            <p className="text-slate-200 font-medium mb-2">立命館大学 3回生</p>
            <p className="text-slate-400 text-sm">
              2028年卒業予定。学業とビジネスを両立しながら活動しています。
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-teal-500/30 hover:border-teal-500/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(20,184,166,0.5)]">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-teal-300">PDM</h3>
            <p className="text-slate-200 font-medium mb-2">走るアルパカ</p>
            <p className="text-slate-400 text-sm">
              アプリ開発サークルでプロダクトデザインマネージャーを務めています。
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-cyan-500/20">
          <p className="text-slate-300 leading-relaxed">
            スマホアプリ開発からWebサイト開発まで幅広く手がけるエンジニアです。
            現在はBondly合同会社の代表社員として、業務委託や自社開発アプリの開発・保守運営を行っています。
            また、立命館大学3回生として学業にも励みながら、アプリ開発サークル「走るアルパカ」でPDMを務め、
            チームをリードしています。技術と経営、そして教育の分野で価値を創造することを目指しています。
          </p>
        </div>
      </div>
    </section>
  );
}