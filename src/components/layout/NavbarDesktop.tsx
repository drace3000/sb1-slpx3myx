import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { NavigationItem } from '../../data/navigation';
import Tooltip from '../ui/Tooltip';

interface NavbarDesktopProps {
  navigation: NavigationItem[];
  handleNavClick: (href: string) => void;
  getNavItemClasses: (href: string, implemented: boolean) => string;
  user: any;
  handleSignOut: () => void;
  isScrolled: boolean;
  isHome: boolean;
  location: any;
}

export default function NavbarDesktop({
  navigation,
  handleNavClick,
  getNavItemClasses,
  user,
  handleSignOut,
  isScrolled,
  isHome,
  location
}: NavbarDesktopProps) {
  const isHashRoute = (href: string) => href.startsWith('#');

  const renderNavItem = (item: NavigationItem) => {
    if (!item.implemented) {
      return (
        <button
          key={item.name}
          className={getNavItemClasses(item.href, item.implemented)}
          disabled
        >
          {item.name}
        </button>
      );
    }

    if (isHashRoute(item.href)) {
      return (
        <button
          key={item.name}
          onClick={() => handleNavClick(item.href)}
          className={getNavItemClasses(item.href, item.implemented)}
        >
          {item.name}
        </button>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        className={getNavItemClasses(item.href, item.implemented)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      <div className={`flex space-x-1 ${
        isScrolled || !isHome
          ? 'bg-gray-100' 
          : 'bg-black/30'
      } rounded-xl px-2 py-1`}>
        {navigation.map(renderNavItem)}
      </div>

      {user ? (
        <div className="flex items-center space-x-2 ml-4">
          <Link
            to="/chat"
            className={`group flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors text-sm ${
              location.pathname === '/chat'
                ? 'text-green-600 bg-green-500/10'
                : isScrolled || !isHome
                  ? 'text-gray-700 hover:text-green-600'
                  : 'text-white hover:text-green-400'
            }`}
          >
            <MessageSquare className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span>Chat</span>
          </Link>
          <button
            onClick={handleSignOut}
            className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
              isScrolled || !isHome
                ? 'bg-white border border-red-600 hover:bg-red-50'
                : 'bg-white hover:bg-gray-100'
            } text-red-600`}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <Tooltip text={['Required to chat', 'or order products']}>
          <Link
            to="/login"
            className={`px-3 py-1.5 rounded-lg transition-colors text-sm ${
              isScrolled || !isHome
                ? 'text-white bg-green-600 hover:bg-green-700'
                : 'text-green-600 bg-white hover:bg-gray-100'
            }`}
          >
            Sign In
          </Link>
        </Tooltip>
      )}
    </div>
  );
}