const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '15+', label: 'Clients Served' },
  { value: '2M+', label: 'Rows Analyzed' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text + stats */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I specialize in using Power BI, SQL, Excel, and Python to transform raw data into clear insights that support strategic decision-making. With a background in quality analysis, I bring a unique combination of analytical precision and business awareness to every project.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My goal is simple: build data solutions that are not only visually effective, but genuinely useful for solving business problems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Outside of work, I enjoy exploring new datasets out of pure curiosity, keeping up with trends in data storytelling, and finding creative ways to visualize everyday information.
            </p>
          </div>

          {/* Right: toolkit */}
          <div className="space-y-4">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Stats</p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 text-center hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="text-4xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {value}
                  </div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
