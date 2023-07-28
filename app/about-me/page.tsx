import { AboutMe } from "@/components/AboutMe";
import { ApiRoute } from "@/utils/ApiRoute";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Armando Terrazas Gómez: About Me | Web and iOS Developer`,
    description: `Learn about Armando Terrazas Gómez, a web and iOS developer and computer science student who loves new technologies and challenges.`,
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
