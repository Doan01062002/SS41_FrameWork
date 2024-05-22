import React, { useState } from 'react'

export default function BT10() {
    const [values,setValue] = useState<string[]>([])

    const handleCheckbox = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value, checked} = e.target

        if(checked){
            setValue(prevValue=> [...prevValue, value])
        }else{
            setValue(prevValue=> prevValue.filter(item => item !== value))
        }
    }
  return (
    <div>BT10:

        <p>Sở thích: [{values.join(", ")}]</p>
        <label htmlFor="">
            <input onChange={handleCheckbox} type="checkbox" value={"Đi chơi"}/>Đi chơi
        </label>
        <label htmlFor="">
            <input onChange={handleCheckbox} type="checkbox" value={"Code"}/>Code
        </label>
        <label htmlFor="">
            <input onChange={handleCheckbox} type="checkbox" value={"Bơi lội"}/>Bơi lội
        </label>
        <label htmlFor="">
            <input onChange={handleCheckbox} type="checkbox" value={"Nhảy dây"}/>Nhảy dây
        </label>
    </div>
  )
}
