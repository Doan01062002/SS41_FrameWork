import React, { useState } from 'react'

export default function UseState() {
    //cú pháp detructering
    let cart= [
        {
            name:"iphone",
            price:5000,
            quantity:2
        },
        {
            name:"iphone10",
            price:6000,
            quantity:2
        },
        {
            name:"iphone11",
            price:7000,
            quantity:2
        },
    ]

    const [name,setName] = useState<string>("minh thu")
    const [count,setCount]= useState<number>(0)
    const [price,setPrice] = useState<number>(()=>{
        return cart.reduce((currentValue,item)=>{
            return currentValue + item.price*item.quantity
        },0)
    })

    const handleCount = ()=>{
        setCount(pre => pre +1)
    }

    //sử dụng batch update
  return (
    <div>UseState
        {/* 
            useState (sử dụng trạng thái)
            trạng thái của dữ liệu khi dữ liệu thay đổi thì giao diện thay đổi theo
            các hook là các phương thức được react cung cấp cho nên khi sử dụng phải import đê dùng
            bản chất useState là một fuction trả về một mảng có 2 phần tử
            "minh thu" và (0) là giá trị khởi tạo (initial-value)
            khi setCount thì component re-render lại
            khi có nhiều useState giống nhau thì sẽ đưa hết các useState vào 1 cái queue(hàng đợi ) để sử lý
            -đối với kỹ thuật batch -update thì nó sẽ lấy giá trị trả về useState trước làm giá trị tham số đầu vào của useState sau.
            +truyền trực tiếp giá trị
            +dùng arrow function để trả về kết quả
         */}

         <p>Giá trị biến đếm count: {count}</p>
         <button onClick={handleCount}>tăng</button>
         <p>giá: {price}</p>
    </div>
  )
}
