import React, { useState } from 'react'

export default function BT01() {

    const [name,setName] = useState<string>("Nguyễn Văn Đoan")
  return (
    <div>bt01: 
        {name}
    </div>
  )
}
