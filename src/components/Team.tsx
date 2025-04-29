
import { useEffect, useRef } from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  achievement: string;
  delay?: number;
}

const TeamMember = ({ name, role, achievement, delay = 0 }: TeamMemberProps) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.animationDelay = `${delay}ms`;
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
    >
      <div className="w-40 h-40 bg-companio-charcoal/20 rounded-full overflow-hidden mb-4 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-companio-charcoal/40">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-companio-gray text-sm mb-1">{role}</p>
      <p className="text-companio-accent text-sm text-center max-w-[200px]">{achievement}</p>
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

  return (
    <section id="team" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Founding Team
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <TeamMember 
            name="Dr. Jane Smith"
            role="CEO & Co-Founder"
            achievement="Former NASDAQ IPO lead, Geneticist"
            delay={0}
          />
          <TeamMember 
            name="Dr. Michael Chen"
            role="CSO & Co-Founder"
            achievement="Veterinary Medicine Expert, 15+ Years Research"
            delay={100}
          />
          <TeamMember 
            name="Sarah Patel"
            role="CTO"
            achievement="AI Pioneer, Former Tech Executive"
            delay={200}
          />
          <TeamMember 
            name="Dr. Robert Johnson"
            role="VP of R&D"
            achievement="Biotech Veteran, Multiple Patents"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
