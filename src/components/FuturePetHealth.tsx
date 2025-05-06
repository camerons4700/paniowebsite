
import { useEffect, useRef } from 'react';

const FuturePetHealth = () => {
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
        {/* Add 10% darker overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
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
    </section>
  );
};

export default FuturePetHealth;
