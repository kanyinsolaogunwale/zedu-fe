import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

/**
 * Marketing routes served by the (homepage) group. Keep in sync with the
 * page directories under `src/app/(homepage)`.
 */
const MARKETING_ROUTES = [
  "/",
  "/about",
  "/account",
  "/contact-sales",
  "/download",
  "/policy",
  "/pricing",
  "/resources",
  "/terms-of-service",
  "/products/buzz",
  "/products/channels",
  "/products/file-management",
  "/solutions/bootcamps",
  "/solutions/schools",
  "/solutions/universities",
  "/contributors",
  "/contributors/heron",
  "/contributors/ibis",
  "/contributors/lark",
  "/contributors/macaw",
  "/contributors/sparrow",
  "/contributors/egrets",
  "/contributors/zedu-condor",
  "/contributors/zedu-drongo",
  "/contributors/zedu-flamingo",
  "/contributors/zedu-gannet",
  "/contributors/zedu-jacana",
  "/contributors/zedu-kestrel",
  "/contributors/zedu-osprey",
  "/contributors/zedu-quetzal",
  "/contributors/zedu-toucan",
  "/contributors/zedu-weaver",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return MARKETING_ROUTES.map((path) => ({
    url: siteUrl(path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
