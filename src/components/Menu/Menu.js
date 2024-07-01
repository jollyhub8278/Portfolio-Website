import React from 'react'
import './Menu.css'
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcPieChart } from "react-icons/fc";
import { FcList } from "react-icons/fc";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle && (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=ais_user"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <FcHome />Home
              </div>
              <div className="nav-link">
                <FcAbout />About
              </div>
              <div className="nav-link">
              <FcGraduationCap />Education
              </div>
              <div className="nav-link">
              <FcBiotech />Tech Stack
              </div>
              <div className="nav-link">
                <FcPieChart />Projects
              </div>
              <div className="nav-link">
              <FcReadingEbook />Work Experience
              </div>
              <div className="nav-link">
              <FcList />Contact
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Menu
