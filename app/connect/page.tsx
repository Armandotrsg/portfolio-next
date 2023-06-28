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
    const res = await fetch(`${ApiRoute()}/api/profiles`);
    const profiles = await res.json();
    return profiles;
}

export default async function ConnectPage() {
    // const profilesData = await getProfiles() as ProfileProps[];
    const profilesData: ProfileProps[] = [
      {
        name: "Email",
        user: "mandotrs@icloud.com",
        img: "https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/profiles%2Fmail.png?alt=media&token=5edbcd1a-8e11-4c62-8357-b089f62eaee5",
        link: "mailto:mandotrs@icloud.com"
      }
    ]
    return (
        <Connect profiles={profilesData} />
    )
}