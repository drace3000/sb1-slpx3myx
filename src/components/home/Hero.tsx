import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import StatCard from './StatCard';
import { heroStats } from '../../data/stats';
import '../../styles/animations.css';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2671&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:w-2/3">
          <div className="flex items-center space-x-2 mb-6 animate-slide-up opacity-0">
            <Leaf className="h-6 w-6 text-green-400" />
            <span className="text-green-400 font-medium">Nature's Nutrient Powerhouse</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up opacity-0 delay-200">
            Elevate Your Health With
            <span className="block text-green-400">Premium Microgreens</span>
          </h1>
          
          <div className="space-y-6 mb-8">
            <p className="text-xl text-gray-200 animate-slide-up opacity-0 delay-400">
              Discover the power of microgreens – young baby vegetables harvested at their peak nutritional value. 
              With up to 40x more nutrients than mature plants, our premium microgreens deliver exceptional flavor 
              and unmatched health benefits in every bite.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up opacity-0 delay-600">
            <a
              href="#benefits"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-900 transition-all duration-300 hover:scale-105"
            >
              Learn More
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105" 
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                delay={800 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}