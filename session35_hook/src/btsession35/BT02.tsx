import React, { useState } from 'react'

type Product ={
    id:number
    name:string
    price:number
    quantity:number
}

export default function BT02() {

    const [product,setProduct] = useState<Product>({
        id:1,
        name:"Coca cola",
        price:1000,
        quantity:10
    })
  return (
    <div>BT02:
        <h4>Thông tin sản phẩm</h4>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
    </div>  
  )
}
