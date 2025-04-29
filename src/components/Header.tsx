
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            href="#" 
            onClick={scrollToTop}
            className={cn(
              'text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300',
              scrolled ? 'text-white' : 'text-companio-charcoal'
            )}
          >
            Companio
          </a>
        </div>
        <div className="flex items-center">
          <nav className="mr-6">
            <ul className="flex space-x-6 md:space-x-10">
              {['Research', 'Team', 'Solution', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={cn(
                      'text-sm md:text-base font-medium hover:text-companio-accent transition-colors duration-200',
                      scrolled ? 'text-white' : 'text-companio-charcoal'
                    )}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <img 
            src="/lovable-uploads/dafc7530-7ae8-4bbf-9239-3284328836fe.png" 
            alt="Companio Logo" 
            className="h-14 md:h-[4.5rem]" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
