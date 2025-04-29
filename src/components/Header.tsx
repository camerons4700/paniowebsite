
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Determine which section is currently in view
      const sections = ['home', 'science', 'solution', 'team', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        // Element is considered in view if its top is near the top of the viewport
        // Adjusted threshold to improve accuracy
        return rect.top <= 150 && rect.bottom > 150;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection]);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking a link
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'science', label: 'Science' },
    { id: 'solution', label: 'Solution' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        scrolled ? 'bg-companio-charcoal/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-2xl md:text-3xl lg:text-[2.8rem] font-bold tracking-wider uppercase font-montserrat transition-colors duration-300 text-white"
          >
            Companio
          </a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav>
            <ul className="flex space-x-6 md:space-x-10 items-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={cn(
                      'text-sm md:text-lg font-medium transition-colors duration-200',
                      scrolled ? 'text-white' : 'text-companio-charcoal',
                      activeSection === item.id 
                        ? 'text-companio-accent' 
                        : (scrolled ? 'hover:text-companio-accent' : 'hover:text-companio-accent')
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DrawerTrigger asChild>
              <button 
                className="text-white p-2 focus:outline-none"
                aria-label="Menu"
              >
                <Menu size={28} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[70vh] bg-companio-charcoal/95 backdrop-blur-sm">
              <div className="flex justify-end p-4">
                <DrawerClose asChild>
                  <button 
                    className="text-white p-2 focus:outline-none" 
                    aria-label="Close menu"
                  >
                    <X size={28} />
                  </button>
                </DrawerClose>
              </div>
              <nav className="px-6 pb-10">
                <ul className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={cn(
                          'text-xl font-medium transition-colors duration-200 block py-3',
                          'text-white hover:text-companio-accent',
                          activeSection === item.id && 'text-companio-accent'
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        )}
      </div>
    </header>
  );
};

export default Header;
