import Image from "next/image";
import React from "react";

const Navbar = () => {
  const SOCIAL_LINKS = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/story.php?story_fbid=2068373370111022&substory_index=0&id=1430664657215233&_rdr",
      icon: "/outer/facebook.svg",
    },
    {
      name: "LinkedIn",
      url: "https://ng.linkedin.com/in/rotimi-ojeleye-73888b20",
      icon: "/outer/linkedin.svg",
    },
  ];

  return (
    <div className="container flex items-center justify-between h-[90px]">
      <div>
        <Image
          src="/outer/logo.svg"
          alt="project-logo"
          height={42}
          width={108}
        />
      </div>
      <div className="flex items-center gap-3">
        {SOCIAL_LINKS.map((social) => (
          <a
            className="center-and-round w-[36px] min-w-9 aspect-square bg-primary"
            key={social.name}
            href={social.url}
            target="_blank
            "
          >
            <Image src={social.icon} alt={social.name} height={16} width={16} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
