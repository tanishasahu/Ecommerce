import React from 'react'

import accessories from '../assets/accessories.png'
import dress from '../assets/dress.png'
import women_Handbags from '../assets/women_Handbags.png'
import hat from '../assets/hat.png'
import heels from '../assets/heels.png'

import { ArrowRight } from 'lucide-react'

const Collection = () => {

  const categories = [
    {
      id: 1,
      name: 'Accessories',
      count: '248',
      color: 'bg-green-100',
      textColor: 'text-green-950',
      image: accessories
    },
    {
      id: 2,
      name: 'Dress',
      count: '362',
      color: 'bg-blue-100',
      textColor: 'text-blue-950',
      image: dress
    },
    {
      id: 3,
      name: 'Women Handbags',
      count: '448',
      color: 'bg-pink-100',
      textColor: 'text-pink-950',
      image: women_Handbags
    },
    {
      id: 4,
      name: 'Hat',
      count: '148',
      color: 'bg-gray-100',
      textColor: 'text-gray-950',
      image: hat
    },
    {
      id: 5,
      name: 'Heels',
      count: '165',
      color: 'bg-red-100',
      textColor: 'text-red-950',
      image: heels
    }
  ]

  // Small Card
  const CategoryCard = ({ cat, aosDelay }) => (
    <div
      data-aos="fade-right"
      data-aos-delay={aosDelay}
      className={`${cat.color} ${cat.textColor}
      rounded-3xl p-6 min-h-[220px]
      shadow-sm hover:shadow-2xl
      transition-all duration-500
      relative flex flex-col justify-between
      group cursor-pointer overflow-hidden`}
    >

      {/* Content */}
      <div className="relative z-10">

        <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-semibold">
          Collection
        </p>

        <h3 className="text-xl md:text-2xl font-black mt-2">
          {cat.name}
        </h3>

        <div className="mt-3">
          <span className="text-3xl font-black">
            {cat.count}
          </span>

          <span className="text-sm ml-2 opacity-70 font-medium">
            Products
          </span>
        </div>

      </div>

      {/* Button */}
      <button
        className="relative z-10 flex items-center gap-2
        text-sm font-bold mt-5
        group-hover:gap-3 transition-all duration-300"
      >
        Explore
        <ArrowRight size={16} />
      </button>

      {/* Image */}
      <img
        src={cat.image}
        alt={cat.name}
        className="absolute -right-5 -bottom-7
        w-48 h-48 md:w-56 md:h-56
        object-contain opacity-90
        transition-transform duration-500
        group-hover:scale-110 group-hover:-rotate-3"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-white/10
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300"
      />

    </div>
  )

  // Big Card
  const BigCategoryCard = ({ cat }) => (
    <div
      data-aos="zoom-in"
      data-aos-delay="300"
      className={`${cat.color} ${cat.textColor}
      rounded-[2rem] p-8 md:p-10
      min-h-[460px]
      shadow-md hover:shadow-2xl
      transition-all duration-500
      relative overflow-hidden
      group cursor-pointer`}
    >

      {/* Small Label */}
      <p className="text-xs uppercase tracking-[0.3em] opacity-60 font-bold">
        Featured Collection
      </p>

      {/* Heading */}
      <h3 className="text-3xl md:text-5xl font-black mt-4 max-w-[250px] leading-tight">
        {cat.name}
      </h3>

      {/* Product Count */}
      <div className="mt-6">

        <span className="text-5xl md:text-6xl font-black">
          {cat.count}
        </span>

        <p className="text-sm opacity-70 font-semibold mt-1">
          Products Available
        </p>

      </div>

      {/* Button */}
      <button
        className="mt-8 bg-gray-900 text-white
        px-6 py-3 rounded-full
        flex items-center gap-2
        font-semibold
        hover:bg-gray-700
        transition-all duration-300
        group-hover:gap-3"
      >
        Shop Collection
        <ArrowRight size={18} />
      </button>

      {/* Big Image */}
      <img
        src={cat.image}
        alt={cat.name}
        className="absolute
        -right-10 -bottom-8
        w-64 h-64
        md:w-80 md:h-80
        object-contain
        transition-transform duration-700
        group-hover:scale-110
        group-hover:-rotate-3"
      />

      {/* Decorative Circle */}
      <div
        className="absolute -right-20 -top-20
        w-56 h-56 rounded-full
        bg-white/30
        group-hover:scale-125
        transition-transform duration-700"
      />

    </div>
  )

  return (
    <section
      className="py-20 md:py-24 bg-white overflow-hidden"
      id="collection"
    >

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div
          className="flex flex-col md:flex-row
          md:items-end md:justify-between
          gap-4 mb-12"
          data-aos="fade-down"
        >

          <div>

            <p className="text-sm uppercase tracking-[0.3em]
            text-gray-500 mb-3">
              Explore More
            </p>

            <h2 className="text-3xl md:text-5xl
            font-black text-gray-900">
              Shop by{' '}
              <span className="text-gray-400">
                Collection
              </span>
            </h2>

          </div>

          <button
            className="group flex items-center gap-2
            font-semibold text-gray-700
            hover:text-black transition-colors"
          >
            View All
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1
              transition-transform"
            />
          </button>

        </div>

        {/* Collection Grid */}
        <div
          className="grid grid-cols-1
          lg:grid-cols-3 gap-6"
        >

          {/* Left */}
          <div className="flex flex-col gap-6">

            {categories.slice(0, 2).map((cat, idx) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                aosDelay={idx * 150}
              />
            ))}

          </div>

          {/* Center */}
          <div className="flex flex-col">

            <BigCategoryCard
              cat={categories[2]}
            />

          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">

            {categories.slice(3, 5).map((cat, idx) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                aosDelay={idx * 150}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Collection