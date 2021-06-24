import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import instagramBrands from '../../../static/instagram-brands.svg'
import envelopeRegular from '../../../static/envelope-regular.svg'
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
        <li><a mailto="mailto:hello@misspralina.com"><img src={envelopeRegular} /></a></li>
        <li><a href="https://instagram.com/misspralina"><img src={instagramBrands} /></a></li>
        {/* <li><Link to="/artwork">Artwork</Link></li>
        <li><Link to="/about">About</Link></li> */}
      </ul>
    </div>
  )
}

export default TopNav;
