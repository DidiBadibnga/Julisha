import { SearchIcon } from "@heroicons/react/outline"
import router from "next/router"

const SearchLogo = ({device}) => {
   return (
      <>
         <button>
            <SearchIcon  className='h-10 w-10 text-yellow-600 ' onClick={() => router.push("/search")}/>
         </button>
      </>
   )
}

export default SearchLogo
