import type { MetadataRoute } from "next";
import { siteUrl } from "~/lib/env-urls";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zedu - Learning Platform for Bootcamps, Schools, and Cohorts",
    short_name: "Zedu",
    description:
      "Zedu is an AI-powered education platform built for bootcamps and learning communities. Organize cohorts, run classes, manage communication, and scale modern learning in one workspace.",
    start_url: siteUrl("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
