import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'

// ===============================
// COMPONENTS
// ===============================

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Products from './components/Products'
import Collection from './components/Collection'
import Deals from './components/Deals'
import Footer from './components/Footer'
import Order from './components/Order'

// ===============================
// PAGES
// ===============================

import ProductsPage from './pages/ProductsPage'
import Cart from './pages/Cart'
import Search from './pages/Search'

// ===============================
// APP
// ===============================

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Products />
              <Order/>
              <Collection />
              <Deals />
          
            </>
          }
        />

        {/* SHOP */}
        <Route
          path="/shop"
          element={<ProductsPage />}
        />
        <Route
  path="/category"
  element={<Category />}
/>

        {/* SEARCH */}
        <Route
          path="/search"
          element={<Search />}
        />

        {/* COLLECTION */}
        <Route
          path="/collection"
          element={<Collection />}
        />

        {/* SALE */}
        <Route
          path="/sale"
          element={
            <>
              <Products />
              <Deals />
            </>
          }
        />

        {/* DEALS */}
        <Route
          path="/deals"
          element={<Deals />}
        />

        {/* CART */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* PAGE NOT FOUND */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">

                <h1 className="text-4xl font-bold text-gray-900">
                  Page Not Found
                </h1>

                <p className="text-gray-500 mt-3">
                  The page you are looking for does not exist.
                </p>

                <Link
                  to="/"
                  className="
                    inline-block
                    mt-6
                    bg-gray-900
                    text-white
                    px-6
                    py-3
                    rounded-full
                    font-semibold
                    hover:bg-gray-700
                    transition
                  "
                >
                  Go Home
                </Link>

              </div>
            </div>
          }
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default App