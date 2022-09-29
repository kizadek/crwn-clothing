import React from 'react'
import SHOP_DATA  from  '../../shop-data.json';

import { useContext } from 'react';
import { productsContext } from '../../contexts/products.context';

 const  SHOP = () =>{
  const  {products} = useContext(productsContext);
   console.log(products)
  return (
    <div>
      {
        products.map(({id,name})=>(
          <div key={id}>
            <h1>{name}</h1>
          </div>
        ))
      }
    </div>
  )
}


export default SHOP;