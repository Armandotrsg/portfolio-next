import { Connect } from "@/components/Connect";
import { ApiRoute } from "@/utils/ApiRoute";
import { ProfileProps } from "@/components/Connect";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Connect with Armando Terrazas Gómez | Web and iOS Developer`,
    description: `Connect with Armando Terrazas Gómez, a web and iOS developer who creates stunning apps and websites. See his contact and social media info.`,
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