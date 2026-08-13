import React from 'react'
import {useState} from "react"


const [count,setcount] =useState(0);

const Navbar = () => {
  return (

    <div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
