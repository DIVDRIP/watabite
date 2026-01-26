
import React, { useState } from 'react'
import Title from './Title'
import FoodItems from './FoodItems'

const RestaurantMenu = ({restaurant}) => {
  const [activeCategory, setActiveCategory] = useState(restaurant.menu[0]?.category || '')

  const scrollToCategory = (category) => {
    setActiveCategory(category)
    const element = document.getElementById(category)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto rounded-3xl border border-white/20 bg-black/90 shadow-[0_0_40px_rgba(34,197,94,0.25)] overflow-hidden">
      
      {/* HEADER */}
      <div className="relative bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 border-b border-white/10">
        <div className="text-center mb-4">
          <Title text="Menu View"/>
        </div>
        <h2 className="text-3xl font-bold text-white text-center">{restaurant.name}</h2>
        <p className="text-center text-gray-300 mt-2">Explore our delicious items</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* LEFT SIDEBAR */}
        <aside className="lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 lg:sticky lg:top-24 lg:h-fit">
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h3>
            <nav className="space-y-2">
              {restaurant.menu.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => scrollToCategory(cat.category)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeCategory === cat.category
                      ? 'bg-green-500 text-white font-semibold shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.category}
                  <span className="ml-2 text-xs opacity-70">({cat.items.length})</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT MENU */}
        <div className='flex-1 p-6 lg:p-8 space-y-12'>
          {restaurant.menu.map((cat) => (
            <div key={cat.category} id={cat.category} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {cat.category}
                </h3>
                <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full">
                  {cat.items.length} items
                </span>
              </div>

              {/* FOOD GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {cat.items.map((food) => (
                  <FoodItems
                    key={food.id}
                    image={food.image || "https://via.placeholder.com/300"}
                    name={food.name}
                    description={food.description}
                    price={food.price}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu