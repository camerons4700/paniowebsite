
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
    };
  }, []);

  return (
    <section className="relative h-screen bg-companio-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/34050ac5-2bbc-4e3e-9e6e-b2fc17cb23c4.png"
          alt="Happy golden retriever dog outdoors"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-companio-charcoal/40 to-companio-charcoal"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <h1 
          ref={titleRef}
          className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight"
        >
          The Digital Twin Keeping Dogs Healthier, for Longer.
        </h1>
        <p 
          ref={subtitleRef}
          className="animate-on-scroll text-lg md:text-xl lg:text-2xl text-companio-offwhite mt-6 max-w-2xl delay-300"
        >
          Revolutionary AI-powered technology creating personalized health models for every canine companion.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-10 text-center">
        <a 
          href="#science" 
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
