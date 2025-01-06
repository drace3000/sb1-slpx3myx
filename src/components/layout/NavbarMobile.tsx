import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from '../../data/navigation';

interface NavbarMobileProps {
  navigation: NavigationItem[];
  handleNavClick: (href: string) => void;
  getNavItemClasses: (href: string, implemented: boolean) => string;
  user: any;
  handleSignOut: () => void;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function NavbarMobile({
  navigation,
  handleNavClick,
  getNavItemClasses,
  user,
  handleSignOut,
  setIsMobileMenuOpen
}: NavbarMobileProps) {
  const isHashRoute = (href: string) => href.startsWith('#');

  const renderNavItem = (item: NavigationItem) => {
    if (!item.implemented) {
      return (
        <button
          key={item.name}
          className={`block w-full text-left ${getNavItemClasses(item.href, item.implemented)}`}
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
          onClick={() => {
            handleNavClick(item.href);
            setIsMobileMenuOpen(false);
          }}
          className={`block w-full text-left ${getNavItemClasses(item.href, item.implemented)}`}
        >
          {item.name}
        </button>
      );
    }

    return (
      <Link
        key={item.name}
        to={item.href}
        className={`block w-full text-left ${getNavItemClasses(item.href, item.implemented)}`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigation.map(renderNavItem)}
        {user ? (
          <>
            <Link
              to="/chat"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chat
            </Link>
            <button
              onClick={() => {
                handleSignOut();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-gray-50 rounded-lg"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="block px-3 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}