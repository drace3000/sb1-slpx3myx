import React from 'react';
import ProductsHero from './ProductsHero';
import ProductList from './ProductList';

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-green-100 to-green-50">
      <ProductsHero />
      <ProductList />
    </section>
  );
}