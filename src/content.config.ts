import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.url();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().min(2),
    summary: z.string().min(40),
    outcome: z.string().min(20),
    status: z.string(),
    role: z.string(),
    platform: z.string(),
    stack: z.array(z.string()).min(2),
    featuredOrder: z.number().int().positive(),
    hero: z.string().startsWith('/images/'),
    heroAlt: z.string().min(20),
    secondaryImage: z.string().startsWith('/images/'),
    secondaryAlt: z.string().min(20),
    accent: z.enum(['cobalt', 'orange']),
    repository: link,
    live: link.optional(),
    release: link.optional(),
    contribution: z.array(z.string()).min(2),
    constraints: z.array(z.string()).min(2),
    decisions: z.array(z.string()).min(2),
    results: z.array(z.string()).min(2),
    next: z.string().min(20),
    evidence: z.array(z.object({
      label: z.string(),
      value: z.string(),
      note: z.string().optional(),
      url: link.optional()
    })).min(2),
    attribution: z.string().optional()
  })
});

export const collections = { projects };
