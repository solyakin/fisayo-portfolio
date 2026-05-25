interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

const roles: Role[] = [
  {
    company: 'May & Baker Nigeria Plc',
    title: 'Data & Quality Analyst',
    period: 'Oct 2024 – Present',
    location: 'Ogun State, NG',
    current: true,
    highlights: [
      'Analyzed production and quality data to identify trends and reduce curring defects by 40%',
      'Monitored and validated real-time datasets to ensure 100% data accuracy for reporting',
      'Conducted trend analysis on product metrics to detect anomalies and prevent large-scale errors',
      'Transformed raw production data into structured reports for decision-making',
      'Maintained and audited datasets to ensure consistency, integrity, and compliance.'
    ],
  },
  {
    company: 'Solace Enterprise',
    title: 'Data Analyst Intern',
    period: 'Jan. 2024 – Sept. 2024',
    location: 'Ogun state, NG',
    highlights: [
      'Collected and analyzed data to support quality control decisions',
      'Improved data collection processes, increasing efficiency by 20%',
      'Developed insightful dashboards that track product performance using Power Bi',
      'Identified patterns in product quality issues, helping reduce customer complaints',
      '⁠Structured and interpreted datasets for reporting and operational improvements.'
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-slate-700 to-transparent hidden md:block" />

          <div className="space-y-10">
            {roles.map((role, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Dot */}
                <div className="absolute left-[18px] top-6 w-3.5 h-3.5 rounded-full border-2 border-cyan-500 bg-slate-950 hidden md:block" />

                <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-lg">{role.title}</h3>
                        {role.current && (
                          <span className="px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-medium border border-cyan-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium">{role.company}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500 shrink-0">
                      <div>{role.period}</div>
                      <div>{role.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 p-6 rounded-2xl border border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 w-fit">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Bsc. Microbiology</h3>
            <p className="text-cyan-400 text-sm">University of Ibadan</p>
            <p className="text-slate-500 text-sm">2019 – 2024 · GPA 3.46/4.0</p>
          </div>
          <div className="text-slate-500 text-sm shrink-0">Oyo State, Nigeria</div>
        </div>
      </div>
    </section>
  );
}
