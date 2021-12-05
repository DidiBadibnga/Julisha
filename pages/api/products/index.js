import { shoes } from "../../../utils/shoes";
import product from "../../product/[id]";

export default function handler({ query: {id}}, res) {
   const filtered = shoes.filter(product => product.id === id)
   if(filtered.length > 0){
      res.status(200).json(filtered[0])
   }
   else{
      res.status(404).json({message:"Error"})
   }
}