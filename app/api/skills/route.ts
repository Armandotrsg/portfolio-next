import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "skills"));
  const skills: Array<any> = [];
  querySnapshot.forEach((doc) => {
    skills.push(doc.data());
  });
  return NextResponse.json(skills);
}
