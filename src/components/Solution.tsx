
import { useEffect, useRef } from 'react';

interface SolutionStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

const SolutionStep = ({ number, title, description, delay = 0 }: SolutionStepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setTimeout(() => {
              if (stepRef.current) {
                stepRef.current.classList.add('delay-applied');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) observer.observe(stepRef.current);

    return () => {
      if (stepRef.current) observer.unobserve(stepRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={stepRef}
      className="animate-on-scroll flex flex-col items-center"
      data-delay={delay}
    >
      <div className="w-12 h-12 rounded-full bg-companio-accent flex items-center justify-center text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-center text-companio-gray">{description}</p>
    </div>
  );
};

const Solution = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="solution" className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="flex flex-col justify-center">
            <h2 
              ref={titleRef}
              className="animate-on-scroll text-3xl md:text-4xl font-bold mb-6"
            >
              Solution Snapshot
            </h2>
            <p 
              ref={textRef}
              className="animate-on-scroll text-lg leading-relaxed"
            >
              Our innovative approach creates a personalized health journey for every dog, enhancing quality of life and extending healthspan through data-driven precision interventions.
            </p>
          </div>
          
          <div 
            ref={imageRef}
            className="animate-on-scroll relative h-[350px] overflow-hidden rounded-xl"
          >
            <img 
              src="/lovable-uploads/95ad470d-2233-4fc9-9fed-cc2c40bd1bd5.png" 
              alt="Dog in natural setting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-companio-accent/30 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-companio-offwhite -translate-y-1/2 z-0 hidden md:block"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">
            <SolutionStep 
              number="1"
              title="Diagnostics"
              description="Multi-omic data capture—DNA, blood, microbiome & more—to map every dog's unique baseline biology."
              delay={0}
            />
            <SolutionStep 
              number="2"
              title="Digital Twin"
              description="Real-time AI model that evolves with each new data-point, forecasting risks before they surface."
              delay={200}
            />
            <SolutionStep 
              number="3"
              title="Precision Plan"
              description="Personalised nutrition, exercise & supplement protocols, continuously refined by the twin's insights."
              delay={400}
            />
            <SolutionStep 
              number="4"
              title="Targeted Interventions"
              description="Clinically-validated therapeutics and longevity treatments deployed at the perfect moment to extend healthy years."
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
