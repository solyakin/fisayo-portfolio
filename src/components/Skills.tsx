interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages & Querying',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'SQL (MySQL)', level: 97 },
      { name: 'Python (pandas, NumPy)', level: 92 },
      { name: 'R', level: 78 },
      { name: 'DAX / M Query', level: 85 },
    ],
  },
  {
    title: 'Visualization & BI',
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Tableau', level: 94 },
      { name: 'Power BI', level: 88 },
      { name: 'Excel', level: 80 },
    ],
  },
  {
    title: 'Cloud & Tools',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'GCP (BigQuery, Data Studio)', level: 88 },
      { name: 'AWS (Redshift, S3)', level: 76 },
      { name: 'Git & GitHub', level: 91 },
      { name: 'Excel / Google Sheets', level: 95 },
    ],
  },
  {
    title: 'Other Competencies',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Data Storytelling', level: 85 },
      { name: 'Data Cleaning', level: 72 },
      { name: 'Database Managment', level: 68 },
      { name: 'Data Integrity', level: 90 },
    ],
  },
];

// const badges = [
//   'Data Storytelling', 'Data Cleaning', 'Forecasting', 'Database Management',
//   'Data Integrity', 'Process Optimization', 'Technical Communication',
// ];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-white font-semibold mb-5">{cat.title}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Badges */}
        {/* <div className="text-center">
          <p className="text-slate-500 text-sm mb-4">Other competencies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-400 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
