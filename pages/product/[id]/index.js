import { useRouter } from "next/router"
import ProductCard from "../../../components/ProductCard";
import Image from 'next/image'
import { shoes } from "../../../utils/shoes";
function product({product}) {
   return (
      <div>
         {product.title}
         <Image layout='responsive' width={400} height={400} src={product.image}/>
      </div>
   )
}

export const getServerSideProps = async (context) => {
   const product = shoes[context.params.id]

   return {
      props: {
         product
      }
   }
}
export default product
