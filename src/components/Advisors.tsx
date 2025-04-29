
import { useEffect, useRef } from 'react';

const Advisors = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    if (gridRef.current) observer.observe(gridRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  const advisors = Array(8).fill(null);

  return (
    <section className="py-20 px-6 md:px-10 bg-companio-charcoal text-white">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Advisors & Ambassadors
        </h2>
        
        <p 
          ref={textRef}
          className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 text-white/80"
        >
          We're assembling a best-in-class global council of leading veterinarians, geneticists, 
          sports-canine experts, and celebrated dog athletes.
        </p>
        
        <div 
          ref={gridRef}
          className="animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {advisors.map((_, index) => (
            <div 
              key={index}
              className={`bg-white/10 rounded-xl p-6 aspect-square flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/15`}
            >
              <div className="w-24 h-24 rounded-full bg-white/10 mb-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <p className="text-white/50 text-center text-sm uppercase tracking-wider">Coming Soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advisors;
