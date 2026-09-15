import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export type RailProject = {
  slug: string;
  title: string;
  summary: string;
  status: string;
  platform: string;
  hero: string;
  heroAlt: string;
  accent: 'cobalt' | 'orange';
  evidence: Array<{ label: string; value: string; note?: string }>;
};

export default function ProjectRail({ projects }: { projects: RailProject[] }) {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <section className="proof-rail" aria-label="Selected project evidence">
      <div className="proof-rail__stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="proof-rail__image"
            key={project.slug}
            initial={{ opacity: 0.4, y: 12, filter: 'contrast(1.3) brightness(.4)' }}
            animate={{ opacity: 1, y: 0, filter: 'contrast(1) brightness(1)' }}
            exit={{ opacity: 0.2, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={project.hero} alt={project.heroAlt} width={1400} height={900} />
            <span className={`proof-rail__accent proof-rail__accent--${project.accent}`} aria-hidden="true" />
          </motion.div>
        </AnimatePresence>
        <div className="proof-rail__caption" aria-live="polite">
          <p>{project.platform} · {project.status}</p>
          <p>{project.summary}</p>
          <a href={`/work/${project.slug}/`}>Open the case study <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="proof-rail__controls" role="group" aria-label="Choose a project">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item.title}</strong>
            <span>{item.evidence[0]?.value}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

