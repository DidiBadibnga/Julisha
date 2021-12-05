
import { categories } from "../utils/categories"
import { useState } from "react"

function Nav() {
    return (
        
        <nav className="my-2">
            {/* nav bar */ }
            <div className="py-4 flex items-center px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {/* Next Link */}
                {categories.map((item) => (
                    <a
                    key={item}
                    className="last:pr-24 cursor-pointer sm:transition sm:duration-100 sm:transform sm:hover:scale-125 hover:text-yellow-600 active:text-red-500"
                >
                    {item}
                </a>
                ))}
                
            </div>
            {/* fade div     */}
            {/*<div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>*/}
        </nav>
    )
}

export default Nav