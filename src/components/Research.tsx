
import { useEffect, useRef } from 'react';

const Research = () => {
  const textRef = useRef<HTMLDivElement>(null);

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

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section id="research" className="relative h-screen bg-companio-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/304cae6b-58e6-4578-b568-4a36dd464683.png" 
          alt="Science-led research image" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-companio-charcoal/70 to-companio-charcoal/70"></div>
      </div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-20">
        <div 
          ref={textRef}
          className="animate-on-scroll max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Research Insights</h2>
          <p className="text-lg md:text-xl leading-relaxed text-white">
            Our research pairs advanced AI with multi-omic data to build comprehensive digital canine twins, enabling us to monitor, predict and enhance health with unprecedented precision—extending quality of life and longevity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
