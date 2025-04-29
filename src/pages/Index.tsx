
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Team from "@/components/Team";
import DataModels from "@/components/DataModels";
import Solution from "@/components/Solution";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Research />
      <DataModels />
      <Team />
      <Solution />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
