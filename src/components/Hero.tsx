
import { useEffect, useRef } from 'react';

const Hero = () => {
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
    <section className="relative h-screen bg-panio-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/4fbdc551-6191-45dd-b72f-b9a43daf2088.png"
          alt="Happy golden retriever dog with dark green background"
          className="w-full h-full object-cover object-left md:object-center"
        />
        {/* Only keeping the essential gradient for text readability, no color overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-panio-charcoal/70"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <h1 
          ref={titleRef}
          className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight ml-auto md:mx-auto text-center"
        >
          Your Canine Longevity Companion
        </h1>
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
