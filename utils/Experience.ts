import { db } from "@/firebaseConfig";
import { collection, getDocs, DocumentData } from "firebase/firestore";

interface Dates {
  start: string;
  end?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  brief: string;
  dates: Dates;
}

export default async function getExperience(): Promise<ExperienceProps[]>{
  const querySnapshot = await getDocs(collection(db, "experience"));
  const experience: ExperienceProps[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data() as DocumentData;
    const experienceItem: ExperienceProps = {
      company: data.company,
      position: data.position,
      brief: data.brief,
      dates: {
        start: data.dates.start,
        end: data.dates.end,
      },
    };
    experience.push(experienceItem);
  });
  experience.sort((a, b) => {
    // Sort by dates.end first
    if (a.dates.end === "undefined" && b.dates.end !== "undefined") {
      return -1; // a comes first
    } else if (a.dates.end !== "undefined" && b.dates.end === "undefined") {
      return 1; // b comes first
    }

    // Convert dates.start strings to Date objects
    const dateA = new Date(Date.parse(a.dates.start));
    const dateB = new Date(Date.parse(b.dates.start));

    // Sort by dates.start in descending order
    return dateB.getTime() - dateA.getTime();
  });
  return experience;
}
