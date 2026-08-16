import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../Context/CartContext'

const Cards = ({ products = [] }) => {

  const { addToCart } = useCart()

  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Our Collection
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Featured Products
          </h2>

        </div>


        {/* EMPTY PRODUCTS */}
        {products.length === 0 ? (

          <div className="text-center py-16">

            <p className="text-gray-500 text-lg">
              No products available.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="group bg-white rounded-2xl
                overflow-hidden border border-gray-100
                shadow-sm hover:shadow-xl
                transition-all duration-300"
              >

                {/* IMAGE */}
                <div
                  className="relative h-64 bg-gray-50
                  flex items-center justify-center
                  overflow-hidden"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain
                    p-5 group-hover:scale-105
                    transition-transform duration-500"
                  />

                  {product.Category && (

                    <span
                      className="absolute top-4 left-4
                      bg-white/90 text-gray-700
                      text-xs font-semibold
                      px-3 py-1 rounded-full"
                    >
                      {product.Category}
                    </span>

                  )}

                </div>


                {/* DETAILS */}
                <div className="p-5">

                  <p className="text-sm text-gray-500 mb-1">
                    {product.Category}
                  </p>


                  <h3 className="text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>


                  <div className="flex items-center justify-between gap-3 mt-5">

                    {/* PRICE */}
                    <p className="text-lg font-black text-gray-900">
                      ₹
                      {Number(product.price).toLocaleString('en-IN')}
                    </p>


                    {/* ADD TO CART */}
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2
                      bg-gray-900 text-white
                      px-4 py-2.5 rounded-full
                      font-semibold text-sm
                      hover:bg-gray-700
                      active:scale-95
                      transition-all"
                    >

                      <ShoppingCart size={16} />

                      Add to Cart

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default Cards