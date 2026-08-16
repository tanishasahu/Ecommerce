import React, { useEffect, useState } from 'react'
import women1 from '../assets/women1.png'
import women2 from '../assets/women2.png'
import men1 from '../assets/men1.png'
import pants1 from '../assets/pants1.png'

import {
  Heart,
  RefreshCcw,
  ShoppingCart,
  Star,
  ArrowRight
} from 'lucide-react'

const Deals = () => {

  // ---------------- PRODUCTS ----------------

  const featuredProducts = [
    {
      id: 1,
      name: 'Floral Ground Dress',
      price: '₹199',
      oldPrice: '₹399',
      image: women1,
      rating: 4,
      discount: '-33%'
    },
    {
      id: 2,
      name: 'Elegant Women Dress',
      price: '₹359',
      oldPrice: '₹799',
      image: women2,
      rating: 5,
      discount: '-31%'
    },
    {
      id: 3,
      name: 'Classic Men Wear',
      price: '₹359',
      oldPrice: '₹599',
      image: men1,
      rating: 4,
      discount: '-40%'
    }
  ]

  // ---------------- WISHLIST ----------------

  const [liked, setLiked] = useState({})

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // ---------------- COUNTDOWN ----------------

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 21,
    mins: 41,
    secs: 43
  })

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let { days, hours, mins, secs } = prev

        if (secs > 0) {
          secs--
        } else {
          secs = 59

          if (mins > 0) {
            mins--
          } else {
            mins = 59

            if (hours > 0) {
              hours--
            } else {
              hours = 23

              if (days > 0) {
                days--
              }
            }
          }
        }

        return {
          days,
          hours,
          mins,
          secs
        }
      })

    }, 1000)

    return () => clearInterval(timer)

  }, [])

  const timerData = [
    {
      value: timeLeft.days,
      label: 'Days'
    },
    {
      value: timeLeft.hours,
      label: 'Hours'
    },
    {
      value: timeLeft.mins,
      label: 'Mins'
    },
    {
      value: timeLeft.secs,
      label: 'Secs'
    }
  ]

  // ---------------- RATING ----------------

  const Rating = ({ rating }) => {

    return (
      <div className="flex justify-center gap-0.5">

        {[1, 2, 3, 4, 5].map((star) => (

          <Star
            key={star}
            size={14}
            className={
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }
          />

        ))}

      </div>
    )
  }

  return (

    <section
      className="py-20 md:py-24 bg-gray-50 overflow-hidden"
      data-aos="fade-up"
    >

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* SECTION HEADING */}

        <div
          className="text-center mb-12"
          data-aos="fade-down"
        >

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Limited Time
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Exclusive Deals
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Grab your favourite fashion pieces before the offer ends.
          </p>

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* ================= DEAL OF THE DAY ================= */}

          <div
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm
            hover:shadow-xl transition-all duration-500"
            data-aos="fade-right"
          >

            {/* Header */}

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-red-500 font-bold">
                  Special Offer
                </p>

                <h3 className="text-2xl font-black text-gray-900 mt-1">
                  Deal of the Day
                </h3>

              </div>

              <span className="bg-red-50 text-red-600 px-3 py-1.5 rounded-full text-xs font-bold">
                -20% OFF
              </span>

            </div>

            {/* Product */}

            <div className="grid sm:grid-cols-2 gap-6 items-center">

              {/* IMAGE */}

              <div
                className="relative h-64 bg-gray-50 rounded-2xl
                flex items-center justify-center overflow-hidden group"
                data-aos="zoom-in"
              >

                <img
                  src={pants1}
                  alt="Deal product"
                  className="w-full h-full object-contain p-5
                  group-hover:scale-110 transition-transform duration-700"
                />

                <span
                  className="absolute top-4 left-4
                  bg-red-500 text-white text-xs
                  font-bold px-3 py-1.5 rounded-full"
                >
                  -20%
                </span>

              </div>

              {/* DETAILS */}

              <div
                className="text-center sm:text-left"
                data-aos="fade-up"
              >

                <h3 className="text-xl font-black text-gray-900">
                  Premium Pants
                </h3>

                {/* Rating */}

                <div className="flex justify-center sm:justify-start mt-2">
                  <Rating rating={5} />
                </div>

                <p className="text-gray-500 text-sm leading-6 mt-4">
                  Upgrade your everyday wardrobe with our
                  premium collection designed for comfort
                  and modern style.
                </p>

                {/* PRICE */}

                <div className="flex items-center justify-center sm:justify-start gap-3 mt-5">

                  <span className="text-2xl font-black text-red-500">
                    ₹720
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹900
                  </span>

                </div>

                {/* BUTTONS */}

                <div className="flex items-center justify-center sm:justify-start gap-2 mt-5">

                  <button
                    className="bg-gray-900 text-white
                    px-5 py-3 rounded-xl
                    flex items-center gap-2
                    text-sm font-semibold
                    hover:bg-gray-700
                    transition-colors"
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>

                  <button
                    onClick={() => toggleLike('deal')}
                    className="w-11 h-11 border
                    rounded-xl flex items-center
                    justify-center hover:bg-gray-100
                    transition-colors"
                  >

                    <Heart
                      size={18}
                      className={
                        liked.deal
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-700'
                      }
                    />

                  </button>

                </div>

              </div>

            </div>

            {/* COUNTDOWN */}

            <div className="mt-8 pt-6 border-t border-gray-100">

              <p className="text-center text-sm text-gray-500 mb-4">
                Offer ends in
              </p>

              <div className="flex justify-center gap-3">

                {timerData.map((timer, index) => (

                  <div
                    key={index}
                    className="text-center"
                  >

                    <div
                      className="bg-gray-900 text-white
                      w-14 h-14 md:w-16 md:h-16
                      rounded-xl flex items-center
                      justify-center"
                    >

                      <span className="text-lg md:text-xl font-black">
                        {String(timer.value).padStart(2, '0')}
                      </span>

                    </div>

                    <span className="text-xs text-gray-500 mt-2 block">
                      {timer.label}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* ================= FEATURED PRODUCTS ================= */}

          <div
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm
            hover:shadow-xl transition-all duration-500"
            data-aos="fade-left"
          >

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                  Best Picks
                </p>

                <h3 className="text-2xl font-black text-gray-900 mt-1">
                  Featured Products
                </h3>

              </div>

              <button className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gray-600 hover:text-black">
                View All
                <ArrowRight size={16} />
              </button>

            </div>

            {/* PRODUCTS */}

            <div className="grid sm:grid-cols-3 gap-5">

              {featuredProducts.map((product, index) => (

                <div
                  key={product.id}
                  className="group text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >

                  {/* IMAGE */}

                  <div
                    className="relative h-44 bg-gray-50
                    rounded-2xl overflow-hidden"
                  >

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4
                      group-hover:scale-110
                      transition-transform duration-500"
                    />

                    {/* DISCOUNT */}

                    <span
                      className="absolute top-3 left-3
                      bg-red-500 text-white
                      text-[10px] font-bold
                      px-2 py-1 rounded-full"
                    >
                      {product.discount}
                    </span>

                    {/* HEART */}

                    <button
                      onClick={() => toggleLike(product.id)}
                      className="absolute top-3 right-3
                      w-8 h-8 rounded-full bg-white
                      flex items-center justify-center
                      shadow-sm hover:scale-110
                      transition-transform"
                    >

                      <Heart
                        size={15}
                        className={
                          liked[product.id]
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-700'
                        }
                      />

                    </button>

                  </div>

                  {/* NAME */}

                  <h4 className="font-bold text-gray-800 text-sm mt-4">
                    {product.name}
                  </h4>

                  {/* RATING */}

                  <div className="mt-2">
                    <Rating rating={product.rating} />
                  </div>

                  {/* PRICE */}

                  <div className="flex justify-center gap-2 mt-2">

                    <span className="font-black text-red-500">
                      {product.price}
                    </span>

                    <span className="text-xs text-gray-400 line-through">
                      {product.oldPrice}
                    </span>

                  </div>

                  {/* ADD */}

                  <div className="flex justify-center gap-2 mt-3">

                    <button
                      className="px-3 py-2 rounded-lg
                      bg-gray-900 text-white
                      text-xs font-semibold
                      flex items-center gap-1
                      hover:bg-gray-700 transition-colors"
                    >
                      <ShoppingCart size={13} />
                      Add
                    </button>

                    <button
                      className="p-2 border rounded-lg
                      hover:bg-gray-100 transition-colors"
                    >
                      <RefreshCcw size={14} />
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Deals