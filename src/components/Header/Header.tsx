import React from 'react'
import "./header.scss"

export default function Header() {
  /*
    quy tắc đặt tên cho các className BEM
  */
  return (
    <div className='header'>
        Header
        <div className="logo">logo</div>
        <div className="navigation">
            <a href="" className='home'>home</a>
            <a href="" className='about'>about</a>
            <a href="" className='contact'>contact</a>
        </div>
    </div>
  )
}
