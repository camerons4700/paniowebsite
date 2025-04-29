
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'science', label: 'Science' },
    { id: 'solution', label: 'Solution' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderNavItems = (onClick?: () => void) => (
    <>
      {navItems.map((item) => (
        <li key={item.id} className={isMobile ? "w-full" : ""}>
          <a
            href={`#${item.id}`}
            onClick={(e) => {
              scrollToSection(e, item.id);
              onClick?.();
            }}
            className={cn(
              isMobile 
                ? 'block w-full py-4 text-center text-xl font-medium border-b border-companio-charcoal/10'
                : 'text-sm md:text-lg font-medium transition-colors duration-200',
              scrolled ? 'text-white' : isMobile ? 'text-companio-charcoal' : 'text-companio-charcoal',
              activeSection === item.id 
                ? 'text-companio-accent' 
                : (scrolled ? 'hover:text-companio-accent' : 'hover:text-companio-accent')
            )}
          >
            {item.label}
          </a>
        </li>
      ))}
    </>
  );

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
        
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={28} />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white pt-6 pb-10 px-4">
              <nav className="w-full">
                <ul className="flex flex-col space-y-2 w-full">
                  {renderNavItems(() => {
                    // Find and click the DrawerClose button to close the drawer
                    const closeButton = document.querySelector('[data-vaul-drawer-close]');
                    if (closeButton && closeButton instanceof HTMLElement) {
                      closeButton.click();
                    }
                  })}
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        ) : (
          <nav>
            <ul className="flex space-x-6 md:space-x-10 items-center">
              {renderNavItems()}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
