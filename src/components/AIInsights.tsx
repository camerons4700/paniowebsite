
import { useEffect, useRef } from 'react';

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InsightCard = ({ icon, title, description }: InsightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="animate-on-scroll flex flex-col items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-panio-offwhite mb-4">
        <div className="text-panio-accent">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-panio-charcoal">{title}</h3>
      <p className="text-center text-panio-gray">{description}</p>
    </div>
  );
};

const AIInsights = () => {
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
    <section className="py-20 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold text-center mb-16"
        >
          AI-Powered Insights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <InsightCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                <path d="M7 7h.01"></path>
              </svg>
            }
            title="AI Models"
            description="Proprietary machine learning algorithms trained on extensive canine health data to recognize patterns invisible to the human eye."
          />
          <InsightCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 13a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2h16"></path>
                <path d="M22 11a2 2 0 0 0-2-2h-5"></path>
                <path d="M16 22h0a2 2 0 0 0 2-2v-7"></path>
                <path d="M14 15v5a2 2 0 0 1-2 2H6"></path>
                <circle cx="12" cy="13" r="2"></circle>
              </svg>
            }
            title="Multi-omic Data"
            description="Comprehensive analysis of genomics, proteomics, metabolomics, and microbiome data to build holistic health profiles."
          />
          <InsightCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            }
            title="Predictive Algorithms"
            description="Advanced predictive capabilities that identify potential health issues before clinical symptoms appear."
          />
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
