
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      toast({
        title: "Consent Required",
        description: "Please accept the terms and privacy policy.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "You've been added to our early access list.",
      });
      setEmail('');
      setGdprConsent(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-6 md:px-10 bg-companio-offwhite"
      ref={sectionRef}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          ref={titleRef}
          className="animate-on-scroll text-3xl md:text-4xl font-bold mb-6"
        >
          Join Our Early Access List
        </h2>
        <p 
          ref={textRef}
          className="animate-on-scroll text-lg mb-10"
        >
          Be among the first to experience the future of canine health technology.
        </p>
        
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="animate-on-scroll space-y-6 max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-companio-accent hover:bg-companio-accent-dark text-white"
            >
              {loading ? "Submitting..." : "Join Now"}
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="gdpr" 
              checked={gdprConsent}
              onCheckedChange={(checked) => setGdprConsent(checked === true)}
            />
            <label
              htmlFor="gdpr"
              className="text-sm text-companio-gray text-left"
            >
              I agree to receive updates and accept the terms and privacy policy.
            </label>
          </div>
        </form>
        
        <div className="mt-12 flex justify-center space-x-6">
          <a href="#" className="text-companio-accent hover:text-companio-accent-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="#" className="text-companio-accent hover:text-companio-accent-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="mailto:info@companio.com" className="text-companio-accent hover:text-companio-accent-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
