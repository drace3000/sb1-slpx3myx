export interface NavigationItem {
  name: string;
  href: string;
  implemented: boolean;
}

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home', implemented: true },
  { name: 'Products', href: '#products', implemented: true },
  { name: 'Health Benefits', href: '#benefits', implemented: true },
  { name: 'Sustainability', href: '#sustainability', implemented: true },
  { name: 'Education', href: '/education', implemented: true },
  { name: 'About Us', href: '#about', implemented: false },
  { name: 'Shop', href: '#shop', implemented: false },
];