import React from "react"
import TopNav from './top-nav';

export default function Layout(props) {
  return (
    <div id="layout" {...props}>
      <TopNav />
      {props.children}
    </div>
  )
}
