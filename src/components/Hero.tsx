import { ArrowDown, Download } from 'lucide-react';
import profileImage from '../assets/profile-image.jpeg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Fisayo Omotoso
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">
            Data Analyst & Insights Engineer
          </p>

          <p className="text-slate-500 text-lg mb-10 leading-relaxed">
            I transform raw data into compelling stories that drive business decisions.
            Specializing in SQL, Python, and interactive dashboards that make complex
            data accessible to everyone.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              View My Work
            </a>
            <a
              href="https://drive.google.com/file/d/1crw26s43bFkRzZDu4VH53X_g8IzUGaNv/view?usp=drive_link"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          {/* Social links */}
          {/* <div className="flex items-center gap-5">
            {[
              { icon: BsGithub, label: 'GitHub', href: 'https://github.com/Fisayo01' },
              { icon: BsLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/fisayo-omotoso-67082b173' },
              { icon: Mail, label: 'Email', href: 'mailto:omotosofisayoesther@gmail.com' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-lg border border-slate-800 text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div> */}
        </div>

        {/* Right: profile image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg" />
            <img
              src={profileImage}
              alt="Fisayo Omotoso"
              className="relative w-72 sm:w-80 lg:w-96 aspect-[3/4] object-cover rounded-2xl border border-slate-700"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
