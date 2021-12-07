import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { shoes } from '../utils/shoes'
import { collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase'
function ProductsList({title}) {
   return (
      <div className="space-y-3 p-6 sm:p-5 sm:grid sm:grid-cols-2 sm:gap-4">
        <h1 className="text-2xl sm:text-4xl font-semibold">{title}</h1>
        {shoes.map((item) => (
          <ProductCard image={item.image} key={item.id} title={item.title}/>
        ))}
      </div>
   )
}

export default ProductsList
