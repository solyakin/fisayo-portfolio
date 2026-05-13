import { BarChart2, Mail } from 'lucide-react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <BarChart2 size={20} />
          <span>Fisayo Omotosho</span>
        </div>

        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Fisayo Omotosho·
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: BsGithub, href: 'https://github.com/Fisayo01', label: 'GitHub' },
            { icon: BsLinkedin, href: 'https://www.linkedin.com/in/fisayo-omotoso-67082b173', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:omotosofisayoesther@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-slate-600 hover:text-cyan-400 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
