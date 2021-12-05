import axios from "axios";

const api_key = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;

export const getPhotos = () => {
   const res = await fetch(`https://pixabay.com/api/?key=${api_key}&q=yellow+flowers&image_type=photo&pretty=true`)

   console.log(res.json())
}