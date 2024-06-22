import React, { useState } from 'react'
import Homepage from '../../pages/Home/Homepage'
import { PiCaretCircleDoubleLeftLight , PiCaretCircleDoubleRightLight } from "react-icons/pi";
import './Layout.css'
import Menu from '../Menu/Menu';

const Layout = () => {
  const [toggle, setToggle] = useState(true)

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {
                toggle? (<PiCaretCircleDoubleLeftLight size={30} />) : (<PiCaretCircleDoubleRightLight size={30} />)
              }
            </p>
          </div>
              <Menu toggle = {toggle}/>
        </div>
        <div className="container">
          <Homepage />
        </div>
      </div>
    </>
  )
}

export default Layout
