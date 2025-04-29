
import { useEffect, useRef } from 'react';

const Science = () => {
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
    <section id="science" className="relative h-screen bg-companio-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/304cae6b-58e6-4578-b568-4a36dd464683.png" 
          alt="Science-led research image" 
          className="w-full h-full object-cover"
        />
        {/* Add a semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-20 max-w-7xl mx-auto text-center">
        <h1 
          ref={titleRef}
          className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight mb-6"
        >
          Science-Led
        </h1>
        <div 
          ref={textRef}
          className="animate-on-scroll max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Our groundbreaking research combines advanced artificial intelligence with multi-omic data to create comprehensive digital canine twins. This patented technology allows us to monitor, predict, and enhance canine health with unprecedented precision, extending both quality of life and longevity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Science;
