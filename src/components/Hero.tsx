
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

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

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen bg-companio-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/a5f2c939-fe2e-496a-9a18-de55385c85ca.png"
          alt="Dog with blue background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-20 max-w-7xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight mb-6"
        >
          The Future of Pet Health
        </h1>
        <div 
          ref={textRef}
          className="animate-on-scroll max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Every dog deserves more good years. Companio is pioneering the science of longevity and wellbeing — so you can spend more time with the companions who matter most.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 text-center">
        <a 
          href="#research" 
          className="inline-block animate-bounce rounded-full bg-white/20 p-3 backdrop-blur-sm hover:bg-white/30 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
