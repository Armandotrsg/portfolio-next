import { db } from "@/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { NextResponse } from "next/server";
import { ProfileProps } from "@/components/Connect";

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "profiles"));
  const profiles: ProfileProps[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as DocumentData;
    const profile: ProfileProps = {
      name: data.name,
      user: data.user,
      img: data.img,
      link: data.link,
    };
    profiles.push(profile);
  });
  return NextResponse.json(profiles);
}