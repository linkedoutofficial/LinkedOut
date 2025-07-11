import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Navigation links as originally present
  // Dynamically set navLinks for SpeakerSessions page
  const isSpeakerSessions = window.location.pathname.includes('SpeakerSessions');
  const navLinks = isSpeakerSessions
    ? [
        { name: 'Upcoming Session', href: '#upcoming-session' },
        { name: 'Past Sessions', href: '#past-sessions' },
        { name: 'Community', href: '#community' },
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Inside The Community', href: '#inside-community' },
        { name: 'Partners', href: '#partners' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
      ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/assets/linkedout-logo-light-theme.jpg"
              alt="LinkedOut Logo Light"
              className="w-10 h-10 rounded-full object-cover border-2 border-electric-yellow shadow block dark:hidden"
            />
            <img
              src="/assets/linkedout-logo-dark-theme.jpg"
              alt="LinkedOut Logo Dark"
              className="w-10 h-10 rounded-full object-cover border-2 border-electric-yellow shadow hidden dark:block"
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div className="mr-4">
                <ThemeToggle />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleAnchorClick(e, link.href.replace('#', ''))}
                  className="text-foreground hover:text-electric-yellow px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#socials"
                onClick={e => handleAnchorClick(e, 'socials')}
                className="bg-transparent border border-electric-yellow text-electric-yellow px-4 py-2 text-sm font-bold rounded-full transition-colors hover:bg-electric-yellow hover:text-black"
              >
                Socials
              </a>
              <a 
                href="https://forms.gle/ocQ3hBPhRiVrfo9L9"
                className="bg-electric-yellow hover:bg-yellow-300 text-background px-4 py-2 text-sm font-bold rounded-full transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                Apply via Google Form
              </a>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-electric-yellow focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric-yellow"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-background/95 backdrop-blur-sm border-t border-border`}> 
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href.replace('#', ''))}
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-electric-yellow transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#socials"
            onClick={e => handleAnchorClick(e, 'socials')}
            className="bg-transparent border border-electric-yellow text-electric-yellow px-4 py-2 text-base font-bold rounded-full transition-colors hover:bg-electric-yellow hover:text-black mt-2"
          >
            Socials
          </a>
          <a 
            href="https://forms.gle/ocQ3hBPhRiVrfo9L9"
            className="bg-electric-yellow hover:bg-yellow-300 text-background px-4 py-2 text-base font-bold rounded-full transition-colors mt-2"
            target="_blank" rel="noopener noreferrer"
          >
            Apply via Google Form
          </a>
          <div className="mt-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
