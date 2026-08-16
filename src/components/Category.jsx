
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Check
} from 'lucide-react'
import { images } from '../assets/images'
import { useCart } from '../Context/CartContext'

const Category = () => {
  const [activeTab, setActiveTab] = useState('women')
  const [wishlist, setWishlist] = useState([])
  const [addedProduct, setAddedProduct] = useState(null)
  const [quickView, setQuickView] = useState(null)

  const { addToCart } = useCart()

  const tabs = [
    {
      id: 'women',
      name: 'Women',
      image: images.women4
    },
    {
      id: 'men',
      name: 'Men',
      image: images.men4
    },
    {
      id: 'kids',
      name: 'Kids',
      image: images.kids4
    },
    {
      id: 'shoes',
      name: 'Shoes',
      image: images.shoes4
    },
    {
      id: 'pants',
      name: 'Pants',
      image: images.pants4
    },
    {
      id: 'shirts',
      name: 'Shirts',
      image: images.shirts4
    }
  ]

  const products = {
    women: [
      {
        id: 'women-1',
        name: 'Summer Top',
        price: 299,
        oldPrice: 499,
        discount: '40% OFF',
        rating: '4.8',
        image: images.women1
      },
      {
        id: 'women-2',
        name: 'Floral Dress',
        price: 499,
        oldPrice: 799,
        discount: '38% OFF',
        rating: '4.7',
        image: images.women2
      },
      {
        id: 'women-3',
        name: 'T-Shirt Shorts',
        price: 399,
        oldPrice: 599,
        discount: '33% OFF',
        rating: '4.6',
        image: images.women3
      },
      {
        id: 'women-4',
        name: 'Stylish Jacket',
        price: 1299,
        oldPrice: 1799,
        discount: '28% OFF',
        rating: '4.9',
        image: images.women4
      }
    ],

    men: [
      {
        id: 'men-1',
        name: 'Summer Wear',
        price: 399,
        oldPrice: 599,
        discount: '33% OFF',
        rating: '4.6',
        image: images.men1
      },
      {
        id: 'men-2',
        name: 'Half Sleeves T-Shirt',
        price: 199,
        oldPrice: 399,
        discount: '50% OFF',
        rating: '4.5',
        image: images.men2
      },
      {
        id: 'men-3',
        name: 'Classic Blazer',
        price: 999,
        oldPrice: 1499,
        discount: '33% OFF',
        rating: '4.8',
        image: images.men3
      },
      {
        id: 'men-4',
        name: 'Casual T-Shirt',
        price: 299,
        oldPrice: 499,
        discount: '40% OFF',
        rating: '4.7',
        image: images.men4
      }
    ],

    kids: [
      {
        id: 'kids-1',
        name: 'Wedding Dress',
        price: 599,
        oldPrice: 899,
        discount: '33% OFF',
        rating: '4.8',
        image: images.kids1
      },
      {
        id: 'kids-2',
        name: 'Kids Set',
        price: 499,
        oldPrice: 699,
        discount: '29% OFF',
        rating: '4.6',
        image: images.kids2
      },
      {
        id: 'kids-3',
        name: 'Kids Gown',
        price: 799,
        oldPrice: 1199,
        discount: '33% OFF',
        rating: '4.9',
        image: images.kids3
      },
      {
        id: 'kids-4',
        name: 'Lower T-Shirt',
        price: 299,
        oldPrice: 499,
        discount: '40% OFF',
        rating: '4.5',
        image: images.kids4
      }
    ],

    shoes: [
      {
        id: 'shoes-1',
        name: 'Running Shoes',
        price: 399,
        oldPrice: 699,
        discount: '43% OFF',
        rating: '4.7',
        image: images.shoes1
      },
      {
        id: 'shoes-2',
        name: 'Casual Sneakers',
        price: 299,
        oldPrice: 499,
        discount: '40% OFF',
        rating: '4.6',
        image: images.shoes2
      },
      {
        id: 'shoes-3',
        name: 'Formal Shoes',
        price: 699,
        oldPrice: 999,
        discount: '30% OFF',
        rating: '4.8',
        image: images.shoes3
      },
      {
        id: 'shoes-4',
        name: 'Sports Shoes',
        price: 899,
        oldPrice: 1299,
        discount: '31% OFF',
        rating: '4.9',
        image: images.shoes4
      }
    ],

    pants: [
      {
        id: 'pants-1',
        name: 'Formal Jeans',
        price: 499,
        oldPrice: 799,
        discount: '38% OFF',
        rating: '4.7',
        image: images.pants1
      },
      {
        id: 'pants-2',
        name: 'Cargo Pants',
        price: 699,
        oldPrice: 999,
        discount: '30% OFF',
        rating: '4.8',
        image: images.pants2
      },
      {
        id: 'pants-3',
        name: 'Joggers',
        price: 399,
        oldPrice: 599,
        discount: '33% OFF',
        rating: '4.6',
        image: images.pants3
      },
      {
        id: 'pants-4',
        name: 'Denim Jeans',
        price: 799,
        oldPrice: 1199,
        discount: '33% OFF',
        rating: '4.9',
        image: images.pants4
      }
    ],

    shirts: [
      {
        id: 'shirts-1',
        name: 'Stylish Shirt',
        price: 599,
        oldPrice: 899,
        discount: '33% OFF',
        rating: '4.8',
        image: images.shirts1
      },
      {
        id: 'shirts-2',
        name: 'Casual Shirt',
        price: 399,
        oldPrice: 599,
        discount: '33% OFF',
        rating: '4.7',
        image: images.shirts2
      },
      {
        id: 'shirts-3',
        name: 'Classic T-Shirt',
        price: 199,
        oldPrice: 399,
        discount: '50% OFF',
        rating: '4.6',
        image: images.shirts3
      },
      {
        id: 'shirts-4',
        name: 'Formal Shirt',
        price: 299,
        oldPrice: 499,
        discount: '40% OFF',
        rating: '4.8',
        image: images.shirts4
      }
    ]
  }

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const handleAddToCart = (product) => {
    const cartProduct = {
      ...product,
      category: activeTab,
      quantity: 1
    }

    addToCart(cartProduct)

    setAddedProduct(product.id)

    setTimeout(() => {
      setAddedProduct(null)
    }, 1800)
  }

  return (
    <section
      className="py-20 md:py-24 bg-gray-50 overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* HEADER */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Explore Fashion
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Shop by Category
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover stylish pieces for every occasion and every mood.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14"
          data-aos="fade-up"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`
                group flex items-center gap-3
                px-4 py-2.5 rounded-full
                transition-all duration-300
                border
                hover:-translate-y-1
                ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white border-gray-900 shadow-xl scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-900 hover:shadow-md'
                }
              `}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={tab.image}
                  alt={tab.name}
                  className="
                    w-full h-full object-contain
                    group-hover:scale-110
                    transition-transform duration-300
                  "
                />
              </div>

              <span className="text-sm font-semibold">
                {tab.name}
              </span>
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products[activeTab]?.map((product, index) => (

            <div
              key={product.id}
              className="
                group bg-white rounded-3xl overflow-hidden
                shadow-sm hover:shadow-2xl
                hover:-translate-y-2
                transition-all duration-500
              "
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >

              {/* IMAGE */}
              <div className="relative h-72 bg-gray-100 overflow-hidden">

                {/* DISCOUNT */}
                <span
                  className="
                    absolute top-4 left-4 z-10
                    bg-gray-900 text-white
                    text-xs font-bold
                    px-3 py-1.5 rounded-full
                  "
                >
                  {product.discount}
                </span>

                {/* WISHLIST */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className="
                    absolute top-4 right-4 z-20
                    w-10 h-10 rounded-full
                    bg-white/90 backdrop-blur-sm
                    flex items-center justify-center
                    shadow-sm
                    hover:scale-110
                    active:scale-90
                    transition-all duration-300
                  "
                >
                  <Heart
                    size={19}
                    className={`
                      transition-all duration-300
                      ${
                        wishlist.includes(product.id)
                          ? 'fill-red-500 text-red-500 scale-110'
                          : 'text-gray-700'
                      }
                    `}
                  />
                </button>

                {/* PRODUCT IMAGE */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full h-full object-contain p-6
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* QUICK VIEW */}
                <div
                  className="
                    absolute inset-x-0 bottom-0
                    flex justify-center pb-5
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-300
                  "
                >
                  <button
                    type="button"
                    onClick={() => setQuickView(product)}
                    className="
                      bg-white text-gray-900
                      px-5 py-2.5 rounded-full
                      text-sm font-bold shadow-lg
                      flex items-center gap-2
                      hover:bg-gray-900
                      hover:text-white
                      transition-colors
                    "
                  >
                    Quick View
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>

              {/* DETAILS */}
              <div className="p-5">

                <div className="flex items-center justify-between mb-2">

                  <h3 className="font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <span
                    className="
                      text-xs bg-green-50
                      text-green-700 px-2 py-1
                      rounded-md font-semibold
                    "
                  >
                    ★ {product.rating}
                  </span>

                </div>

                {/* PRICE */}
                <div className="flex items-center gap-2 mb-4">

                  <span className="text-lg font-black text-gray-900">
                    ₹{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice}
                  </span>

                </div>

                {/* ADD TO CART */}
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className={`
                    w-full py-3 rounded-xl
                    font-semibold flex items-center
                    justify-center gap-2
                    active:scale-95
                    transition-all duration-300
                    ${
                      addedProduct === product.id
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-900 text-white hover:bg-gray-700'
                    }
                  `}
                >

                  {addedProduct === product.id ? (
                    <>
                      <Check
                        size={18}
                        className="animate-bounce"
                      />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Cart
                    </>
                  )}

                </button>

              </div>

            </div>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="flex justify-center mt-12">

          <Link
            to="/shop"
            className="
              group flex items-center gap-2
              border-2 border-gray-900
              text-gray-900
              px-7 py-3 rounded-full
              font-bold
              hover:bg-gray-900
              hover:text-white
              hover:-translate-y-1
              active:scale-95
              transition-all duration-300
            "
          >
            View All Products

            <ArrowRight
              size={18}
              className="
                group-hover:translate-x-1
                transition-transform
              "
            />
          </Link>

        </div>

      </div>

      {/* QUICK VIEW MODAL */}
      {quickView && (
        <div
          className="
            fixed inset-0 z-50
            bg-black/60 backdrop-blur-sm
            flex items-center justify-center
            p-4
          "
          onClick={() => setQuickView(null)}
        >

          <div
            className="
              bg-white rounded-3xl
              max-w-lg w-full
              overflow-hidden
              shadow-2xl
              animate-[fadeIn_0.3s_ease-out]
            "
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative h-80 bg-gray-100">

              <button
                type="button"
                onClick={() => setQuickView(null)}
                className="
                  absolute top-4 right-4 z-10
                  w-10 h-10 rounded-full
                  bg-white shadow
                  hover:scale-110
                  transition-transform
                "
              >
                ✕
              </button>

              <img
                src={quickView.image}
                alt={quickView.name}
                className="w-full h-full object-contain p-8"
              />

            </div>

            <div className="p-6">

              <p className="text-sm text-gray-500 uppercase tracking-wider">
                {activeTab}
              </p>

              <h2 className="text-2xl font-black text-gray-900 mt-1">
                {quickView.name}
              </h2>

              <div className="flex items-center gap-3 mt-3">

                <span className="text-2xl font-black">
                  ₹{quickView.price}
                </span>

                <span className="text-gray-400 line-through">
                  ₹{quickView.oldPrice}
                </span>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(quickView)
                    setQuickView(null)
                  }}
                  className="
                    flex-1 bg-gray-900
                    text-white py-3
                    rounded-xl font-semibold
                    hover:bg-gray-700
                    active:scale-95
                    transition-all
                  "
                >
                  <span className="flex items-center justify-center gap-2">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuickView(null)}
                  className="
                    px-5 border border-gray-300
                    rounded-xl font-semibold
                    hover:bg-gray-100
                    transition-all
                  "
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  )
}

export default Category

