import React, { useState } from 'react'

export default function BT04() {
    const [show,setShow] = useState<boolean>(false)

    const handleClick = ()=>{
        setShow(!show)
    }
  return (
    <div>BT04:
        <button onClick={handleClick}>{show ? "Ẩn" : "Hiện"}</button>
        {show && (<p>Tiêu đề văn bản</p>)}
    </div>
  )
}
