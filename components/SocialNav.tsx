import Image from "next/image";
import linkedin from "../assets/img/linkedinNav.svg";
import githubLogo from "../assets/img/githubLogo.svg";
import instagram from "../assets/img/instagramNav.svg";

export const SocialNav = () => {
  const socialMedia = [
    {
      url: "https://www.linkedin.com/in/armando-terrazas-gomez/",
      icon: linkedin,
      alt: "linkedin",
    },
    {
      url: "https://github.com/Armandotrsg",
      icon: githubLogo,
      alt: "github",
    },
    {
      url: "https://www.instagram.com/armandotrsg/",
      icon: instagram,
      alt: "Instagram",
    },
  ];

  return (
    <div className="social-icon">
      {socialMedia.map((media, index) => (
        <a href={media.url} target="_blank" rel="noreferrer" key={index}>
          <Image src={media.icon} alt={media.alt} />
        </a>
      ))}
    </div>
  );
};