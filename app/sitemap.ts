import type { MetadataRoute } from 'next';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const appDirectory = path.join(process.cwd(), 'app');
const pageFilePattern = /^page\.(js|jsx|ts|tsx)$/;

async function findPublicRoutes(
  directory: string,
  segments: string[] = [],
): Promise<MetadataRoute.Sitemap> {
  const entries = await readdir(directory, { withFileTypes: true });
  const routes: MetadataRoute.Sitemap = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name.startsWith('_') ||
        entry.name.startsWith('[') ||
        entry.name === 'admin' ||
        entry.name === 'api'
      ) {
        continue;
      }

      const nextSegments =
        entry.name.startsWith('(') && entry.name.endsWith(')')
          ? segments
          : [...segments, entry.name];

      routes.push(...(await findPublicRoutes(fullPath, nextSegments)));
      continue;
    }

    if (!pageFilePattern.test(entry.name)) {
      continue;
    }

    const page = await stat(fullPath);
    const route = segments.length ? `/${segments.join('/')}` : '/';
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

    routes.push({
      url: new URL(route, baseUrl).toString(),
      lastModified: page.mtime,
      changeFrequency: route === '/' ? 'weekly' : 'monthly',
      priority: route === '/' ? 1 : 0.8,
    });
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return findPublicRoutes(appDirectory);
}
