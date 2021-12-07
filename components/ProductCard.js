import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { lorem } from '../utils/lorem'
import { ArrowDownIcon, ShareIcon, ThumbUpIcon,StarIcon } from '@heroicons/react/outline'
import { useState } from 'react/cjs/react.development'
function ProductCard({id,title, description, image, price, more}) {
   const [likes, setLikes] = useState(0)
   const [stars, setStars] = useState(0)
   const [categories, setCategories] = useState(['chaussures','alimentation','habillement','loisirs','high-tech'])
   const router = useRouter()
   return (
      <div className="bg-white shadow-md rounded-md overflow-hidden sm:flex sm:flex-wrap group transition sm:duration-100 sm:transform sm:hover:translate-y-5" key={id}>
         <div className="h-full sm:w-64 p-0 cursor-pointer ">
            <Image src={image}  layout="responsive" priority={true} className="transition sm:transition-none duration-100 transform hover:scale-105 sm:hover:scale"  height={150} width={150}/>
         </div>
         <div className="p-3">
            <h2 className="text-xl sm:text-xl font-semibold ">chaussure</h2>
            <p className="text-base text-gray-700 mt-3 overflow-auto tracking-wider my-2">{lorem}</p>
            <div className="flex space-x-1 sm:space-x-3 my-2 overflow-x-scroll scrollbar-hide">
               {categories.map((category) => (
                  <span key={category} className="rounded-2xl px-2 py-1 text-center text-sm bg-gray-200 hover:bg-gray-300 cursor-pointer select-none">{category}</span>
               ))}
            </div>
            <div className="flex">
               <span className="text-md mr-2">Contacts :</span>
               <p className="font-semibold">0971462936</p>
            </div>
         </div>
         <div className='flex  items-center justify-between p-3'>
            <div className="flex">
               <ThumbUpIcon className="sm:h-6 sm:w-6 h-8 w-8 cursor-pointer text-yellow-500" onClick={() => setLikes(likes++)}/>
               <span className='text-md font-semibold'>{likes}</span>
            </div>
            <div className="space-y-2 flex-col justify-center">
               <ShareIcon className="sm:h-6 sm:w-6 h-8 w-8 cursor-pointer text-yellow-500" />
               <span className='text-sm'>Partager</span>
            </div>
         </div>
         <div className="w-full sm:max-w-3xl">
            <button className="px-2 py-2 text-xl text-center rounded-b-md bg-yellow-500 text-white w-full font-semibold">
               Message
            </button>
         </div>
      </div>
   )
}

export default ProductCard


