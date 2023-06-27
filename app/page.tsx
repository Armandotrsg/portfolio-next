import { Hero } from "@/components/Hero"
import { ApiRoute } from "@/utils/ApiRoute";
import { Skills, SkillCardProps } from "@/components/Skills";
import { Education } from "@/components/Education";

async function getSkills() {
  const res = await fetch(`${ApiRoute()}/api/skills`);
  const skills = await res.json();
  return skills;
}

export default async function Home() {
  const greetingMessages = ['Nice to see you here!', 'Welcome!', 'Nice to have you back!', 'Good to see you again!', 'Welcome back!'];
  const randomIndex = Math.floor(Math.random() * greetingMessages.length);

  const skillsData = getSkills();
  const [skills] = await Promise.all([skillsData]);

  return (
    <>
      <Hero greetingMessage={greetingMessages[randomIndex]}/>
      <Skills skills={skills as SkillCardProps[]}/>
      <Education />
    </>
  )
}
