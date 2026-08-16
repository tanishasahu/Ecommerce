import React, { useState } from 'react'
import {
  ShoppingBag,
  Search,
  Menu,
  X
} from 'lucide-react'

import {
  Link,
  useNavigate
} from 'react-router-dom'

import { useCart } from '../Context/CartContext'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeLink, setActiveLink] = useState('Home')

  const { cartCount } = useCart()

  const navigate = useNavigate()

  const navLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Shop',
      path: '/shop'
    },
    {
      name: 'Collections',
      path: '/collection'
    },
    {
      name: 'Sale',
      path: '/sale'
    },
    {
      name: 'Deals',
      path: '/deals'
    }
  ]

  const goToCart = () => {
    navigate('/cart')
  }

  const goToSearch = () => {
    navigate('/search')
  }

  return (
    <nav className="absolute top-0 left-0 w-full z-50">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            onClick={() => setActiveLink('Home')}
            className="text-white text-2xl font-bold tracking-wide"
          >
            FASHION
            <span className="text-xs ml-1">
              @
            </span>
          </Link>


          {/* DESKTOP MENU */}

          <div className="hidden md:flex flex-1 justify-center">

            <div className="flex gap-8 lg:gap-12">

              {navLinks.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() =>
                    setActiveLink(link.name)
                  }
                  className={`
                    text-white
                    font-medium
                    transition-all
                    hover:opacity-70

                    ${
                      activeLink === link.name
                        ? 'opacity-100'
                        : 'opacity-80'
                    }
                  `}
                >
                  {link.name}
                </Link>

              ))}

            </div>

          </div>


          {/* RIGHT ICONS */}

          <div className="flex items-center gap-5 text-white">

            {/* SEARCH */}

            <button
              type="button"
              onClick={goToSearch}
              className="hover:scale-110 transition-transform"
              aria-label="Search"
            >
              <Search size={21} />
            </button>


            {/* CART */}

          <button
  onClick={goToCart}
  className="relative hover:scale-110 transition"
  aria-label="Shopping Cart"
>
  <ShoppingBag size={21} />

  {cartCount > 0 && (
    <span
      className="absolute -top-2 -right-2
      bg-white text-gray-900
      text-[10px] font-bold
      w-4 h-4 rounded-full
      flex items-center justify-center"
    >
      {cartCount}
    </span>
  )}
</button>


            {/* MOBILE MENU */}

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="md:hidden"
              aria-label="Menu"
            >

              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}

            </button>

          </div>

        </div>


        {/* MOBILE MENU */}

        {isMenuOpen && (

          <div
            className="
              md:hidden
              bg-black/90
              backdrop-blur-md
              rounded-2xl
              p-5
              mt-2
              flex flex-col gap-2
            "
          >

            {navLinks.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setActiveLink(link.name)
                  setIsMenuOpen(false)
                }}
                className="
                  text-white
                  py-3
                  px-3
                  rounded-lg
                  hover:bg-white/10
                  transition
                "
              >
                {link.name}
              </Link>

            ))}

          </div>

        )}

      </div>

    </nav>
  )
}

export default Navbar