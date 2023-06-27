import { AboutMe } from "@/components/AboutMe";
import { ApiRoute } from "@/utils/ApiRoute";

async function getAboutMe() {
    const res = await fetch(`${ApiRoute()}/api/about-me`, {
        next: {
            revalidate: 10
        }
    });
    const profiles = await res.json();
    return profiles;
}

export default async function AboutMePage() {
    const profilesData = await getAboutMe();
    return (
        <AboutMe {...profilesData} />
    )
}