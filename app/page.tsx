import { Hero } from "@/components/Hero";
import { ApiRoute } from "@/utils/ApiRoute";
import { Skills, SkillCardProps } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const revalidate = 30;

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

  // const skillsData = getSkills();
  // const projectsData = getProjects("projects");
  // const socialServiceData = getProjects("social-service");
  // const awardsData = getProjects("awards");
  // const [skills, projects, socialService, awards] = await Promise.all([skillsData, projectsData, socialServiceData, awardsData]);
  const skills: SkillCardProps[] = [
    {
      title: "aaaa",
      img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg"
    },
  ];
  const projects = [
    {
      name: "aaaa",
      description: "aaaa",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/projects%2Facademic.jpeg?alt=media&token=b385a5b4-f71f-49b6-9612-8eb4029f54fb",
      url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      dates: { start: "June 2023", end: "undefined" },
    },
  ];
  const socialService = [
    {
      name: "Servicio",
      description: "servicio",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/social-service%2Fcentinela.jpeg?alt=media&token=2714450c-7e7e-4b73-9ecc-32b386f1d99f",
      url: "https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes",
      dates: { start: "June 2023", end: "June 2023" },
    },
  ];
  const awards = [
    {
      name: 'Exilio',
      description: 'aaaaaa',
      image: 
        'https://firebasestorage.googleapis.com/v0/b/portfolio-f6166.appspot.com/o/awards%2Fexiliogame.png?alt=media&token=4b81289a-f0fd-4652-87e4-422b93379176',
      url: '',
      dates: { start: 'June 2023', end: 'undefined' }
    }]
  return (
    <>
      <Hero greetingMessage={greetingMessages[randomIndex]} />
      <Skills skills={skills as SkillCardProps[]} />
      <Education />
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
