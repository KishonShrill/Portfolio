import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://chriscent.is-a.dev";

    const routes = [{ path: "", freq: "monthly", prio: 1 }] as const;

    const lastModified = new Date();

    const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified,
        changeFrequency:
            route.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
        priority: route.prio,
    }));

    return staticRoutes;
}
