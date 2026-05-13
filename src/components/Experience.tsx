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
    company: 'Stripe',
    title: 'Senior Data Analyst',
    period: 'Jan 2022 – Present',
    location: 'San Francisco, CA',
    current: true,
    highlights: [
      'Lead analyst for the Revenue Intelligence team, owning dashboards used by 200+ stakeholders across Finance and GTM.',
      'Built a self-serve analytics layer in dbt + Looker reducing ad-hoc SQL requests by 60%.',
      'Designed A/B testing framework standardizing experiment analysis across 12 product squads.',
      'Mentored 3 junior analysts, running weekly office hours and quarterly growth reviews.',
    ],
  },
  {
    company: 'Shopify',
    title: 'Data Analyst',
    period: 'Mar 2020 – Dec 2021',
    location: 'Remote (Toronto, CA)',
    highlights: [
      'Owned merchant health scoring model in BigQuery, powering churn prevention for 1M+ merchants.',
      'Partnered with Product to redesign onboarding funnel; contributed to 14% improvement in D30 activation.',
      'Automated weekly reporting pipeline with Airflow, saving 8+ hours of manual work per week.',
    ],
  },
  {
    company: 'Accenture',
    title: 'Business Intelligence Analyst',
    period: 'Jul 2018 – Feb 2020',
    location: 'New York, NY',
    highlights: [
      'Delivered Tableau dashboards for Fortune 500 clients in retail and healthcare verticals.',
      'Wrote optimized SQL queries against Oracle and Snowflake warehouses for executive reporting.',
      'Supported data migration project, validating 50M+ records for accuracy and completeness.',
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
            <h3 className="text-white font-semibold">M.S. Statistics</h3>
            <p className="text-cyan-400 text-sm">Stanford University</p>
            <p className="text-slate-500 text-sm">2016 – 2018 · GPA 3.9/4.0 · Thesis: Bayesian Methods for Time-Series Anomaly Detection</p>
          </div>
          <div className="text-slate-500 text-sm shrink-0">Stanford, CA</div>
        </div>
      </div>
    </section>
  );
}
