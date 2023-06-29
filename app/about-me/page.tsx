import { AboutMe } from "@/components/AboutMe";
import { ApiRoute } from "@/utils/ApiRoute";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `About Me | Armando's Portfolio`,
    description: `Armando Terrazas's About Me Page`,
  };
}

async function getAboutMe() {
  const res = await fetch(`${ApiRoute()}/api/about-me`, {
    next: {
      revalidate: 30,
    },
  });
  const profiles = await res.json();
  return profiles;
}

export default async function AboutMePage() {
  const profilesData = await getAboutMe();
  return <AboutMe {...profilesData} />;
}
