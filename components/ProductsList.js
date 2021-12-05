import React from 'react'
import ProductCard from './ProductCard'
import { shoes } from '../utils/shoes'
function ProductsList() {
   return (
      <div className="space-y-3  px-6 sm:grid sm:grid-cols-2 sm:gap-4">
        {shoes.map((item) => (
          <ProductCard image={item.image} key={item.id} title={item.title}/>
        ))}
      </div>
   )
}

/*export const getServerSideProps = async (context) => {
  const res = await fetch()
}*/
export default ProductsList
