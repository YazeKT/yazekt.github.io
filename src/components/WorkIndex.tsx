import { useState } from 'react';
type Project = { slug:string; title:string; summary:string; platform:string; status:string; featuredOrder:number; art:string; artAlt:string; hero:string; heroAlt:string; heroWidth:number; heroHeight:number; };
export default function WorkIndex({ projects }: { projects: Project[] }) {
  const [filter,setFilter]=useState<'all'|'desktop'|'local-web'>('all');
  const visible=projects.filter((project)=>filter==='all'||(filter==='desktop'?project.platform.includes('desktop'):project.platform.includes('web app')));
  return <>
    <div className="work-filters" role="group" aria-label="Filter case studies">{([['all','All work'],['desktop','Desktop'],['local-web','Local web']] as const).map(([value,label])=><button key={value} type="button" aria-pressed={filter===value} onClick={()=>setFilter(value)}>{label}</button>)}</div>
    <p className="filter-count" aria-live="polite">Showing {visible.length} of {projects.length} case studies</p>
    <section className="project-grid" aria-label="Project case studies">{visible.map((project)=><article className="project-card" key={project.slug}>
      <a className="project-card__art" href={`/work/${project.slug}/`} aria-label={`Read the ${project.title} case study`}><img src={project.art} srcSet={`${project.art.replace('.webp','-800.webp')} 800w, ${project.art.replace('.webp','-1600.webp')} 1600w, ${project.art} 3840w`} sizes="(max-width: 900px) 100vw, 63vw" alt={project.artAlt} width="3840" height="2160" loading="lazy" /></a><span className="art-label">Conceptual artwork</span>
      <div className="project-card__copy"><p className="mono">{String(project.featuredOrder).padStart(2,'0')} · {project.platform}</p><h2><a href={`/work/${project.slug}/`}>{project.title}</a></h2><p>{project.summary}</p><div className="project-card__screen screen-frame"><img src={project.hero} alt={project.heroAlt} width={project.heroWidth} height={project.heroHeight} loading="lazy" /></div><a className="text-link" href={`/work/${project.slug}/`}>Open the case study ↗</a></div>
    </article>)}</section>
  </>;
}
