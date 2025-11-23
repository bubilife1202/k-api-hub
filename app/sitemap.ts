import { MetadataRoute } from 'next'
import { apis } from '@/data/apis'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://k-api-hub.vercel.app'

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ]

  // Add API-related pages (if you have individual API pages in the future)
  // const apiRoutes = apis.map((api) => ({
  //   url: `${baseUrl}/api/${api.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }))

  return routes
}
