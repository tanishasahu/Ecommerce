import React, { useState } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'

import women3 from '../assets/women3.png'
import men3 from '../assets/men3.png'
import women2 from '../assets/women2.png'
import men4 from '../assets/men4.png'
import shoes1 from '../assets/shoes1.png'
import shirts2 from '../assets/shirts2.png'
import kids3 from '../assets/kids3.png'

import { useCart } from '../Context/CartContext'

const Products = () => {

  const [liked, setLiked] = useState({})
  const [selectedColor, setSelectedColor] = useState({})

  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: 'T-Shirt Shorts',
      price: '₹299',
      oldPrice: '₹399',
      discount: '25% OFF',
      rating: '4.8',
      image: women3,
      category: 'Women',
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
      category: 'Men',
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
      category: 'Women',
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
      category: 'Men',
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
      category: 'Shoes',
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
      category: 'Men',
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
      category: 'Kids',
      colors: ['black', 'blue', 'brown']
    }
  ]

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

        {/* HEADING */}

        <div className="mb-12">

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


        {/* PRODUCTS */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {products.slice(0, 4).map((product) => (

            <div
              key={product.id}
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-72
                  bg-gray-100
                  overflow-hidden
                "
              >

                <span
                  className="
                    absolute
                    top-4
                    left-4
                    z-10
                    bg-gray-900
                    text-white
                    text-xs
                    font-bold
                    px-3
                    py-1.5
                    rounded-full
                  "
                >
                  {product.discount}
                </span>


                {/* HEART */}

                <button
                  type="button"
                  onClick={() => toggleLike(product.id)}
                  className="
                    absolute
                    top-4
                    right-4
                    z-20
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    shadow
                    hover:scale-110
                    transition
                  "
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


                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-contain
                    p-5
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>


              {/* DETAILS */}

              <div className="p-5">

                <div className="flex items-start justify-between gap-2">

                  <div>

                    <p className="text-xs text-gray-500 mb-1">
                      {product.category}
                    </p>

                    <h3 className="font-bold text-gray-900">
                      {product.name}
                    </h3>

                  </div>


                  {/* RATING */}

                  <div
                    className="
                      flex
                      items-center
                      gap-1
                      bg-green-50
                      text-green-700
                      px-2
                      py-1
                      rounded-md
                    "
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


                {/* PRICE */}

                <div className="flex items-center gap-2 mt-3">

                  <span className="text-lg font-black text-gray-900">
                    {product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    {product.oldPrice}
                  </span>

                </div>


                {/* COLORS */}

                <div className="flex items-center gap-2 mt-4">

                  <span className="text-xs text-gray-500 mr-1">
                    Color:
                  </span>

                  {product.colors.map((color) => (

                    <button
                      type="button"
                      key={color}
                      onClick={() =>
                        setSelectedColor((prev) => ({
                          ...prev,
                          [product.id]: color
                        }))
                      }
                      className={`
                        w-5
                        h-5
                        rounded-full
                        ${colorClasses[color]}
                        border-2
                        hover:scale-110
                        transition
                        ${
                          selectedColor[product.id] === color
                            ? 'border-gray-900 scale-110'
                            : 'border-white ring-1 ring-gray-200'
                        }
                      `}
                      aria-label={color}
                    />

                  ))}

                </div>


                {/* CART */}

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="
                    w-full
                    mt-5
                    bg-gray-900
                    text-white
                    py-3
                    rounded-xl
                    font-semibold
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-gray-700
                    active:scale-95
                    transition
                  "
                >

                  <ShoppingBag size={17} />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* VIEW ALL */}
{/* VIEW ALL PRODUCTS */}

<div className="flex justify-center mt-10">
  <a
    href="/shop"
    className="
      inline-flex
      items-center
      justify-center
      bg-gray-900
      text-white
      px-8
      py-4
      rounded-full
      font-bold
      cursor-pointer
      hover:bg-gray-700
      hover:scale-105
      transition-all
      duration-300
      relative
      z-[9999]
    "
  >
    View All Products
  </a>
</div>

      </div>

    </section>
  )
}

export default Products