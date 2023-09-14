import { Hero } from "@/components/Hero";
import { ApiRoute } from "@/utils/ApiRoute";
import { Skills, SkillCardProps } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import getExperience from "@/utils/Experience";

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
  const [skills, projects, socialService, awards, experience] =
    await Promise.all([
      skillsData,
      projectsData,
      socialServiceData,
      awardsData,
      experienceData,
    ]);
  // const [skills, projects, socialService, awards] = await Promise.all([skillsData, projectsData, socialServiceData, awardsData]);
  // const experience: ExperienceProps[] = [
  //   {
  //     company: 'Tecnológico de Monterrey',
  //     position: 'On Campus Intern',
  //     brief: 'Collaborated in a scrum environment where I implemented web applications using PHP, jQuery and React',
  //     dates: { start: 'August 2023', end: 'undefined' }
  //   }
  // ]
  return (
    <>
      <Hero greetingMessage={greetingMessages[randomIndex]} />
      <Skills skills={skills as SkillCardProps[]} />
      <Education />
      <Experience experience={experience} />
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
