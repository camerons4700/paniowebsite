
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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        scrolled ? 'bg-companio-charcoal/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-semibold">
          <a 
            href="#" 
            className={cn(
              'transition-colors duration-300',
              scrolled ? 'text-white' : 'text-companio-charcoal'
            )}
          >
            Companio
          </a>
        </div>
        <nav>
          <ul className="flex space-x-6 md:space-x-10">
            {['Science', 'Team', 'Solution', 'Contact'].map((item) => (
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
      </div>
    </header>
  );
};

export default Header;
