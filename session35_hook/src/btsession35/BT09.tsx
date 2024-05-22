import React, { useState } from 'react'

export default function BT09() {
    const [gender,setGender] = useState<string>("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setGender(e.target.value)
    }
    
  return (
    <div>BT09:

        <p>Giới tính: {gender}</p>
        <label htmlFor="">
            <input onChange={handleChange} name='gender' type="radio" value={"Nam"}/>Nam
        </label>
        <label htmlFor="">
            <input onChange={handleChange} name='gender' type="radio" value={"Nữ"}/>Nữ
        </label>
        <label htmlFor="">
            <input onChange={handleChange} name='gender' type="radio" value={"Khác"}/>Khác
        </label>
    </div>
  )
}
