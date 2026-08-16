import React, { useState } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'

const Search = () => {
  const [search, setSearch] = useState('')

  return (
    <section className="min-h-screen bg-gray-50 py-16">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Find Your Style
          </p>

          <h1 className="text-4xl md:text-5xl font-black text-gray-900">
            Search Products
          </h1>

        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto">

          <div className="relative">

            <SearchIcon
              size={22}
              className="absolute left-5 top-1/2
              -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for dresses, shoes, shirts..."
              className="w-full bg-white border
              border-gray-200 rounded-full
              py-4 pl-14 pr-14 outline-none
              focus:ring-2 focus:ring-gray-900
              shadow-sm"
            />

            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-5 top-1/2
                -translate-y-1/2 text-gray-400
                hover:text-gray-900"
              >
                <X size={20} />
              </button>
            )}

          </div>

        </div>

        {/* Search Result */}
        <div className="text-center mt-10">

          {search ? (
            <p className="text-gray-600">
              Searching for:{' '}
              <span className="font-bold text-gray-900">
                {search}
              </span>
            </p>
          ) : (
            <p className="text-gray-500">
              Type something to search products.
            </p>
          )}

        </div>

      </div>

    </section>
  )
}

export default Search