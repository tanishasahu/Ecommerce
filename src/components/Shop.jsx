import React, { useState } from 'react'
import {
  Heart,
  ShoppingBag,
  Search,
  SlidersHorizontal
} from 'lucide-react'

import { images } from '../assets/images'
import { useCart } from '../Context/CartContext'

const Shop = () => {

  const { addToCart } = useCart()

  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [wishlist, setWishlist] = useState([])

  const categories = [
    'All',
    'Women',
    'Men',
    'Kids',
    'Shoes',
    'Pants',
    'Shirts'
  ]

  const products = [
    {
      id: 1,
      name: 'Summer Top',
      category: 'Women',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      rating: '4.8',
      image: images.women1
    },
    {
      id: 2,
      name: 'Floral Dress',
      category: 'Women',
      price: '₹499',
      oldPrice: '₹799',
      discount: '38% OFF',
      rating: '4.7',
      image: images.women2
    },
    {
      id: 3,
      name: 'T-Shirt Shorts',
      category: 'Women',
      price: '₹399',
      oldPrice: '₹599',
      discount: '33% OFF',
      rating: '4.6',
      image: images.women3
    },
    {
      id: 4,
      name: 'Stylish Jacket',
      category: 'Women',
      price: '₹1299',
      oldPrice: '₹1799',
      discount: '28% OFF',
      rating: '4.9',
      image: images.women4
    },

    {
      id: 5,
      name: 'Summer Wear',
      category: 'Men',
      price: '₹399',
      oldPrice: '₹599',
      discount: '33% OFF',
      rating: '4.6',
      image: images.men1
    },
    {
      id: 6,
      name: 'Half Sleeves T-Shirt',
      category: 'Men',
      price: '₹199',
      oldPrice: '₹399',
      discount: '50% OFF',
      rating: '4.5',
      image: images.men2
    },
    {
      id: 7,
      name: 'Classic Blazer',
      category: 'Men',
      price: '₹999',
      oldPrice: '₹1499',
      discount: '33% OFF',
      rating: '4.8',
      image: images.men3
    },
    {
      id: 8,
      name: 'Casual T-Shirt',
      category: 'Men',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      rating: '4.7',
      image: images.men4
    },

    {
      id: 9,
      name: 'Wedding Dress',
      category: 'Kids',
      price: '₹599',
      oldPrice: '₹899',
      discount: '33% OFF',
      rating: '4.8',
      image: images.kids1
    },
    {
      id: 10,
      name: 'Kids Set',
      category: 'Kids',
      price: '₹499',
      oldPrice: '₹699',
      discount: '29% OFF',
      rating: '4.6',
      image: images.kids2
    },
    {
      id: 11,
      name: 'Kids Gown',
      category: 'Kids',
      price: '₹799',
      oldPrice: '₹1199',
      discount: '33% OFF',
      rating: '4.9',
      image: images.kids3
    },
    {
      id: 12,
      name: 'Lower T-Shirt',
      category: 'Kids',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      rating: '4.5',
      image: images.kids4
    },

    {
      id: 13,
      name: 'Running Shoes',
      category: 'Shoes',
      price: '₹399',
      oldPrice: '₹699',
      discount: '43% OFF',
      rating: '4.7',
      image: images.shoes1
    },
    {
      id: 14,
      name: 'Casual Sneakers',
      category: 'Shoes',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      rating: '4.6',
      image: images.shoes2
    },
    {
      id: 15,
      name: 'Formal Shoes',
      category: 'Shoes',
      price: '₹699',
      oldPrice: '₹999',
      discount: '30% OFF',
      rating: '4.8',
      image: images.shoes3
    },
    {
      id: 16,
      name: 'Sports Shoes',
      category: 'Shoes',
      price: '₹899',
      oldPrice: '₹1299',
      discount: '31% OFF',
      rating: '4.9',
      image: images.shoes4
    },

    {
      id: 17,
      name: 'Formal Jeans',
      category: 'Pants',
      price: '₹499',
      oldPrice: '₹799',
      discount: '38% OFF',
      rating: '4.7',
      image: images.pants1
    },
    {
      id: 18,
      name: 'Cargo Pants',
      category: 'Pants',
      price: '₹699',
      oldPrice: '₹999',
      discount: '30% OFF',
      rating: '4.8',
      image: images.pants2
    },
    {
      id: 19,
      name: 'Joggers',
      category: 'Pants',
      price: '₹399',
      oldPrice: '₹599',
      discount: '33% OFF',
      rating: '4.6',
      image: images.pants3
    },
    {
      id: 20,
      name: 'Denim Jeans',
      category: 'Pants',
      price: '₹799',
      oldPrice: '₹1199',
      discount: '33% OFF',
      rating: '4.9',
      image: images.pants4
    },

    {
      id: 21,
      name: 'Stylish Shirt',
      category: 'Shirts',
      price: '₹599',
      oldPrice: '₹899',
      discount: '33% OFF',
      rating: '4.8',
      image: images.shirts1
    },
    {
      id: 22,
      name: 'Casual Shirt',
      category: 'Shirts',
      price: '₹399',
      oldPrice: '₹599',
      discount: '33% OFF',
      rating: '4.7',
      image: images.shirts2
    },
    {
      id: 23,
      name: 'Classic T-Shirt',
      category: 'Shirts',
      price: '₹199',
      oldPrice: '₹399',
      discount: '50% OFF',
      rating: '4.6',
      image: images.shirts3
    },
    {
      id: 24,
      name: 'Formal Shirt',
      category: 'Shirts',
      price: '₹299',
      oldPrice: '₹499',
      discount: '40% OFF',
      rating: '4.8',
      image: images.shirts4
    }
  ]

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      category === 'All' ||
      product.category === category

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

    return categoryMatch && searchMatch
  })

  return (
    <section className="min-h-screen bg-gray-50">

      {/* HERO */}

      <div className="bg-gray-900 text-white">

        <div className="
          container
          mx-auto
          px-4
          md:px-8
          lg:px-16
          py-20
        ">

          <p className="
            text-sm
            uppercase
            tracking-[0.35em]
            text-gray-400
            mb-4
          ">
            Our Store
          </p>

          <h1 className="
            text-4xl
            md:text-6xl
            font-black
            mb-5
          ">
            Shop All Products
          </h1>

          <p className="
            text-gray-400
            max-w-xl
            text-lg
          ">
            Discover the latest fashion styles,
            trending collections and amazing deals.
          </p>

        </div>

      </div>


      {/* SHOP CONTENT */}

      <div className="
        container
        mx-auto
        px-4
        md:px-8
        lg:px-16
        py-12
      ">

        {/* SEARCH */}

        <div className="
          flex
          flex-col
          lg:flex-row
          gap-5
          justify-between
          mb-10
        ">

          <div className="
            relative
            w-full
            lg:w-[400px]
          ">

            <Search
              size={20}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search products..."
              className="
                w-full
                bg-white
                border
                border-gray-200
                rounded-full
                py-4
                pl-12
                pr-5
                outline-none
                focus:border-gray-900
                transition
              "
            />

          </div>


          <button
            type="button"
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-white
              border
              border-gray-200
              px-6
              py-3
              rounded-full
              font-semibold
              hover:bg-gray-900
              hover:text-white
              transition
            "
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

        </div>


        {/* CATEGORY */}

        <div className="
          flex
          flex-wrap
          gap-3
          mb-10
        ">

          {categories.map((item) => (

            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`
                px-6
                py-2.5
                rounded-full
                font-semibold
                border
                transition-all
                duration-300
                ${
                  category === item
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900'
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>


        {/* RESULT COUNT */}

        <div className="mb-7">

          <p className="text-gray-500">

            Showing{' '}

            <span className="
              font-bold
              text-gray-900
            ">
              {filteredProducts.length}
            </span>

            {' '}products

          </p>

        </div>


        {/* PRODUCT GRID */}

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
                border
                border-gray-100
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

                <span className="
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
                ">
                  {product.discount}
                </span>


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
                    z-20
                    w-10
                    h-10
                    rounded-full
                    bg-white/95
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
                      wishlist.includes(product.id)
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
                    p-6
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

              </div>


              {/* DETAILS */}

              <div className="p-5">

                <p className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-400
                  mb-2
                ">
                  {product.category}
                </p>


                <div className="
                  flex
                  items-start
                  justify-between
                  gap-2
                ">

                  <h3 className="
                    font-bold
                    text-gray-900
                    text-lg
                  ">
                    {product.name}
                  </h3>

                  <span className="
                    text-xs
                    bg-green-50
                    text-green-700
                    px-2
                    py-1
                    rounded-md
                    font-bold
                    whitespace-nowrap
                  ">
                    ★ {product.rating}
                  </span>

                </div>


                {/* PRICE */}

                <div className="
                  flex
                  items-center
                  gap-2
                  mt-3
                ">

                  <span className="
                    text-xl
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
                    transition-all
                  "
                >

                  <ShoppingBag size={18} />

                  Add to Cart

                </button>

              </div>

            </div>

          ))}

        </div>


        {/* NO PRODUCTS */}

        {filteredProducts.length === 0 && (

          <div className="
            text-center
            py-24
          ">

            <h2 className="
              text-2xl
              font-bold
              text-gray-900
            ">
              No Products Found
            </h2>

            <p className="
              text-gray-500
              mt-2
            ">
              Try another search or category.
            </p>

          </div>

        )}

      </div>

    </section>
  )
}

export default Shop