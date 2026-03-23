import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl mb-6 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text">Get In Touch</h2>
        <p className="text-slate-300 text-lg mb-12">
          新しいプロジェクトやコラボレーションのご相談、お気軽にご連絡ください。
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://github.com/shiomi4030918"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 rounded-lg transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>

        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-400">
            <p>© 2026 汐見 耀. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <a
                href="https://bondly.jp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                Bondly合同会社
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}