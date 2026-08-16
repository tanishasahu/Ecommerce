import React, { useState } from 'react'
import {
  Heart,
  ShoppingCart,
  Tag
} from 'lucide-react'

import women1 from '../assets/women1.png'
import women2 from '../assets/women2.png'
import men2 from '../assets/men2.png'
import shoes2 from '../assets/shoes2.png'
import pants2 from '../assets/pants2.png'
import kids2 from '../assets/kids2.png'

const Sale = () => {
  const [liked, setLiked] = useState({})

  const saleProducts = [
    {
      id: 1,
      name: 'Summer Top',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      image: women1
    },
    {
      id: 2,
      name: 'Floral Dress',
      price: '₹399',
      oldPrice: '₹699',
      discount: '43% OFF',
      image: women2
    },
    {
      id: 3,
      name: 'Half Sleeve T-Shirt',
      price: '₹199',
      oldPrice: '₹399',
      discount: '50% OFF',
      image: men2
    },
    {
      id: 4,
      name: 'Casual Sneakers',
      price: '₹299',
      oldPrice: '₹599',
      discount: '50% OFF',
      image: shoes2
    },
    {
      id: 5,
      name: 'Cargo Pants',
      price: '₹499',
      oldPrice: '₹799',
      discount: '38% OFF',
      image: pants2
    },
    {
      id: 6,
      name: 'Kids Set',
      price: '₹399',
      oldPrice: '₹699',
      discount: '43% OFF',
      image: kids2
    }
  ]

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
        >

          <div className="flex justify-center mb-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <Tag size={25} />
            </div>
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-red-500 font-semibold mb-3">
            Limited Time Offers
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900">
            Big <span className="text-red-500">Sale</span>
          </h1>

          <p className="text-gray-500 max-w-xl mx-auto mt-4">
            Grab your favorite fashion products at amazing prices.
            Don't miss these limited-time offers.
          </p>

        </div>

        {/* Sale Banner */}
        <div
          className="bg-gray-900 text-white rounded-3xl p-8 md:p-10 mb-12 text-center"
          data-aos="zoom-in"
        >

          <p className="text-red-400 font-bold tracking-widest mb-2">
            MEGA SALE
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-3">
            UP TO 50% OFF
          </h2>

          <p className="text-gray-300">
            On selected fashion collections
          </p>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {saleProducts.map((product, index) => (

            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-2xl
              transition-all duration-500 border border-gray-100"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              {/* Image */}
              <div className="relative h-64 bg-gray-50 overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-5
                  transition-transform duration-700
                  group-hover:scale-110"
                />

                {/* Discount */}
                <span
                  className="absolute top-3 left-3
                  bg-red-500 text-white text-xs
                  font-bold px-3 py-1 rounded-full"
                >
                  {product.discount}
                </span>

                {/* Heart */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-3 right-3
                  bg-white rounded-full p-2 shadow-md
                  hover:scale-110 transition"
                >
                  <Heart
                    size={18}
                    className={
                      liked[product.id]
                        ? 'fill-red-500 stroke-red-500'
                        : 'stroke-gray-700'
                    }
                  />
                </button>

              </div>

              {/* Details */}
              <div className="p-5">

                <h3 className="font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-4">

                  <span className="text-red-500 font-black text-lg">
                    {product.price}
                  </span>

                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>

                </div>

                <button
                  className="w-full bg-gray-900 text-white
                  py-2.5 rounded-xl
                  flex items-center justify-center gap-2
                  font-semibold
                  hover:bg-red-500
                  transition-all duration-300"
                >
                  <ShoppingCart size={17} />
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Sale