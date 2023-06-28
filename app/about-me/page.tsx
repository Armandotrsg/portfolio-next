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
      revalidate: 10,
    },
  });
  const profiles = await res.json();
  return profiles;
}

export default async function AboutMePage() {
  // const profilesData = await getAboutMe();
  const profilesData = {
    image: "https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/about-me%2FFoto-min.jpeg?alt=media&token=2c38f289-3334-4ee7-b6a8-5999c65797ee",
    text: "HOLA MUNDO"
  }
  return <AboutMe {...profilesData} />;
}
