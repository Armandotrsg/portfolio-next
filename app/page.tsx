import { Hero } from "@/components/Hero";
import { ApiRoute } from "@/utils/ApiRoute";
import { Skills, SkillCardProps } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { ExperienceProps } from "./api/experience/route";

export const revalidate = 20;

async function getSkills() {
  const res = await fetch(`${ApiRoute()}/api/skills`);
  const skills = await res.json();
  return skills;
}

async function getProjects(path: "projects" | "social-service" | "awards") {
  const res = await fetch(`${ApiRoute()}/api/projects/${path}`);
  const projects = await res.json();
  return projects;
}

async function getExperience() {
  const res = await fetch(`${ApiRoute()}/api/experience`);
  const experience = await res.json();
  return experience;
}

export default async function Home() {
  const greetingMessages = [
    "Nice to see you here!",
    "Welcome!",
    "Nice to have you back!",
    "Good to see you again!",
    "Welcome back!",
  ];
  const randomIndex = Math.floor(Math.random() * greetingMessages.length);

  const skillsData = getSkills();
  const projectsData = getProjects("projects");
  const socialServiceData = getProjects("social-service");
  const awardsData = getProjects("awards");
  const experienceData = getExperience();
  const [skills, projects, socialService, awards, experience] = await Promise.all([skillsData, projectsData, socialServiceData, awardsData, experienceData]);
  return (
    <>
      <Hero greetingMessage={greetingMessages[randomIndex]} />
      <Skills skills={skills as SkillCardProps[]} />
      <Education />
      <Experience experience={experience as ExperienceProps[]}/>
      <Projects
        {...{
          ProjectsInfo: projects,
          Awards: awards,
          Volunteerings: socialService,
        }}
      />
      <Contact />
    </>
  );
}
