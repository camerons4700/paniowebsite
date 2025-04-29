
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
  const advisoryRef = useRef<HTMLDivElement>(null);

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
    if (advisoryRef.current) observer.observe(advisoryRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (advisoryRef.current) observer.unobserve(advisoryRef.current);
    };
  }, []);

  const teamMembers = [
    {
      name: "Cameron Shaw",
      role: "CEO",
      bio: "Multi-exit biotech founder; steered a NASDAQ IPO and 17 award-winning ventures across diagnostics, consumer health & pet tech.",
      imageSrc: "/lovable-uploads/ad150a7b-3fa9-49cb-909b-b37227863539.png"
    },
    {
      name: "Joshua Uwaifo",
      role: "CTO",
      bio: "AI architect behind the Oxford-Cambridge Joint AI Programme; led 100+ product launches for AstraZeneca, FIFA & PwC.",
      imageSrc: "/lovable-uploads/84985e0c-a5f6-4092-85f9-60bc8e98f585.png"
    },
    {
      name: "Moe Uwaifo",
      role: "Chief AI Officer",
      bio: "Serial founder (B2B, B2C, D2C) whose platforms reach millions of users and drive $-scale revenues across three continents.",
      imageSrc: "/lovable-uploads/c4ce8432-00ee-4e1a-b526-9ed01051f32e.png"
    },
    {
      name: "Dr Tomasz George",
      role: "CSO",
      bio: "PhD Longevity scientist; ex-CSO of a NASDAQ biotech; designed global longevity-clinic protocols and wellness algorithms.",
      imageSrc: "/lovable-uploads/95ad470d-2233-4fc9-9fed-cc2c40bd1bd5.png"
    },
    {
      name: "Ray Rafik",
      role: "CCO",
      bio: "Five-time founder; secured a £500m Allianz partnership at Unmortgage; growth strategist obsessed with canine wellbeing.",
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
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

        <div 
          ref={advisoryRef}
          className="animate-on-scroll text-center mt-12 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">World-Class Board & Brand Ambassadors</h3>
          <p className="text-companio-gray">
            We're finalising a council of leading veterinarians, geneticists, athletes and canine influencers—full roster coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
