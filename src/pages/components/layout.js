import React, { useState } from "react"
import TopNav from './top-nav';

export default function Layout({ children }) {
  console.log(localStorage.getItem('isDarkTheme'))
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === 'true' || false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem('isDarkTheme', !isDarkTheme);
  }
  console.log(isDarkTheme);
  return (
    <div className={`${isDarkTheme ? 'dark-theme' : ''}`}>
      <TopNav
        {...{
          toggleTheme,
          isDarkTheme
        }}
      />
      <div className="container">
        {children}
      </div>
    </div>
  )
}
