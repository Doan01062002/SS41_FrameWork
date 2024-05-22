import React, { useState } from 'react'

export default function BT03() {

    const [changeColor,setChangeColor] = useState<string>("black")

    const handleChangeColor = ()=>{

        if(changeColor === "black"){
            setChangeColor("red")
        }else{
            setChangeColor("black")
        }
        
    }
  return (
    <div>BT03:
        <p style={{color:changeColor}}>Tiêu đề văn bản</p>

        <button onClick={handleChangeColor}>ChangeColor</button>
    </div>
  )
}
