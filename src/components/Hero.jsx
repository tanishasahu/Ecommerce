import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Navbar from './Navbar'

import orangeImg from '../assets/orangecap.png'
import greenImg from '../assets/greencap.png'
import redImg from '../assets/redcap.png'
import blueImg from '../assets/bluecap.png'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      bgColor: 'bg-orange-500',
      image: orangeImg,
      alt: 'Orange Cap',
      smallTitle: 'NEW COLLECTION',
      title: 'Express Your Style',
      description:
        'Discover the latest fashion pieces made for your unique style.'
    },
    {
      bgColor: 'bg-green-700',
      image: greenImg,
      alt: 'Green Cap',
      smallTitle: 'TRENDING NOW',
      title: 'Fresh & Stylish',
      description:
        'Upgrade your everyday look with our latest collection.'
    },
    {
      bgColor: 'bg-red-500',
      image: redImg,
      alt: 'Red Cap',
      smallTitle: 'NEW ARRIVALS',
      title: 'Wear Your Confidence',
      description:
        'Find fashion that makes you feel confident and comfortable.'
    },
    {
      bgColor: 'bg-blue-800',
      image: blueImg,
      alt: 'Blue Cap',
      smallTitle: 'LIMITED EDITION',
      title: 'Make It Yours',
      description:
        'Explore exclusive styles created for modern fashion lovers.'
    }
  ]

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % slides.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentSlide = slides[currentIndex]

  // Next
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % slides.length
    )
  }

  // Previous
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + slides.length) % slides.length
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-700 overflow-hidden ${currentSlide.bgColor}`}
    >

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-90px)]">

        {/* Background FASHION Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="text-[5rem] sm:text-[8rem] md:text-[12rem]
            lg:text-[17rem] font-black text-white/10
            select-none whitespace-nowrap"
          >
            FASHION
          </span>
        </div>

        {/* Main Content */}
        <div
          className="container mx-auto px-5 md:px-10 lg:px-16
          min-h-[calc(100vh-90px)] flex items-center"
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">

            {/* LEFT CONTENT */}
            <div
              className="relative z-20 text-white"
              data-aos="fade-right"
            >

              <p className="text-sm md:text-base tracking-[0.3em] font-semibold mb-5">
                {currentSlide.smallTitle}
              </p>

              <h1
                className="text-5xl sm:text-6xl md:text-7xl
                lg:text-8xl font-black leading-[0.95] mb-6"
              >
                {currentSlide.title}
              </h1>

              <p
                className="max-w-lg text-white/80 text-base
                md:text-lg leading-7 mb-8"
              >
                {currentSlide.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                {/* Shop Now */}
                <Link
                  to="/products"
                  className="bg-white text-gray-900
                  px-7 py-3 rounded-full
                  font-bold hover:bg-gray-100
                  transition-all duration-300 shadow-lg
                  hover:scale-105"
                >
                  Shop Now
                </Link>

                {/* Explore Collection */}
                <Link
                  to="/collection"
                  className="border-2 border-white
                  text-white px-7 py-3 rounded-full
                  font-bold hover:bg-white
                  hover:text-gray-900
                  transition-all duration-300
                  hover:scale-105"
                >
                  Explore Collection
                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div
              className="relative z-10 flex justify-center items-center"
              data-aos="zoom-in"
            >

              {/* Glow */}
              <div
                className="absolute w-64 h-64 md:w-96 md:h-96
                bg-white/10 rounded-full blur-3xl"
              ></div>

              {/* Product Image */}
            {/* Product Image */}
<img
  key={currentIndex}
  src={currentSlide.image}
  alt={currentSlide.alt}
  className="
    hero-cap
    relative
    w-64 h-64
    sm:w-80 sm:h-80
    md:w-[25rem] md:h-[25rem]
    lg:w-[32rem] lg:h-[32rem]
    object-contain
    hover:scale-105
  "
/>
            </div>

          </div>
        </div>

        {/* Previous / Next Buttons */}
        <div
          className="absolute bottom-8 left-5 md:left-10
          flex gap-3 z-30"
        >

          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full
            border border-white/50 text-white
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full
            border border-white/50 text-white
            flex items-center justify-center
            hover:bg-white hover:text-black
            transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Slider Dots */}
        <div
          className="absolute bottom-10 right-5 md:right-10
          flex gap-2 z-30"
        >

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full
              transition-all duration-300 ${
                currentIndex === index
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/50'
              }`}
            />
          ))}

        </div>

      </section>

    </div>
  )
}

export default Hero