import React, { useState } from 'react'

export default function BT07() {
    const [value,setValue] = useState<string>("")
    const [count,setCount] = useState<number>(0)

    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setValue(e.target.value)

        setCount(e.target.value.length)
    }
  return (
    <div>BT07:
        <textarea onChange={handleChange} name="" id=""></textarea>
        <p>Số ký tự: {count}</p>
    </div>
  )
}
