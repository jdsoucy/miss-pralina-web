import React from "react"
import { Link, graphql } from "gatsby"
import './top-nav.scss'

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="left">
        <a href="">
          <img src="logo-light.png" />
        </a>
      </div>
      <ul className="right">
        {/* <li><Link to="/artwork">Artwork</Link></li>
        <li><Link to="/about">About</Link></li> */}
      </ul>
    </div>
  )
}

export default TopNav;
