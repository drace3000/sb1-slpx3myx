import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../data/products';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';

export default function ProductList() {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={product.name}
            product={product}
            isVisible={isVisible}
            delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
}