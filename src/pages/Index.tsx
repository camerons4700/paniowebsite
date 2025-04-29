
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Science from "@/components/Science";
import Team from "@/components/Team";
import Advisors from "@/components/Advisors";
import Solution from "@/components/Solution";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Companio - Canine Digital Twin Technology";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Revolutionary AI-powered technology creating personalized health models for every canine companion.");
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
      <Science />
      <Team />
      <Advisors />
      <Solution />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
