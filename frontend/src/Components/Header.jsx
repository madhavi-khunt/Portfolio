import React from 'react'
import '../App.css'
import ProfileCard from "../Pages/ProfileCard";
import Statistics from "../Pages/Statistics";

function Header() {
  return (
    <div className="header-container">
    <ProfileCard />
    <div className="header-title">
      <h1>
        MERN Stack <span>Developer</span>
      </h1>
      <p>
        Passionate about creating intuitive and engaging user experiences.
        Specializing in transforming ideas into beautifully crafted products.
      </p>
      <Statistics />
    </div>
  </div>
  )
}

export default Header
