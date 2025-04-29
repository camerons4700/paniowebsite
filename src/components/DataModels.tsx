
import { useEffect, useRef } from 'react';

const DataModels = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
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

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-12"
        >
          From Data Silos to Dynamic Health Models
        </h2>
        
        <div 
          ref={textRef}
          className="animate-on-scroll max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-center">
            At Companio, we transform fragmented health data into cohesive, dynamic models that provide deep insights into canine well-being. By integrating diverse data sources—ranging from genetic information to lifestyle and environmental factors—over time, we construct a comprehensive digital twin for each dog. This longitudinal approach allows us to monitor subtle health changes, predict potential issues before they arise, and tailor interventions with unprecedented precision. By breaking down traditional data silos, we unlock a holistic view of canine health, enabling proactive and personalized care that enhances both quality of life and longevity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataModels;
