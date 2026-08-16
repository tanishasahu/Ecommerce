import React, { useState } from 'react'
import {
  Search as SearchIcon,
  X,
  ShoppingBag,
  Heart,
  Star
} from 'lucide-react'

import { images } from '../assets/images'

const Search = () => {

  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState([])

  // =========================
  // ALL PRODUCTS
  // =========================

  const products = [

    // WOMEN
    {
      id: 1,
      name: 'Summer Top',
      category: 'Women',
      price: '₹299',
      oldPrice: '₹499',
      rating: '4.8',
      image: images.women1
    },

    {
      id: 2,
      name: 'Floral Dress',
      category: 'Women',
      price: '₹499',
      oldPrice: '₹799',
      rating: '4.7',
      image: images.women2
    },

    {
      id: 3,
      name: 'T-Shirt Shorts',
      category: 'Women',
      price: '₹399',
      oldPrice: '₹599',
      rating: '4.6',
      image: images.women3
    },

    {
      id: 4,
      name: 'Stylish Jacket',
      category: 'Women',
      price: '₹1299',
      oldPrice: '₹1799',
      rating: '4.9',
      image: images.women4
    },

    // MEN
    {
      id: 5,
      name: 'Summer Wear',
      category: 'Men',
      price: '₹399',
      oldPrice: '₹599',
      rating: '4.6',
      image: images.men1
    },

    {
      id: 6,
      name: 'Half Sleeves T-Shirt',
      category: 'Men',
      price: '₹199',
      oldPrice: '₹399',
      rating: '4.5',
      image: images.men2
    },

    {
      id: 7,
      name: 'Classic Blazer',
      category: 'Men',
      price: '₹999',
      oldPrice: '₹1499',
      rating: '4.8',
      image: images.men3
    },

    {
      id: 8,
      name: 'Casual T-Shirt',
      category: 'Men',
      price: '₹299',
      oldPrice: '₹499',
      rating: '4.7',
      image: images.men4
    },

    // KIDS
    {
      id: 9,
      name: 'Wedding Dress',
      category: 'Kids',
      price: '₹599',
      oldPrice: '₹899',
      rating: '4.8',
      image: images.kids1
    },

    {
      id: 10,
      name: 'Kids Set',
      category: 'Kids',
      price: '₹499',
      oldPrice: '₹699',
      rating: '4.6',
      image: images.kids2
    },

    {
      id: 11,
      name: 'Kids Gown',
      category: 'Kids',
      price: '₹799',
      oldPrice: '₹1199',
      rating: '4.9',
      image: images.kids3
    },

    {
      id: 12,
      name: 'Lower T-Shirt',
      category: 'Kids',
      price: '₹299',
      oldPrice: '₹499',
      rating: '4.5',
      image: images.kids4
    },

    // SHOES
    {
      id: 13,
      name: 'Running Shoes',
      category: 'Shoes',
      price: '₹399',
      oldPrice: '₹699',
      rating: '4.7',
      image: images.shoes1
    },

    {
      id: 14,
      name: 'Casual Sneakers',
      category: 'Shoes',
      price: '₹299',
      oldPrice: '₹499',
      rating: '4.6',
      image: images.shoes2
    },

    {
      id: 15,
      name: 'Formal Shoes',
      category: 'Shoes',
      price: '₹699',
      oldPrice: '₹999',
      rating: '4.8',
      image: images.shoes3
    },

    {
      id: 16,
      name: 'Sports Shoes',
      category: 'Shoes',
      price: '₹899',
      oldPrice: '₹1299',
      rating: '4.9',
      image: images.shoes4
    }

  ]

  // =========================
  // SEARCH FILTER
  // =========================

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    product.category
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  // =========================
  // WISHLIST
  // =========================

  const toggleWishlist = (id) => {

    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )

  }

  return (

    <section className="min-h-screen bg-gray-50 py-16">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* =========================
            HEADING
        ========================= */}

        <div className="text-center mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Find Your Style
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900">
            Search Products
          </h1>

          <p className="text-gray-500 mt-3">
            Search for your favourite fashion products
          </p>

        </div>


        {/* =========================
            SEARCH BOX
        ========================= */}

        <div className="max-w-2xl mx-auto mb-14">

          <div className="relative">

            <SearchIcon
              size={22}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search dresses, shoes, shirts..."
              className="
                w-full
                bg-white
                border
                border-gray-200
                rounded-full
                py-4
                pl-14
                pr-14
                outline-none
                focus:ring-2
                focus:ring-gray-900
                shadow-sm
              "
            />

            {search && (

              <button
                type="button"
                onClick={() => setSearch('')}
                className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                  hover:text-gray-900
                "
              >
                <X size={20} />
              </button>

            )}

          </div>

        </div>


        {/* =========================
            RESULTS
        ========================= */}

        {search && (

          <div className="mb-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Search Results
            </h2>

            <p className="text-gray-500 mt-1">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 ? 's' : ''} found
            </p>

          </div>

        )}


        {/* =========================
            PRODUCT GRID
        ========================= */}

        {search && filteredProducts.length > 0 ? (

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >

                {/* IMAGE */}

                <div className="
                  relative
                  h-72
                  bg-gray-100
                  overflow-hidden
                ">

                  {/* WISHLIST */}

                  <button
                    type="button"
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    className="
                      absolute
                      top-4
                      right-4
                      z-10
                      w-10
                      h-10
                      rounded-full
                      bg-white/90
                      flex
                      items-center
                      justify-center
                      shadow-sm
                      hover:scale-110
                      transition
                    "
                  >

                    <Heart
                      size={19}
                      className={
                        wishlist.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-700'
                      }
                    />

                  </button>


                  {/* IMAGE */}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-full
                      h-full
                      object-contain
                      p-6
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                </div>


                {/* DETAILS */}

                <div className="p-5">

                  <div className="
                    flex
                    items-center
                    justify-between
                    gap-2
                    mb-2
                  ">

                    <div>

                      <p className="text-xs text-gray-500 mb-1">
                        {product.category}
                      </p>

                      <h3 className="font-bold text-gray-900">
                        {product.name}
                      </h3>

                    </div>


                    {/* RATING */}

                    <span className="
                      flex
                      items-center
                      gap-1
                      text-xs
                      bg-green-50
                      text-green-700
                      px-2
                      py-1
                      rounded-md
                      font-semibold
                    ">

                      <Star
                        size={12}
                        className="fill-green-600"
                      />

                      {product.rating}

                    </span>

                  </div>


                  {/* PRICE */}

                  <div className="
                    flex
                    items-center
                    gap-2
                    mb-4
                  ">

                    <span className="
                      text-lg
                      font-black
                      text-gray-900
                    ">
                      {product.price}
                    </span>

                    <span className="
                      text-sm
                      text-gray-400
                      line-through
                    ">
                      {product.oldPrice}
                    </span>

                  </div>


                  {/* CART */}

                  <button
                    type="button"
                    className="
                      w-full
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

        ) : search ? (

          /* NO RESULTS */

          <div className="
            text-center
            py-20
            bg-white
            rounded-3xl
          ">

            <SearchIcon
              size={50}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Try searching for dresses, shoes, shirts or jackets.
            </p>

          </div>

        ) : (

          /* BEFORE SEARCH */

          <div className="
            text-center
            py-16
          ">

            <SearchIcon
              size={45}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="
              text-2xl
              font-bold
              text-gray-800
            ">
              What are you looking for?
            </h2>

            <p className="text-gray-500 mt-2">
              Start typing to find products.
            </p>

          </div>

        )}

      </div>

    </section>
  )
}

export default Search