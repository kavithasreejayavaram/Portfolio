import type { MetadataRoute } from 'next';
import { RESUME_DATA } from '@/data/resumeData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://kavithasreejayavaram.github.io/Portfolio/', lastModified: new Date() },
    { url: 'https://kavithasreejayavaram.github.io/Portfolio/resume', lastModified: new Date() },
    ...RESUME_DATA.projects.map((project) => ({
      url: `https://kavithasreejayavaram.github.io/Portfolio/projects/${project.id}`,
      lastModified: new Date(),
    })),
  ];
}
