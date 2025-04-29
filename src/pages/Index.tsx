
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DataModels from "@/components/DataModels";
import Science from "@/components/Science";
import AIInsights from "@/components/AIInsights";
import Team from "@/components/Team";
import Solution from "@/components/Solution";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FuturePetHealth from "@/components/FuturePetHealth";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Companio - Canine Digital Twin Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "The Digital Twin Keeping Dogs Healthier, for Longer.");
    }

    // Animation observer for scroll animations
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

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div id="home">
        <Hero />
        <DataModels />
      </div>
      <Science />
      <AIInsights />
      <Solution />
      <FuturePetHealth />
      <div id="team">
        <Team />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
