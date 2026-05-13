import { useState } from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an email service or API
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's Work Together</h2>
          <p className="text-slate-500 mt-3 max-w-lg mx-auto">
            Have a data challenge? Looking for an analyst to join your team? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'omotosofisayoesther@gmail.com', href: 'mailto:omotosofisayoesther@gmail.com' },
                  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria (Open to remote)', href: null },
                  { icon: BsLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/fisayo-omotosho', href: 'https://www.linkedin.com/in/fisayo-omotoso-67082b173' },
                  { icon: BsGithub, label: 'GitHub', value: 'github.com/Fisayo01', href: 'https://github.com/Fisayo01' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 text-cyan-400 shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>
                      {href ? (
                        <a href={href} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Currently available</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm open to full-time roles, contract work, and consulting engagements. Typical response time is within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-8">
                <CheckCircle size={48} className="text-emerald-400" />
                <h3 className="text-white text-xl font-semibold">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="px-4 py-2 rounded-lg border border-slate-700 text-slate-400 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5" htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5" htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-sm mb-1.5" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg shadow-cyan-500/20"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
