import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavigationProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: '/', label: 'Home', type: 'link' },
    { 
      id: 'about', 
      label: 'About Us', 
      type: 'dropdown',
      items: [
        { id: '/about/history', label: 'Our History' },
        { id: '/about/mission-vision', label: 'Mission & Vision' },
        { id: '/about/team', label: 'Our Team' },
        { id: '/about/testimonials', label: 'Testimonials' },
        { id: '/about/join-our-team', label: 'Join Our Team' },
      ]
    },
    { id: '/consultancy', label: 'BITCOG Consult', type: 'link' },
    { id: '/training', label: 'BITCOG Learning', type: 'link' },
    // { id: '/bitcog-learning', label: 'Bitcog Learning', type: 'link' },
    { id: '/journal', label: 'BITCOG Journal', type: 'link' },
    { id: '/contact', label: 'Contact Us', type: 'link' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/98 backdrop-blur-xl shadow-lg border-b border-border/50' 
        : 'bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-md'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105"> 
            <img
                     src="https://i.imgur.com/BNRXuBN.png"
                     alt="Bitcog Insightive - AI and Data Science Solutions"
                     className="w-[16rem] h-14 object-contain filter drop-shadow-sm"
                   />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    {item.type === 'dropdown' ? (
                      <>
                        <NavigationMenuTrigger className="nav-link">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="w-48 p-2">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink key={subItem.id} asChild>
                                <Link
                                  to={subItem.id}
                                  className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : item.type === 'link' ? (
                      <Link
                        to={item.id}
                        className={`nav-link ${location.pathname === item.id ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                      >
                        {item.label}
                      </button>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.type === 'dropdown' ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium text-foreground/80 hover:text-accent hover:bg-primary/5">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48">
                        {item.items?.map((subItem) => (
                          <DropdownMenuItem key={subItem.id} asChild>
                            <Link
                              to={subItem.id}
                              onClick={() => setIsMenuOpen(false)}
                              className="w-full"
                            >
                              {subItem.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.type === 'link' ? (
                    <Link
                      to={item.id}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        location.pathname === item.id
                          ? 'text-accent bg-primary/10'
                          : 'text-foreground/80 hover:text-accent hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'text-accent bg-primary/10'
                          : 'text-foreground/80 hover:text-accent hover:bg-primary/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};