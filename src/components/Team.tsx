
import { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  delay?: number;
}

const TeamMember = ({ name, role, bio, imageSrc, delay = 0 }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setTimeout(() => {
              if (memberRef.current) {
                memberRef.current.classList.add('delay-applied');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (memberRef.current) observer.observe(memberRef.current);

    return () => {
      if (memberRef.current) observer.unobserve(memberRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={memberRef}
      className="animate-on-scroll flex flex-col items-center"
      data-delay={delay}
    >
      <div className="w-40 h-40 bg-companio-charcoal/10 rounded-full overflow-hidden mb-4 flex items-center justify-center">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-companio-accent text-sm mb-2">{role}</p>
      <p className="text-companio-gray text-sm text-center max-w-[200px]">{bio}</p>
    </div>
  );
};

const Team = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  const teamMembers = [
    {
      name: "Cameron Shaw",
      role: "Chief Executive Officer",
      bio: "Multi-exit biotech founder with a NASDAQ IPO and 17 industry awards; spearheaded breakthrough veterinary diagnostics and consumer health brands.",
      imageSrc: "/lovable-uploads/ad150a7b-3fa9-49cb-909b-b37227863539.png"
    },
    {
      name: "Moe Hanafy",
      role: "Chief Operating Officer",
      bio: "Serial entrepreneur who has launched 100+ B2B/B2C products across three continents, generating multimillion-dollar revenue and operational scale.",
      imageSrc: "/lovable-uploads/c4ce8432-00ee-4e1a-b526-9ed01051f32e.png"
    },
    {
      name: "Joshua Uwaifo",
      role: "Chief Technology Officer",
      bio: "AI leader for the Oxford-Cambridge Joint AI Programme; decade delivering enterprise AI solutions for AstraZeneca, FIFA, Hawk Gaming and PwC.",
      imageSrc: "/lovable-uploads/84985e0c-a5f6-4092-85f9-60bc8e98f585.png"
    },
    {
      name: "Dr Tomasz George",
      role: "Chief Scientific Officer",
      bio: "PhD Longevity scientist with 15 years' healthcare-AI experience; ex-CSO of a NASDAQ biotech and architect of global longevity-clinic protocols.",
      imageSrc: "/lovable-uploads/95ad470d-2233-4fc9-9fed-cc2c40bd1bd5.png"
    },
    {
      name: "Ray Rafik",
      role: "Chief Commercial Officer",
      bio: "Five-time founder and growth strategist; secured a £500 m Allianz partnership at Unmortgage and drives commercial expansion with a passion for pets.",
      imageSrc: "/lovable-uploads/34050ac5-2bbc-4e3e-9e6e-b2fc17cb23c4.png"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Founding Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageSrc={member.imageSrc}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
