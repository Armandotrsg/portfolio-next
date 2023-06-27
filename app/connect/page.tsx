import { Connect } from "@/components/Connect";
import { ApiRoute } from "@/utils/ApiRoute";
import { ProfileProps } from "@/components/Connect";

async function getProfiles() {
    const res = await fetch(`${ApiRoute()}/api/profiles`);
    const profiles = await res.json();
    return profiles;
}

export default async function ConnectPage() {
    const profilesData = await getProfiles() as ProfileProps[];
    return (
        <Connect profiles={profilesData} />
    )
}