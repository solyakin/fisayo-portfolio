import { BsGithub } from 'react-icons/bs';
import { ExternalLink, TrendingUp, ShoppingCart, Users, DollarSign, Mail } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Revenue Forecasting Dashboard',
    description:
      'Built a time-series forecasting model using Prophet and ARIMA to predict monthly revenue with 94% accuracy. Integrated results into an interactive Tableau dashboard giving finance teams real-time scenario planning.',
    impact: '+$2.3M revenue identified through trend detection',
    tags: ['Python', 'Prophet', 'SQL', 'Tableau', 'BigQuery'],
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-600',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Funnel Analysis',
    description:
      'End-to-end funnel analysis for a D2C brand with 500K monthly users. Identified drop-off points in the checkout flow and delivered A/B test recommendations that improved conversion by 18%.',
    impact: '18% lift in checkout conversion rate',
    tags: ['SQL', 'Python', 'Mixpanel', 'dbt', 'Looker'],
    icon: ShoppingCart,
    color: 'from-violet-500 to-purple-600',
    github: '#',
    featured: true,
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Trained an XGBoost classifier to predict customer churn 30 days in advance with 89% recall. Built a Power BI dashboard for CX teams to prioritize at-risk accounts, reducing churn by 22%.',
    impact: '22% reduction in monthly churn rate',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'Power BI', 'AWS'],
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Marketing Attribution Model',
    description:
      'Replaced last-touch attribution with a multi-touch Markov chain model, rebalancing $4M in ad spend across channels. Built automated ETL pipeline pulling from Google Ads, Meta, and Salesforce APIs.',
    impact: '31% improvement in ROAS across paid channels',
    tags: ['Python', 'R', 'Airflow', 'dbt', 'BigQuery'],
    icon: DollarSign,
    color: 'from-orange-500 to-amber-600',
    github: '#',
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">My Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            A selection of data projects that delivered measurable business impact.
          </p>
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Others */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {others.map((project) => (
            <ProjectCard key={project.title} project={project} horizontal />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, horizontal = false }: { project: Project; horizontal?: boolean }) {
  const Icon = project.icon;

  if (horizontal) {
    return (
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all group flex gap-6 items-start">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} shrink-0`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a href={project.github} className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
                  <Mail size={18} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Demo">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">{project.description}</p>
          <p className="text-emerald-400 text-xs font-medium mb-3">↑ {project.impact}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all group flex flex-col">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} w-fit mb-4`}>
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>
      <p className="text-emerald-400 text-xs font-medium mb-4">↑ {project.impact}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs">{tag}</span>
        ))}
      </div>
      <div className="flex gap-3 pt-2 border-t border-slate-800">
        {project.github && (
          <a href={project.github} className="flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors">
            <BsGithub size={15} /> Code
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="flex items-center gap-1.5 text-slate-500 hover:text-cyan-400 text-sm transition-colors">
            <ExternalLink size={15} /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
