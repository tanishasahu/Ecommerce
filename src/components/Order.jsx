import { Clock, Dot, Gift, Star, Tag, Truck, Zap } from 'lucide-react'
import React from 'react'

const Order = () => {
  const offers = [
    {
      id: 1, icon: <Gift size={16} />,
      text: 'Free Gift on your orders over ₹200'
    },
    {
      id: 2, icon: <Tag size={16} />,
      text: 'Up to 50% OFF on Summer Collection'
    },
    {
      id: 3, icon: <Truck size={16} />,
      text: 'Free Shipping Worldwide'
    },
    {
      id: 4, icon: <Zap size={16} />,
      text: 'Flash Sale: 24 Hours Only'
    },
    {
      id: 5, icon: <Star size={16} />,
      text: 'Buy 2 Get 1 Free on selected items'
    },
    {
      id: 6, icon: <Clock size={16} />,
      text: 'Extra 10% OFF for New Members'
    }
  ]

  const duplicatedOffers = [...offers, ...offers, ...offers]

  return (
    <div className='bg-white py-3 overflow-hidden border-y border-gray-200' data-aos='fade-up'>
      <div className="relative">
        <div className="flex items-center gap-8 whitespace-nowrap animate-scroll">
          
          {duplicatedOffers.map((offer, idx) => (
            <div
              key={`${offer.id}-${idx}`}
              className='flex items-center gap-2 px-4 py-1.5'
            >
              <div className="text-gray-600">
                {offer.icon}
              </div>

              <p className="text-gray-700 text-sm font-medium">
                {offer.text}
              </p>

              <span className="text-gray-400 text-xs mx-2">
                <Dot className='w-10 h-10'/>
              </span>

              <a href="#" className='text-gray-900 text-sm font-semibold'>
                Shop Now
              </a>
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Order