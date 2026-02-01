import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mountain View | Luxury Real Estate & Gated Communities in Egypt",
    short_name: "Mountain View",
    description:
      "Mountain View is a leading private property developer in Egypt, specializing in first-tier residences and luxury resorts.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#004797",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
