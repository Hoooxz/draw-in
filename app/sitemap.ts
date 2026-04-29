import type { MetadataRoute } from "next"
import { getPublicSiteUrl } from "@/lib/branding"

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = getPublicSiteUrl()
    if (!siteUrl) return []

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ]
}
