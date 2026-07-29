import { allRoutes } from '@/content/pages'

const BASE = 'https://www.ringindia.net'

export default function sitemap() {
  return allRoutes.map((route) => ({
    url: `${BASE}${route === '/' ? '' : route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
