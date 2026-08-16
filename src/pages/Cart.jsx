import React from 'react'

import {
  ShoppingBag,
  ArrowLeft,
  Trash2,
  Plus,
  Minus
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import { useCart } from '../Context/CartContext'


const Cart = () => {

  const navigate = useNavigate()

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal
  } = useCart()


  // =========================
  // CONTINUE SHOPPING
  // =========================

  const continueShopping = () => {
    navigate('/category')
  }


  // =========================
  // EMPTY CART
  // =========================

  if (cartItems.length === 0) {

    return (

      <section className="min-h-screen bg-gray-100 py-16">

        <div className="container mx-auto px-4 md:px-8 lg:px-16">

          {/* HEADING */}

          <div className="text-center mb-12">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Your Shopping
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900">
              Shopping Cart
            </h1>

          </div>


          {/* EMPTY CART */}

          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-sm p-10 text-center">

            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">

              <ShoppingBag
                size={35}
                className="text-gray-600"
              />

            </div>


            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>


            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your shopping bag yet.
            </p>


            {/* CONTINUE SHOPPING */}

            <button
              type="button"
              onClick={continueShopping}
              className="
                inline-flex
                items-center
                gap-2
                bg-gray-900
                text-white
                px-6
                py-3
                rounded-full
                font-semibold
                hover:bg-gray-700
                active:scale-95
                transition-all
                cursor-pointer
              "
            >

              <ArrowLeft size={18} />

              Continue Shopping

            </button>

          </div>

        </div>

      </section>

    )

  }


  // =========================
  // CART WITH PRODUCTS
  // =========================

  return (

    <section className="min-h-screen bg-gray-100 py-16">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">


        {/* HEADING */}

        <div className="text-center mb-12">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Your Shopping
          </p>


          <h1 className="text-4xl md:text-5xl font-black text-gray-900">
            Shopping Cart
          </h1>

        </div>


        <div className="grid lg:grid-cols-3 gap-8">


          {/* =========================
              PRODUCTS
          ========================= */}

          <div className="lg:col-span-2 space-y-4">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white
                  rounded-2xl
                  p-5
                  shadow-sm
                  flex
                  flex-col
                  sm:flex-row
                  gap-5
                "
              >


                {/* IMAGE */}

                <div className="
                  w-full
                  sm:w-32
                  h-32
                  bg-gray-50
                  rounded-xl
                  flex-shrink-0
                ">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-3
                    "
                  />

                </div>


                {/* DETAILS */}

                <div className="flex-1">

                  <p className="text-sm text-gray-500">
                    {item.category || 'Fashion'}
                  </p>


                  <h3 className="text-lg font-bold text-gray-900 mt-1">
                    {item.name}
                  </h3>


                  <p className="font-bold text-gray-900 mt-2">
                    {item.price}
                  </p>


                  {/* QUANTITY */}

                  <div className="flex items-center gap-3 mt-4">


                    {/* MINUS */}

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-gray-100
                        flex
                        items-center
                        justify-center
                        hover:bg-gray-200
                        transition
                        cursor-pointer
                      "
                    >

                      <Minus size={16} />

                    </button>


                    {/* QUANTITY */}

                    <span className="font-bold">
                      {item.quantity}
                    </span>


                    {/* PLUS */}

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                      className="
                        w-9
                        h-9
                        rounded-full
                        bg-gray-900
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:bg-gray-700
                        transition
                        cursor-pointer
                      "
                    >

                      <Plus size={16} />

                    </button>

                  </div>

                </div>


                {/* REMOVE */}

                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="
                    text-red-500
                    hover:text-red-700
                    self-start
                    p-2
                    cursor-pointer
                  "
                >

                  <Trash2 size={20} />

                </button>

              </div>

            ))}


            {/* CONTINUE SHOPPING */}

            <div className="pt-4">

              <button
                type="button"
                onClick={continueShopping}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-gray-700
                  font-semibold
                  hover:text-black
                  cursor-pointer
                "
              >

                <ArrowLeft size={18} />

                Continue Shopping

              </button>

            </div>

          </div>


          {/* =========================
              ORDER SUMMARY
          ========================= */}

          <div className="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            h-fit
          ">


            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>


            {/* ITEMS */}

            <div className="flex justify-between mb-4">

              <span className="text-gray-500">
                Items
              </span>

              <span className="font-semibold">

                {cartItems.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}

              </span>

            </div>


            {/* SHIPPING */}

            <div className="flex justify-between mb-4">

              <span className="text-gray-500">
                Shipping
              </span>

              <span className="text-green-600 font-semibold">
                Free
              </span>

            </div>


            {/* TOTAL */}

            <div className="
              border-t
              border-gray-200
              pt-4
              flex
              justify-between
            ">

              <span className="text-lg font-bold">
                Total
              </span>

              <span className="text-lg font-black">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>

            </div>


            {/* CHECKOUT */}

            <button
              type="button"
              className="
                w-full
                mt-6
                bg-gray-900
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-gray-700
                active:scale-95
                transition-all
                cursor-pointer
              "
            >

              Checkout

            </button>


            {/* CLEAR CART */}

            <button
              type="button"
              onClick={clearCart}
              className="
                w-full
                mt-3
                bg-red-500
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-red-600
                active:scale-95
                transition-all
                cursor-pointer
              "
            >

              Clear Cart

            </button>


            {/* CONTINUE SHOPPING */}

            <button
              type="button"
              onClick={continueShopping}
              className="
                mt-3
                w-full
                flex
                items-center
                justify-center
                gap-2
                border
                border-gray-300
                py-3
                rounded-xl
                font-semibold
                hover:bg-gray-100
                transition
                cursor-pointer
              "
            >

              <ArrowLeft size={18} />

              Continue Shopping

            </button>

          </div>

        </div>

      </div>

    </section>

  )

}


export default Cart