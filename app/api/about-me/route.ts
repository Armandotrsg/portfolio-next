import { db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  const docRef = doc(db, "about-me", "about-me");
  const docSnap = await getDoc(docRef);
  return NextResponse.json(docSnap.data());
}
