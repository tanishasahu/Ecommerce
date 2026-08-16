import { Heart, Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const Footer = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const quickLinks = [
    'About Us',
    'Contact Us',
    'Size Guide',
    'FAQs'
  ]

  const categories = [
    "Men's Fashion",
    "Women's Wear",
    "Kids Collections"
  ]

  const socialIcons = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaYoutube, href: '#' },
  ]

  // =========================
  // SUBSCRIBE
  // =========================

  const handleSubscribe = (e) => {

    e.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter your email.')
      return
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      setMessage('Please enter a valid email.')
      return
    }

    setMessage('Subscribed successfully! 🎉')
    setEmail('')
  }

  return (

    <footer className="bg-gray-900 text-white pt-16 pb-8">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* =========================
            MAIN FOOTER
        ========================= */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
          mb-12
        ">

          {/* ABOUT */}

          <div>

            <h2 className="text-2xl font-bold mb-4">
              FASHION
              <span className="text-xs align-top ml-0.5">
                @
              </span>
            </h2>

            <p className="
              text-gray-400
              text-sm
              leading-relaxed
              mb-4
            ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Placeat hic earum suscipit eius vitae quis numquam unde at.
            </p>

            {/* SOCIAL ICONS */}

            <div className="flex gap-3">

              {socialIcons.map((social, idx) => {

                const Icon = social.icon

                return (

                  <a
                    key={idx}
                    href={social.href}
                    className="
                      bg-gray-800
                      p-2
                      rounded-full
                      hover:bg-gray-700
                      transition-colors
                      duration-300
                    "
                  >
                    <Icon size={18} />
                  </a>

                )

              })}

            </div>

          </div>


          {/* QUICK LINKS */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">

              {quickLinks.map((link, idx) => (

                <li key={idx}>

                  <a
                    href="#"
                    className="
                      text-gray-400
                      hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* CATEGORIES */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Categories
            </h3>

            <ul className="space-y-2">

              {categories.map((link, idx) => (

                <li key={idx}>

                  <a
                    href="#"
                    className="
                      text-gray-400
                      hover:text-white
                      transition-colors
                      duration-300
                    "
                  >
                    {link}
                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* CONTACT */}

          <div>

            <h3 className="text-lg font-semibold mb-4">
              Contact Info
            </h3>

            <ul className="space-y-3">

              <li className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <span className="text-gray-400 text-sm">
                  123 FASHION Street, City, CT 20002
                </span>

              </li>


              <li className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <span className="text-gray-400 text-sm">
                  +123 456 7890
                </span>

              </li>


              <li className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="text-gray-400 mt-0.5"
                />

                <span className="text-gray-400 text-sm">
                  info@fashionstore.com
                </span>

              </li>

            </ul>

          </div>

        </div>


        {/* =========================
            NEWSLETTER
        ========================= */}

        <div className="
          border-t
          border-gray-700
          pt-8
          mb-8
        ">

          <div className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          ">

            <div>

              <h3 className="text-lg font-semibold mb-1">
                Subscribe to Newsletter
              </h3>

              <p className="text-gray-400 text-sm">
                Get updates about new products and special offers.
              </p>

            </div>


            {/* FORM */}

            <form
              onSubmit={handleSubscribe}
              className="w-full md:w-auto"
            >

              <div className="flex w-full">

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setMessage('')
                  }}
                  placeholder="Enter your email"
                  className="
                    px-4
                    py-2
                    rounded-l-lg
                    w-full
                    md:w-64
                    bg-gray-800
                    text-white
                    border
                    border-gray-700
                    focus:outline-none
                    focus:border-gray-500
                  "
                />


                <button
                  type="submit"
                  className="
                    bg-white
                    text-gray-900
                    px-6
                    py-2
                    rounded-r-lg
                    font-semibold
                    hover:bg-gray-100
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  Subscribe
                </button>

              </div>


              {/* MESSAGE */}

              {message && (

                <p className={`
                  text-sm
                  mt-2
                  ${
                    message.includes('successfully')
                      ? 'text-green-400'
                      : 'text-red-400'
                  }
                `}>
                  {message}
                </p>

              )}

            </form>

          </div>

        </div>


        {/* =========================
            COPYRIGHT
        ========================= */}

        <div className="
          border-t
          border-gray-700
          pt-6
          text-center
        ">

          <p className="
            text-gray-400
            text-sm
            flex
            flex-col
            sm:flex-row
            items-center
            sm:justify-between
            justify-center
            gap-2
          ">

            <span>
              @2026 Fashion. All rights reserved.
            </span>

            <span className="flex items-center gap-2">

              Made with

              <Heart
                size={14}
                className="text-red-500 fill-red-500"
              />

              by Fashion Store

            </span>

          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer