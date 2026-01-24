import React from 'react'
import Item from './Item'
import Title from './Title'

const RestaurantMenu = ({restaurant}) => {
  return (
     <div className=" w-[60vw] rounded-3xl border border-white/20 bg-black/90 shadow-[0_0_40px_rgba(34,197,94,0.25)]">


<div className='text-center p-5 mt-4 text-3xl'>
<Title text={"Menu View"}/>
</div>
      {/* HEADER */}
      <div className="p-6 pt-1 border-b border-white/10">
        <h2 className="text-2xl font-bold text-white">{restaurant.name}</h2>
        <p className="text-sm text-gray-400">Explore delicious items</p>
      </div>

      <div className="flex">

        {/* LEFT SIDEBAR */}
        <aside className="w-56 border-r border-white/10 sticky top-24 h-fit">
          <p className='block px-6 py-4 text-gray-400 hover:text-green-400 hover:bg-white/5 transition'>Popular</p>
        </aside>

        {/* RIGHT MENU */}
        <div className='flex-1 p-6 space-y-10 '>
           {
            restaurant.menu.map((cat)=>(
<div key={cat.category} id={cat.category}>
              <h3 className="text-xl font-semibold text-white mb-4">
                {cat.category}
              </h3>

               {/* FOOD GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {cat.items.map((item,index) => (
                  <Item key={index} id={item.id} image={item.image} name={item.name}   />

                   
                 
                ))}

              </div>
</div>
            ))
           }
        </div>
      </div>
    </div>
  )
}

export default RestaurantMenu
