import { Connect } from "@/components/Connect";
import { ApiRoute } from "@/utils/ApiRoute";
import { ProfileProps } from "@/components/Connect";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Let's Connect | Armando's Portfolio`,
    description: `Connect with Armando Terrazas`,
  };
}

async function getProfiles() {
    const res = await fetch(`${ApiRoute()}/api/profiles`, {
      next: {
        revalidate: 30,
      },
    });
    const profiles = await res.json();
    return profiles;
}

export default async function ConnectPage() {
    const profilesData = await getProfiles() as ProfileProps[];
    return (
        <Connect profiles={profilesData} />
    )
}