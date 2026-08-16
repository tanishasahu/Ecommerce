import React, { useMemo, useState } from 'react'

import {
  Search,
  Heart,
  ShoppingBag,
  Star,
  SlidersHorizontal,
  X,
  ChevronDown
} from 'lucide-react'

import { useCart } from '../Context/CartContext'

import women3 from '../assets/women3.png'
import men3 from '../assets/men3.png'
import women2 from '../assets/women2.png'
import men4 from '../assets/men4.png'
import shoes1 from '../assets/shoes1.png'
import shirts2 from '../assets/shirts2.png'
import kids3 from '../assets/kids3.png'

const ProductsPage = () => {

  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState('')

  const [category, setCategory] = useState('All')

  const [price, setPrice] = useState('All')

  const [color, setColor] = useState('All')

  const [rating, setRating] = useState('All')

  const [sortBy, setSortBy] = useState('featured')

  const [liked, setLiked] = useState({})

  const [mobileFilter, setMobileFilter] = useState(false)

  const { addToCart } = useCart()


  // =========================
  // PRODUCTS
  // =========================

  const products = [

    {
      id: 1,
      name: 'T-Shirt Shorts',
      price: '₹299',
      numericPrice: 299,
      oldPrice: '₹399',
      discount: '25% OFF',
      rating: 4.8,
      image: women3,
      Category: 'Women',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 2,
      name: 'Classic Jacket',
      price: '₹799',
      numericPrice: 799,
      oldPrice: '₹899',
      discount: '11% OFF',
      rating: 4.7,
      image: men3,
      Category: 'Men',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 3,
      name: 'Floral Dress',
      price: '₹399',
      numericPrice: 399,
      oldPrice: '₹499',
      discount: '20% OFF',
      rating: 4.9,
      image: women2,
      Category: 'Women',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 4,
      name: 'Casual T-Shirt',
      price: '₹199',
      numericPrice: 199,
      oldPrice: '₹299',
      discount: '33% OFF',
      rating: 4.6,
      image: men4,
      Category: 'Men',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 5,
      name: 'Running Shoes',
      price: '₹299',
      numericPrice: 299,
      oldPrice: '₹399',
      discount: '25% OFF',
      rating: 4.8,
      image: shoes1,
      Category: 'Shoes',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 6,
      name: 'Casual Shirt',
      price: '₹259',
      numericPrice: 259,
      oldPrice: '₹399',
      discount: '35% OFF',
      rating: 4.7,
      image: shirts2,
      Category: 'Men',
      colors: ['black', 'blue', 'brown']
    },

    {
      id: 7,
      name: 'Kids Gown',
      price: '₹699',
      numericPrice: 699,
      oldPrice: '₹799',
      discount: '12% OFF',
      rating: 4.9,
      image: kids3,
      Category: 'Kids',
      colors: ['black', 'blue', 'brown']
    }

  ]


  // =========================
  // FILTER + SORT
  // =========================

  const filteredProducts = useMemo(() => {

    let result = products.filter((product) => {

      // Search
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.Category
          .toLowerCase()
          .includes(search.toLowerCase())


      // Category
      const matchesCategory =
        category === 'All' ||
        product.Category === category


      // Price
      let matchesPrice = true

      if (price === 'under300') {
        matchesPrice = product.numericPrice < 300
      }

      if (price === '300-500') {
        matchesPrice =
          product.numericPrice >= 300 &&
          product.numericPrice <= 500
      }

      if (price === '500-800') {
        matchesPrice =
          product.numericPrice > 500 &&
          product.numericPrice <= 800
      }


      // Color
      const matchesColor =
        color === 'All' ||
        product.colors.includes(color)


      // Rating
      let matchesRating = true

      if (rating === '4+') {
        matchesRating = product.rating >= 4
      }

      if (rating === '4.5+') {
        matchesRating = product.rating >= 4.5
      }

      if (rating === '4.8+') {
        matchesRating = product.rating >= 4.8
      }


      return (
        matchesSearch &&
        matchesCategory &&
        matchesPrice &&
        matchesColor &&
        matchesRating
      )

    })


    // Sorting

    if (sortBy === 'priceLow') {

      result.sort(
        (a, b) =>
          a.numericPrice - b.numericPrice
      )

    }

    if (sortBy === 'priceHigh') {

      result.sort(
        (a, b) =>
          b.numericPrice - a.numericPrice
      )

    }

    if (sortBy === 'rating') {

      result.sort(
        (a, b) =>
          b.rating - a.rating
      )

    }

    if (sortBy === 'name') {

      result.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      )

    }


    return result

  }, [
    search,
    category,
    price,
    color,
    rating,
    sortBy
  ])


  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {

    setSearch('')
    setCategory('All')
    setPrice('All')
    setColor('All')
    setRating('All')
    setSortBy('featured')

  }


  // =========================
  // WISHLIST
  // =========================

  const toggleLike = (id) => {

    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))

  }


  // =========================
  // COLOR CLASSES
  // =========================

  const colorClasses = {

    black: 'bg-black',

    blue: 'bg-blue-400',

    brown: 'bg-amber-700'

  }


  return (

    <main className="min-h-screen bg-[#f7f5f2]">


      {/* =========================
          PAGE HEADER
      ========================= */}

      <section className="bg-[#eee9e3] py-14 md:py-20">

        <div className="container mx-auto px-4 md:px-8 lg:px-16">

          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gray-500 mb-4">
            Home / Shop
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900">
            Shop All
          </h1>

          <p className="text-gray-600 mt-4 max-w-xl">
            Discover our latest fashion collection,
            designed for every style and every occasion.
          </p>

        </div>

      </section>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className="py-10 md:py-14">

        <div className="container mx-auto px-4 md:px-8 lg:px-16">


          {/* SEARCH + MOBILE FILTER */}

          <div className="flex flex-col lg:flex-row gap-4 mb-8">

            {/* SEARCH */}

            <div className="relative flex-1">

              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search products..."
                className="w-full bg-white border border-gray-200
                rounded-xl py-3.5 pl-12 pr-4
                outline-none focus:border-gray-900
                transition"
              />

            </div>


            {/* MOBILE FILTER */}

            <button
              type="button"
              onClick={() =>
                setMobileFilter(true)
              }
              className="lg:hidden flex items-center
              justify-center gap-2 bg-gray-900
              text-white px-5 py-3.5 rounded-xl
              font-semibold"
            >

              <SlidersHorizontal size={18} />

              Filters

            </button>

          </div>


          {/* =========================
              CONTENT GRID
          ========================= */}

          <div className="grid lg:grid-cols-[250px_1fr] gap-8">


            {/* =========================
                DESKTOP FILTER
            ========================= */}

            <aside className="hidden lg:block">

              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-6">


                {/* FILTER HEADER */}

                <div className="flex items-center justify-between mb-6">

                  <h2 className="font-bold text-lg">
                    Filters
                  </h2>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-gray-500
                    hover:text-gray-900"
                  >
                    Clear All
                  </button>

                </div>


                {/* CATEGORY */}

                <div className="pb-6 border-b border-gray-100">

                  <h3 className="font-semibold mb-4">
                    Category
                  </h3>

                  <div className="space-y-3">

                    {[
                      'All',
                      'Women',
                      'Men',
                      'Kids',
                      'Shoes'
                    ].map((item) => (

                      <label
                        key={item}
                        className="flex items-center gap-3
                        text-sm cursor-pointer"
                      >

                        <input
                          type="radio"
                          name="category"
                          checked={
                            category === item
                          }
                          onChange={() =>
                            setCategory(item)
                          }
                          className="accent-gray-900"
                        />

                        <span
                          className={
                            category === item
                              ? 'font-semibold text-gray-900'
                              : 'text-gray-600'
                          }
                        >
                          {item}
                        </span>

                      </label>

                    ))}

                  </div>

                </div>


                {/* PRICE */}

                <div className="py-6 border-b border-gray-100">

                  <h3 className="font-semibold mb-4">
                    Price
                  </h3>

                  <div className="space-y-3">

                    {[
                      ['All', 'All Prices'],
                      ['under300', 'Under ₹300'],
                      ['300-500', '₹300 - ₹500'],
                      ['500-800', '₹500 - ₹800']
                    ].map(([value, label]) => (

                      <label
                        key={value}
                        className="flex items-center gap-3
                        text-sm cursor-pointer"
                      >

                        <input
                          type="radio"
                          name="price"
                          checked={price === value}
                          onChange={() =>
                            setPrice(value)
                          }
                          className="accent-gray-900"
                        />

                        <span>{label}</span>

                      </label>

                    ))}

                  </div>

                </div>


                {/* COLOR */}

                <div className="py-6 border-b border-gray-100">

                  <h3 className="font-semibold mb-4">
                    Color
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {[
                      'All',
                      'black',
                      'blue',
                      'brown'
                    ].map((item) => (

                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setColor(item)
                        }
                        className={
                          item === 'All'
                            ? `px-3 py-1.5 rounded-full
                              text-xs font-semibold
                              border ${
                                color === 'All'
                                  ? 'bg-gray-900 text-white'
                                  : 'border-gray-200'
                              }`
                            : `w-7 h-7 rounded-full
                              ${colorClasses[item]}
                              border-2 ${
                                color === item
                                  ? 'border-gray-900 scale-110'
                                  : 'border-white ring-1 ring-gray-200'
                              }`
                        }
                        title={item}
                      >
                        {item === 'All' && 'All'}
                      </button>

                    ))}

                  </div>

                </div>


                {/* RATING */}

                <div className="py-6">

                  <h3 className="font-semibold mb-4">
                    Rating
                  </h3>

                  <div className="space-y-3">

                    {[
                      ['All', 'All Ratings'],
                      ['4+', '4.0 & above'],
                      ['4.5+', '4.5 & above'],
                      ['4.8+', '4.8 & above']
                    ].map(([value, label]) => (

                      <label
                        key={value}
                        className="flex items-center gap-3
                        text-sm cursor-pointer"
                      >

                        <input
                          type="radio"
                          name="rating"
                          checked={rating === value}
                          onChange={() =>
                            setRating(value)
                          }
                          className="accent-gray-900"
                        />

                        <span>{label}</span>

                      </label>

                    ))}

                  </div>

                </div>


                {/* CLEAR BUTTON */}

                <button
                  type="button"
                  onClick={clearFilters}
                  className="w-full bg-gray-900
                  text-white py-3 rounded-xl
                  font-semibold hover:bg-gray-700
                  transition"
                >
                  Reset Filters
                </button>

              </div>

            </aside>


            {/* =========================
                PRODUCTS AREA
            ========================= */}

            <div>


              {/* TOP BAR */}

              <div className="flex flex-col sm:flex-row
              sm:items-center sm:justify-between
              gap-4 mb-6">

                <div>

                  <p className="text-sm text-gray-500">
                    Showing
                    <span className="font-semibold text-gray-900 mx-1">
                      {filteredProducts.length}
                    </span>
                    products
                  </p>

                </div>


                {/* SORT */}

                <div className="relative">

                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value)
                    }
                    className="appearance-none
                    bg-white border border-gray-200
                    rounded-xl pl-4 pr-10 py-3
                    text-sm font-medium
                    outline-none cursor-pointer
                    focus:border-gray-900"
                  >

                    <option value="featured">
                      Sort: Featured
                    </option>

                    <option value="priceLow">
                      Price: Low to High
                    </option>

                    <option value="priceHigh">
                      Price: High to Low
                    </option>

                    <option value="rating">
                      Highest Rated
                    </option>

                    <option value="name">
                      Name: A-Z
                    </option>

                  </select>

                  <ChevronDown
                    size={16}
                    className="absolute right-3
                    top-1/2 -translate-y-1/2
                    pointer-events-none"
                  />

                </div>

              </div>


              {/* ACTIVE FILTERS */}

              {(category !== 'All' ||
                price !== 'All' ||
                color !== 'All' ||
                rating !== 'All' ||
                search) && (

                <div className="flex flex-wrap gap-2 mb-6">

                  {search && (
                    <button
                      type="button"
                      onClick={() => setSearch('')}
                      className="flex items-center gap-1
                      bg-white border border-gray-200
                      px-3 py-1.5 rounded-full
                      text-xs font-medium"
                    >
                      Search: {search}
                      <X size={13} />
                    </button>
                  )}

                  {category !== 'All' && (
                    <button
                      type="button"
                      onClick={() =>
                        setCategory('All')
                      }
                      className="flex items-center gap-1
                      bg-white border border-gray-200
                      px-3 py-1.5 rounded-full
                      text-xs font-medium"
                    >
                      {category}
                      <X size={13} />
                    </button>
                  )}

                  {price !== 'All' && (
                    <button
                      type="button"
                      onClick={() =>
                        setPrice('All')
                      }
                      className="flex items-center gap-1
                      bg-white border border-gray-200
                      px-3 py-1.5 rounded-full
                      text-xs font-medium"
                    >
                      Price
                      <X size={13} />
                    </button>
                  )}

                  {color !== 'All' && (
                    <button
                      type="button"
                      onClick={() =>
                        setColor('All')
                      }
                      className="flex items-center gap-1
                      bg-white border border-gray-200
                      px-3 py-1.5 rounded-full
                      text-xs font-medium"
                    >
                      {color}
                      <X size={13} />
                    </button>
                  )}

                  {rating !== 'All' && (
                    <button
                      type="button"
                      onClick={() =>
                        setRating('All')
                      }
                      className="flex items-center gap-1
                      bg-white border border-gray-200
                      px-3 py-1.5 rounded-full
                      text-xs font-medium"
                    >
                      {rating}
                      <X size={13} />
                    </button>
                  )}

                </div>

              )}


              {/* PRODUCTS GRID */}

              {filteredProducts.length > 0 ? (

                <div
                  className="grid grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-3 gap-6"
                >

                  {filteredProducts.map((product) => (

                    <div
                      key={product.id}
                      className="group bg-white
                      rounded-2xl overflow-hidden
                      border border-gray-200
                      hover:shadow-xl
                      transition-all duration-300"
                    >


                      {/* IMAGE */}

                      <div className="relative h-72 bg-gray-100">

                        <span
                          className="absolute top-4 left-4
                          z-10 bg-gray-900 text-white
                          text-xs font-bold px-3 py-1.5
                          rounded-full"
                        >
                          {product.discount}
                        </span>


                        {/* WISHLIST */}

                        <button
                          type="button"
                          onClick={() =>
                            toggleLike(product.id)
                          }
                          className="absolute top-4 right-4
                          z-10 w-10 h-10
                          rounded-full bg-white
                          flex items-center justify-center
                          shadow-sm hover:scale-110
                          transition"
                        >

                          <Heart
                            size={18}
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
                          className="w-full h-full
                          object-contain p-5
                          group-hover:scale-105
                          transition-transform duration-500"
                        />

                      </div>


                      {/* DETAILS */}

                      <div className="p-5">


                        <div className="flex items-start
                        justify-between gap-3">

                          <div>

                            <p className="text-xs
                            text-gray-500 mb-1">
                              {product.Category}
                            </p>

                            <h3 className="font-bold
                            text-gray-900">
                              {product.name}
                            </h3>

                          </div>


                          {/* RATING */}

                          <div
                            className="flex items-center gap-1
                            bg-green-50 text-green-700
                            px-2 py-1 rounded-md
                            flex-shrink-0"
                          >

                            <Star
                              size={12}
                              className="fill-green-600"
                            />

                            <span className="text-xs font-bold">
                              {product.rating}
                            </span>

                          </div>

                        </div>


                        {/* PRICE */}

                        <div className="flex items-center gap-2 mt-3">

                          <span className="text-lg font-black">
                            {product.price}
                          </span>

                          <span
                            className="text-sm text-gray-400
                            line-through"
                          >
                            {product.oldPrice}
                          </span>

                        </div>


                        {/* COLORS */}

                        <div className="flex items-center
                        gap-2 mt-4">

                          <span className="text-xs text-gray-500">
                            Colors:
                          </span>

                          {product.colors.map((item) => (

                            <span
                              key={item}
                              className={`w-4 h-4 rounded-full
                              ${colorClasses[item]}
                              ring-1 ring-gray-200`}
                            />

                          ))}

                        </div>


                        {/* ADD TO CART */}

                        <button
                          type="button"
                          onClick={() =>
                            addToCart(product)
                          }
                          className="w-full mt-5
                          bg-gray-900 text-white
                          py-3 rounded-xl
                          font-semibold
                          flex items-center
                          justify-center gap-2
                          hover:bg-gray-700
                          active:scale-95
                          transition-all"
                        >

                          <ShoppingBag size={17} />

                          Add to Cart

                        </button>

                      </div>

                    </div>

                  ))}

                </div>

              ) : (

                /* NO PRODUCTS */

                <div
                  className="bg-white rounded-2xl
                  p-12 text-center"
                >

                  <div className="text-5xl mb-5">
                    🛍️
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900">
                    No products found
                  </h2>

                  <p className="text-gray-500 mt-2 mb-6">
                    Try changing your search or filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="bg-gray-900
                    text-white px-6 py-3
                    rounded-full font-semibold
                    hover:bg-gray-700"
                  >
                    Clear Filters
                  </button>

                </div>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MOBILE FILTER DRAWER
      ========================= */}

      {mobileFilter && (

        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* OVERLAY */}

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() =>
              setMobileFilter(false)
            }
          />


          {/* DRAWER */}

          <div
            className="absolute right-0 top-0
            h-full w-[85%] max-w-sm
            bg-white p-6 overflow-y-auto"
          >

            <div className="flex items-center
            justify-between mb-8">

              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                type="button"
                onClick={() =>
                  setMobileFilter(false)
                }
                className="w-9 h-9 rounded-full
                bg-gray-100 flex items-center
                justify-center"
              >

                <X size={19} />

              </button>

            </div>


            {/* CATEGORY */}

            <div className="pb-6 border-b">

              <h3 className="font-semibold mb-4">
                Category
              </h3>

              <div className="space-y-3">

                {[
                  'All',
                  'Women',
                  'Men',
                  'Kids',
                  'Shoes'
                ].map((item) => (

                  <label
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name="mobileCategory"
                      checked={
                        category === item
                      }
                      onChange={() =>
                        setCategory(item)
                      }
                      className="accent-gray-900"
                    />

                    <span>{item}</span>

                  </label>

                ))}

              </div>

            </div>


            {/* PRICE */}

            <div className="py-6 border-b">

              <h3 className="font-semibold mb-4">
                Price
              </h3>

              <div className="space-y-3">

                {[
                  ['All', 'All Prices'],
                  ['under300', 'Under ₹300'],
                  ['300-500', '₹300 - ₹500'],
                  ['500-800', '₹500 - ₹800']
                ].map(([value, label]) => (

                  <label
                    key={value}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name="mobilePrice"
                      checked={price === value}
                      onChange={() =>
                        setPrice(value)
                      }
                      className="accent-gray-900"
                    />

                    <span>{label}</span>

                  </label>

                ))}

              </div>

            </div>


            {/* RATING */}

            <div className="py-6">

              <h3 className="font-semibold mb-4">
                Rating
              </h3>

              <div className="space-y-3">

                {[
                  ['All', 'All Ratings'],
                  ['4+', '4.0 & above'],
                  ['4.5+', '4.5 & above'],
                  ['4.8+', '4.8 & above']
                ].map(([value, label]) => (

                  <label
                    key={value}
                    className="flex items-center gap-3"
                  >

                    <input
                      type="radio"
                      name="mobileRating"
                      checked={rating === value}
                      onChange={() =>
                        setRating(value)
                      }
                      className="accent-gray-900"
                    />

                    <span>{label}</span>

                  </label>

                ))}

              </div>

            </div>


            {/* BUTTONS */}

            <button
              type="button"
              onClick={clearFilters}
              className="w-full border border-gray-300
              py-3 rounded-xl font-semibold mb-3"
            >
              Clear Filters
            </button>

            <button
              type="button"
              onClick={() =>
                setMobileFilter(false)
              }
              className="w-full bg-gray-900
              text-white py-3 rounded-xl
              font-semibold"
            >
              Show {filteredProducts.length} Products
            </button>

          </div>

        </div>

      )}

    </main>

  )
}

export default ProductsPage