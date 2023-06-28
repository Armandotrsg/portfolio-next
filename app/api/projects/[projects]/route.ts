import { db } from "@/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { NextResponse } from "next/server";

interface Dates {
  start: string;
  end?: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  image: string;
  url?: string;
  dates: Dates;
}

export async function GET(_: Request,{
  params,
}: {
  params: { projects: "projects" | "social-service" | "awards" };
}) {
  const path = params.projects;
  const querySnapshot = await getDocs(collection(db, path));
  const projects: ProjectProps[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as DocumentData;
    const project: ProjectProps = {
      name: data.name,
      description: data.description,
      image: data.image,
      url: data.url,
      dates: {
        start: data.dates.start,
        end: data.dates.end,
      },
    };
    projects.push(project);
  });
  return NextResponse.json(projects);
}
