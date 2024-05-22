import React, { useState } from 'react'

export default function BT06() {
    const [count,setCount] = useState<number>(0)

    const handleClick = ()=>{
        setCount(count +1)
    }
  return (
    <div>BT06:
        <p>Bạn đã click {count} lần</p>
        <button onClick={handleClick}>Click để tăng số lần click</button>
    </div>
  )
}
