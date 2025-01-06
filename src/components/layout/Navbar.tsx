import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sprout } from 'lucide-react';
import { useAuthState } from '../../hooks/useAuthState';
import { navigation } from '../../data/navigation';
import { auth } from '../../lib/firebase';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { user } = useAuthState();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      if (isHome && window.scrollY === 0) {
        setActiveSection('home');
      } else if (isHome) {
        const sections = navigation
          .filter(item => item.implemented)
          .map(item => item.href.replace('#', ''));
        
        let foundActive = false;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              foundActive = true;
              break;
            }
          }
        }
        
        if (!foundActive) {
          setActiveSection('');
        }
      } else {
        setActiveSection('');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
    } else {
      setActiveSection('home');
    }
  }, [isHome]);

  const handleSignOut = async () => {
    await auth.signOut();
  };

  const handleNavClick = (href: string) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: href.replace('#', '') } });
    } else {
      const element = document.getElementById(href.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (!isHome) {
      navigate(-1);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (location.state && 'scrollTo' in location.state) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  const getNavItemClasses = (href: string, implemented: boolean) => {
    const section = href.replace('#', '');
    const isActive = isHome && activeSection === section;
    
    const baseClasses = 'transition-colors px-3 py-2 text-sm font-medium rounded-lg';
    
    if (!implemented) {
      return `${baseClasses} text-gray-400 cursor-not-allowed`;
    }

    if (isScrolled || !isHome || isLoginPage) {
      return `${baseClasses} ${
        isActive
          ? 'text-green-600 bg-green-500/10'
          : 'text-gray-700 hover:text-green-600 hover:bg-green-500/10'
      }`;
    }

    return `${baseClasses} ${
      isActive
        ? 'text-green-400 bg-green-500/10'
        : 'text-white hover:text-green-400 hover:bg-green-500/10'
    }`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isLoginPage
          ? 'bg-white shadow-sm' 
          : isHome
            ? 'bg-black/20 backdrop-blur-sm'
            : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 group"
            >
              <Sprout className={`h-8 w-8 ${isScrolled || isLoginPage ? 'text-green-600' : 'text-green-400'} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`} />
              <span className={`text-xl font-bold ${isScrolled || isLoginPage ? 'text-gray-900' : 'text-white'} group-hover:text-green-600 transition-colors`}>
                Nu Life Greens
              </span>
            </button>
          </div>

          <NavbarDesktop
            navigation={navigation}
            handleNavClick={handleNavClick}
            getNavItemClasses={getNavItemClasses}
            user={user}
            handleSignOut={handleSignOut}
            isScrolled={isScrolled}
            isHome={isHome}
            location={location}
          />

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                isScrolled || isLoginPage ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <NavbarMobile
          navigation={navigation}
          handleNavClick={handleNavClick}
          getNavItemClasses={getNavItemClasses}
          user={user}
          handleSignOut={handleSignOut}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </nav>
  );
}