import { BsGithub } from 'react-icons/bs';
import projectImage from '../assets/project22.jpeg';
import projectImage2 from '../assets/project2.jpeg';
import projectImage3 from '../assets/project3.jpeg';
import projectImage4 from '../assets/project4.jpeg';
import projectImage5 from '../assets/project23.jpeg';
import projectImage6 from '../assets/project25.jpeg';
import { TrendingUp, ShoppingCart, Users, DollarSign } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  github?: string;
  demo?: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Customer Churn Analysis',
    description:
      'Built a time-series forecasting model using Prophet to predict monthly revenue trends, enabling proactive budget planning and early identification of growth opportunities.',
    impact: '+$2.3M revenue identified through trend detection',
    tags: ['PowerBI', 'PowerQuery', 'Excel'],
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-600',
    github: '#',
    image: projectImage,
    featured: true,
  },
  {
    title: 'Covid 19 Coronavirus',
    description:
      'Covid 19 dashboard for Visualizing positive case trends from January to July 2020, with regional and country‑level drilldowns on case fatality rate, recovery rate, total recoveries, active and confirmed cases.',
    impact: '18% lift in checkout conversion rate',
    tags: ['PowerBI', 'PowerQuery', 'Excel'],
    icon: ShoppingCart,
    color: 'from-violet-500 to-purple-600',
    github: 'https://github.com/Fisayo01/COVID-19-Global-Case-Trend-Analysis',
    image: projectImage3,
    featured: true,
  },
  {
    title: 'Attrition Analysis',
    description:
      'An organization was losing many new hires after about two years; I used data analysis to uncover the root causes of attrition and built an interactive dashboard to guide HR and business decisions.',
    impact: '22% reduction in monthly churn rate',
    tags: ['PowerBI', 'PowerQuery', 'SQL'],
    icon: Users,
    color: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/Fisayo01/HR_Attrition_Analysis',
    image: projectImage2,
    featured: true,
  },
  {
    title: 'Super Store Sales Performance',
    description:
      'Sales Performance & Profitability Analysis (2017–2020) to identified key drivers of revenue and profit and also provided data-driven insights to support better pricing, product, and market strategies.',
    impact: '31% improvement in ROAS across paid channels',
    tags: ['DAX', 'PowerQuery', 'PowerBI'],
    icon: DollarSign,
    color: 'from-orange-500 to-amber-600',
    github: 'https://github.com/Fisayo01/Superstore_Sales_Analysis',
    image: projectImage4,
    featured: true,
  },
  {
    title: 'Coca-Cola Enterprise',
    description:
      'I completed SQL analysis on the Coca-Cola Enterprise Analytics dataset. Extracted key business insights on revenue, profitability, and product performance using advanced queries to give meaningful insights.',
    impact: '31% improvement in ROAS across paid channels',
    tags: ['PowerBI', 'PowerQuery', 'SQL', 'DAX'],
    icon: DollarSign,
    color: 'from-orange-500 to-amber-600',
    github: 'https://github.com/Fisayo01/Coca-Cola-Enterprise-Sales-Analytics-using-SQL',
    image: projectImage5,
    featured: true,
  },
  {
    title: 'E-commerce Sales Dashboard',
    description:
      'Analysis to uncover key insights into revenue, profitability, product performance, and regional trends.',
    impact: '31% improvement in ROAS across paid channels',
    tags: ['PowerQwery', 'SQL', 'Excel'],
    icon: DollarSign,
    color: 'from-orange-500 to-amber-600',
    github: 'https://github.com/Fisayo01/e-commerce_analysis',
    image: projectImage6,
    featured: true,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

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
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project; }) {

  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 transition-all group flex flex-col">
      <div className="">
        <img src={project.image} alt="" className='h-56 w-full' />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-1">{project.description}</p>
      {/* <p className="text-emerald-400 text-xs font-medium mb-4">↑ {project.impact}</p> */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs">{tag}</span>
        ))}
      </div>
      <div className="flex gap-3 pt-2 border-t border-slate-800">
        {project.github && (
          <a 
          href={project.github} 
          target="_blank"
          className="flex items-center gap-1.5 text-slate-500 hover:text-white text-sm transition-colors">
            <BsGithub size={15} /> Code
          </a>
        )}
      </div>
    </div>
  );
}
