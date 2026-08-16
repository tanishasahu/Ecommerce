import React, { useState } from 'react'
import women3 from '../assets/women3.png'
import men3 from '../assets/men3.png'
import women2 from '../assets/women2.png'
import men4 from '../assets/men4.png'
import shoes1 from '../assets/shoes1.png'
import shirts2 from '../assets/shirts2.png'
import kids3 from '../assets/kids3.png'

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  ShoppingBag,
  Star,
  ArrowRight
} from 'lucide-react'

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [liked, setLiked] = useState({})
  const [selectedColor, setSelectedColor] = useState({})

  const products = [
    {
      id: 1,
      name: 'T-Shirt Shorts',
      price: '₹299',
      oldPrice: '₹399',
      discount: '25% OFF',
      rating: '4.8',
      image: women3,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 2,
      name: 'Classic Jacket',
      price: '₹799',
      oldPrice: '₹899',
      discount: '11% OFF',
      rating: '4.7',
      image: men3,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 3,
      name: 'Floral Dress',
      price: '₹399',
      oldPrice: '₹499',
      discount: '20% OFF',
      rating: '4.9',
      image: women2,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 4,
      name: 'Casual T-Shirt',
      price: '₹199',
      oldPrice: '₹299',
      discount: '33% OFF',
      rating: '4.6',
      image: men4,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: '₹299',
      oldPrice: '₹399',
      discount: '25% OFF',
      rating: '4.8',
      image: shoes1,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 6,
      name: 'Casual Shirt',
      price: '₹259',
      oldPrice: '₹399',
      discount: '35% OFF',
      rating: '4.7',
      image: shirts2,
      colors: ['black', 'blue', 'brown']
    },
    {
      id: 7,
      name: 'Kids Gown',
      price: '₹699',
      oldPrice: '₹799',
      discount: '12% OFF',
      rating: '4.9',
      image: kids3,
      colors: ['black', 'blue', 'brown']
    }
  ]

  const itemsPerPage = 4
  const totalSlides = Math.ceil(products.length / itemsPerPage)

  const startIndex = currentIndex * itemsPerPage

  const currentProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= totalSlides ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? totalSlides - 1 : prev - 1
    )
  }

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const colorClasses = {
    black: 'bg-black',
    blue: 'bg-blue-400',
    brown: 'bg-amber-700'
  }

  return (
    <section
      className="py-20 md:py-24 bg-white"
      data-aos="fade-up"
    >

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div
          className="flex flex-col md:flex-row
          md:items-end md:justify-between gap-6 mb-12"
          data-aos="fade-down"
        >

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Our Collection
            </p>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Trending Products
            </h2>

            <p className="text-gray-500 mt-3">
              Discover our most popular fashion picks.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex gap-3">

            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full
              border border-gray-200 flex items-center
              justify-center hover:bg-gray-900
              hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full
              border border-gray-200 flex items-center
              justify-center hover:bg-gray-900
              hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {currentProducts.map((product, idx) => (

            <div
              key={`${product.id}-${startIndex + idx}`}
              className="group bg-white rounded-2xl overflow-hidden
              border border-gray-100 shadow-sm
              hover:shadow-2xl transition-all duration-500"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >

              {/* Image */}
              <div className="relative h-72 bg-gray-100 overflow-hidden">

                {/* Discount */}
                <span
                  className="absolute top-4 left-4 z-10
                  bg-gray-900 text-white text-xs
                  font-bold px-3 py-1.5 rounded-full"
                >
                  {product.discount}
                </span>

                {/* Wishlist */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 z-10
                  w-10 h-10 rounded-full bg-white/90
                  backdrop-blur-sm flex items-center
                  justify-center shadow-sm
                  hover:scale-110 transition-transform"
                >
                  <Heart
                    size={19}
                    className={
                      liked[product.id]
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-700'
                    }
                  />
                </button>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-5
                  transition-transform duration-700
                  group-hover:scale-110"
                />

                {/* Quick View */}
                <button
                  className="absolute bottom-4 left-1/2
                  -translate-x-1/2 translate-y-16
                  group-hover:translate-y-0
                  bg-white text-gray-900
                  px-5 py-2.5 rounded-full
                  text-sm font-bold shadow-xl
                  flex items-center gap-2
                  transition-all duration-300
                  whitespace-nowrap"
                >
                  Quick View
                  <ArrowRight size={16} />
                </button>

              </div>

              {/* Details */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-2">

                  <h3 className="font-bold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1
                    bg-green-50 text-green-700
                    px-2 py-1 rounded-md"
                  >
                    <Star
                      size={13}
                      className="fill-green-600"
                    />

                    <span className="text-xs font-bold">
                      {product.rating}
                    </span>
                  </div>

                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-3">

                  <span className="text-lg font-black text-gray-900">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>

                </div>

                {/* Colors */}
                <div className="flex items-center gap-2 mt-4">

                  <span className="text-xs text-gray-500 mr-1">
                    Color:
                  </span>

                  {product.colors.map((color) => (

                    <button
                      key={color}
                      onClick={() =>
                        setSelectedColor((prev) => ({
                          ...prev,
                          [product.id]: color
                        }))
                      }
                      className={`w-5 h-5 rounded-full
                      ${colorClasses[color]}
                      border-2 transition-all
                      hover:scale-110
                      ${
                        selectedColor[product.id] === color
                          ? 'border-gray-900 scale-110'
                          : 'border-white ring-1 ring-gray-200'
                      }`}
                    />

                  ))}

                </div>

                {/* Add to Cart */}
                <button
                  className="w-full mt-5
                  bg-gray-900 text-white
                  py-3 rounded-xl
                  font-semibold flex items-center
                  justify-center gap-2
                  hover:bg-gray-700
                  transition-colors duration-300"
                >
                  <ShoppingBag size={17} />
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">

          {Array.from({ length: totalSlides }).map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-gray-900'
                  : 'w-2 bg-gray-300'
              }`}
            />

          ))}

        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">

          <button
            className="group flex items-center gap-2
            border-2 border-gray-900
            px-7 py-3 rounded-full
            font-bold text-gray-900
            hover:bg-gray-900 hover:text-white
            transition-all duration-300"
          >
            View All Products

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1
              transition-transform"
            />
          </button>

        </div>

      </div>

    </section>
  )
}

export default Products