import React from "react"
import './top-nav.scss'

const TopNav = ({ toggleTheme, isDarkTheme }) => {
  return (
    <div className="top-nav">
      <div className="left">Miss Pralina</div>
      <div className="right">
        <button onClick={toggleTheme}>{isDarkTheme ? 'light' : 'dark'}</button>
      </div>
    </div>
  )
}

export default TopNav;
