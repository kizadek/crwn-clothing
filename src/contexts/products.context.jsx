import { createContext, useState,useEffect} from "react";
import SHOP_DATA from "../shop-data.json"

// actual products data to  access

export const productsContext = createContext({
    products: [],
})





export const ProductsProvider = ({children})=>{
    const [products,setProducts] = useState([]);
    const  value = {products}
    //function only runs once when the component mounts
    useEffect(()=>{
          setProducts(SHOP_DATA)
    },[])


    return <productsContext.Provider value={value}>{children}</productsContext.Provider>
}