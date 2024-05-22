import React from 'react'
import UseState from './components/UseState'
import BT01 from './btsession35/BT01'
import BT02 from './btsession35/BT02'
import BT03 from './btsession35/BT03'
import BT04 from './btsession35/BT04'
import BT05 from './btsession35/BT05'
import BT06 from './btsession35/BT06'
import BT07 from './btsession35/BT07'
import BT08 from './btsession35/BT08'
import BT09 from './btsession35/BT09'
import BT10 from './btsession35/BT10'

export default function App() {
  return (
    <div>React Hook

      {/*
          Hook:móc
          bản chất là hàm phương thức giúp cho function component có thẻ thực hiện các tính nagw y hệt như class component
          + react hook được ra đời phiên bản 16.8(2018)
          + trước khi hook ra đời thì function component thì chỉ đơn giản là tạo ra Ui
          funtion Header(){
            return <> Header </>
          } 
          + hook ra đời cho code ngắn gọn hơn dễ sử dụng với class component
          +dự án bây giờ đa phần dung react hook
          +khi làm việc với class thi phải nắm vững lifecycle
          +react-hook chỉ áp dụng funtion component
          +khi lmaf việc phải để ý đầu vào và ra của phương thức
          +các hook học:
            - useState
            - useEffect
            - useReft
            - useMemo
            - useReducer
            - useCallback
       */}

       <UseState></UseState>
       <BT01></BT01>
       <BT02></BT02>
       <BT03></BT03>
       <BT04></BT04>
       <BT05></BT05>
       <BT06></BT06>
       <BT07></BT07>
       <BT08></BT08>
       <BT09></BT09>
       <BT10></BT10>
    </div>
  )
}
