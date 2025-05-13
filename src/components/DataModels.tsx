
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const DataModels = () => {
  const elementsRef = useRef<Array<HTMLElement | null>>([]);
  
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

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const dataPoints = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ), 
      title: "Heart Rate", 
      value: "120 bpm",
      color: "bg-red-500"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6-6zm-8 6h14-14zm0 0v-4-2V3v12zm0 0H5c-1.042-.001-2.039-.99-2.039-1.989 0-.802 2.662-1.99 2.662-1.99.088 1.184.8 1.498 1.739 1.498H11V3c-4.183 1.799-7.136 5.324-7.848 9.580A3.351 3.351 0 0 0 2 15.01C2 16.663 3.34 18 5 18h6z"></path>
        </svg>
      ), 
      title: "Respiration", 
      value: "24 rpm",
      color: "bg-blue-500"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ), 
      title: "Activity", 
      value: "15 min",
      color: "bg-green-500"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 2v7M3 5h12M3 9l9 9M15 12h5a2 2 0 0 1 2 2v7"></path>
        </svg>
      ), 
      title: "Sleep", 
      value: "8.2 hrs",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="research" className="py-20 md:py-32 bg-gradient-to-b from-panio-charcoal to-panio-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 
            ref={el => elementsRef.current[0] = el} 
            className="animate-on-scroll text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive Data Collection
          </h2>
          <p 
            ref={el => elementsRef.current[1] = el} 
            className="animate-on-scroll text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Our platform continuously monitors and analyzes your dog's vital signs, activity patterns, and behavioral changes to build a comprehensive digital twin.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visualization Side */}
          <div 
            ref={el => elementsRef.current[2] = el} 
            className="animate-on-scroll relative flex justify-center"
          >
            <div className="relative w-72 h-72 rounded-full border-4 border-panio-accent flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-2 border-gray-600/30 animate-ping-slow"></div>
              
              {/* Data connection lines */}
              <div className="absolute w-full h-full">
                {dataPoints.map((_, index) => {
                  const angle = (index * (360 / dataPoints.length) - 45) * (Math.PI / 180);
                  const x1 = Math.cos(angle) * 75;
                  const y1 = Math.sin(angle) * 75;
                  const x2 = Math.cos(angle) * 160;
                  const y2 = Math.sin(angle) * 160;
                  
                  return (
                    <svg key={index} className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>
                      <line 
                        x1={144 + x1} 
                        y1={144 + y1} 
                        x2={144 + x2} 
                        y2={144 + y2} 
                        stroke="rgba(148, 163, 184, 0.15)" 
                        strokeWidth="2"
                        strokeDasharray="2,4" 
                      />
                    </svg>
                  );
                })}
              </div>
              
              {/* Center dog image */}
              <div className="absolute w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-panio-accent z-20 overflow-hidden">
                <img 
                  src="/lovable-uploads/b9d549cd-a13b-49e2-b063-0a9f45244009.png" 
                  alt="Golden retriever dog with head visible"
                  className="w-48 h-48 object-cover object-center transform translate-y-6" 
                />
              </div>
              
              {/* Data Points around the circle */}
              {dataPoints.map((point, index) => {
                const angle = (index * (360 / dataPoints.length) - 45) * (Math.PI / 180);
                const x = Math.cos(angle) * 160;
                const y = Math.sin(angle) * 160;
                
                return (
                  <div 
                    key={index}
                    className="absolute flex flex-col items-center"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", point.color)}>
                      {point.icon}
                    </div>
                    <div className="mt-1 text-center">
                      <p className="text-white font-medium">{point.title}</p>
                      <p className="text-gray-300 text-sm">{point.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Text Content Side */}
          <div>
            <div 
              ref={el => elementsRef.current[3] = el} 
              className="animate-on-scroll space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3">Advanced Biometrics</h3>
                <p className="text-gray-300">
                  Our platform captures over 20 vital health metrics in real-time, providing unprecedented insight into your dog's wellbeing.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3">Behavioral Analysis</h3>
                <p className="text-gray-300">
                  Beyond physical metrics, we track behavioral patterns to detect subtle changes that might indicate health concerns before they become serious.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3">Personalized Insights</h3>
                <p className="text-gray-300">
                  Every dog is unique. Our AI creates a personalized baseline for your dog, enabling truly individualized health monitoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataModels;
