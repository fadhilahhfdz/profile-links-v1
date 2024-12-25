import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const Sosmed = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/fadhilahhfdz/",
      icon: <FaInstagram />,
      class: 'group list-sosmed instagram',
      classHover: 'hover-sosmed hover-instagram',
      textColor: 'hover-text text-instagram',
      iconColor: 'icon-color icon-instagram'
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fadhilahhafidz/",
      icon: <FaLinkedin />,
      class: 'group list-sosmed linkedin',
      classHover: 'hover-sosmed hover-linkedin',
      textColor: 'hover-text text-linkedin',
      iconColor: 'icon-color icon-linkedin'
    },
    {
      name: "GitHub",
      url: "https://github.com/fadhilahhfdz/",
      icon: <FaGithub />,
      class: 'group list-sosmed github',
      classHover: 'hover-sosmed hover-github',
      textColor: 'hover-text text-github',
      iconColor: 'icon-color icon-github'
    },
  ];

  return (
    <div className="space-y-2 w-full">
      {Sosmed.map((sosmed, index) => (
        <a
          key={index}
          href={sosmed.url}
          target="_blank"
          rel="noopener noreferrer"
          className={sosmed.class}
        >
          <div className="flex items-center gap-2 p-1">
            <span className={sosmed.classHover}></span>
            <span className="relative z-10"></span>
            <span className="absolute left-4 transform -translate-x-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
              <FaArrowRight />
            </span>
            <div className={sosmed.textColor}>
              <span className={sosmed.iconColor}>
                {sosmed.icon}
              </span>
              <span className="z-0">{sosmed.name}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
