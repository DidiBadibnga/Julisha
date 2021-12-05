import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
function ProductCard({id,title, description, image, price, more}) {
   const router = useRouter()
   return (
      <div className="cursor-pointer bg-white shadow rounded-md overflow-hidden sm:flex" key={id}>
         <div className="h-full sm:w-64 p-0">
            <Image src={image}  layout="responsive" height={150} width={150}/>
         </div>
         <div className="p-3 text-center">
            
         </div>
      </div>
   )
}

export default ProductCard


