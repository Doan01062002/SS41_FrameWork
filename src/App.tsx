import React from 'react'
import Header from './components/Header/Header'
import UI from "./components-UI/UI"
import ReactBoostrap from './components-UI/ReactBoostrap'
import MUI from './component-MUI/MUI'
import AntDesign from './component-MUI/AntDesign'

export default function App() {
  return (
    <div >App

      <MUI></MUI>

      <AntDesign></AntDesign>
      
      {/* <div className='text-red-500 flex text-3xl'>
        <p>home</p>
        <p>contact</p>
      </div> */}

      {/* <Header></Header> */}
      {/* <UI></UI> */}
      {/* <ReactBoostrap></ReactBoostrap> */}

    </div>
  )
}
