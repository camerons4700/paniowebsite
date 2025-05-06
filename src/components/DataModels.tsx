
import { useEffect, useRef } from 'react';
import { Database, Layers, ChartBar, Activity, Heart } from 'lucide-react';

const DataModels = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
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
          ref={contentRef}
          className="animate-on-scroll max-w-5xl mx-auto"
        >
          {/* Visual diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-10">
            {/* Left side - Data Silos */}
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-xl w-full lg:w-1/3">
              <h3 className="text-xl font-semibold mb-4 text-panio-charcoal">Fragmented Data Silos</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Database className="h-8 w-8 text-panio-accent mb-2" />
                  <span className="text-sm text-center">Genetic Data</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Heart className="h-8 w-8 text-panio-accent mb-2" />
                  <span className="text-sm text-center">Health Records</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <Activity className="h-8 w-8 text-panio-accent mb-2" />
                  <span className="text-sm text-center">Activity Data</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm">
                  <ChartBar className="h-8 w-8 text-panio-accent mb-2" />
                  <span className="text-sm text-center">Environmental</span>
                </div>
              </div>
              <p className="text-sm text-center text-gray-600">Isolated, disconnected data points</p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center items-center py-2 lg:py-0">
              <div className="hidden lg:block">
                <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM0 13.5H78V10.5H0V13.5Z" fill="#5e869f"/>
                </svg>
              </div>
              <div className="block lg:hidden">
                <svg width="24" height="40" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9393 59.0607C11.5251 59.6464 12.4749 59.6464 13.0607 59.0607L22.6066 49.5147C23.1924 48.9289 23.1924 47.9792 22.6066 47.3934C22.0208 46.8076 21.0711 46.8076 20.4853 47.3934L12 55.8787L3.51472 47.3934C2.92893 46.8076 1.97919 46.8076 1.3934 47.3934C0.807611 47.9792 0.807611 48.9289 1.3934 49.5147L10.9393 59.0607ZM10.5 0V58H13.5V0H10.5Z" fill="#5e869f"/>
                </svg>
              </div>
            </div>

            {/* Right side - Digital Twin */}
            <div className="flex flex-col items-center p-6 bg-panio-offwhite rounded-xl w-full lg:w-1/2">
              <h3 className="text-xl font-semibold mb-4 text-panio-charcoal">Dynamic Digital Twin</h3>
              <div className="relative w-full h-52 mb-4 flex items-center justify-center">
                <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex items-center justify-center border-2 border-panio-accent z-20">
                  <img 
                    src="/lovable-uploads/3afbcdce-7963-4cb6-903b-9f2b576f155d.png" 
                    alt="Dog silhouette"
                    className="w-16 h-16 object-contain" 
                  />
                </div>
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-2 border-dashed border-panio-accent-light animate-[spin_15s_linear_infinite] flex items-center">
                    <Layers className="absolute left-0 -ml-4 bg-white rounded-full p-1 shadow-sm h-8 w-8 text-panio-accent" />
                    <Activity className="absolute right-0 -mr-4 bg-white rounded-full p-1 shadow-sm h-8 w-8 text-panio-accent" />
                    <Heart className="absolute top-0 -mt-4 bg-white rounded-full p-1 shadow-sm h-8 w-8 text-panio-accent" />
                    <Database className="absolute bottom-0 -mb-4 bg-white rounded-full p-1 shadow-sm h-8 w-8 text-panio-accent" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Predict Health Issues</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">Monitor Changes</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Personalized Care</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                  <span className="text-sm">Enhance Longevity</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Summary text */}
          <p className="text-md text-center text-gray-700 max-w-3xl mx-auto">
            Panio transforms fragmented pet health data into a comprehensive digital twin, 
            enabling early detection of health issues and personalized care recommendations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataModels;
