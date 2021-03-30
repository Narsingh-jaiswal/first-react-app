import React from 'react'
import './layout-menu.css'
const Layout_menu = ()=>{
  return(
    <>
      <div className="layout-menu-container">
        <div className="left-side-menu">
          <a href="#" className="left-side-menu-content">
            <p className="menu-content-heading">Mailbox</p>
            <p className="menu-content-p">Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
          </a>
          <div className="border-div"></div>
          <a href="#" className="left-side-menu-content">
            <p className="menu-content-heading">Chat</p>
            <p className="menu-content-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
          </a>
          <div className="border-div"></div>
          <a href="#" className="left-side-menu-content">
            <p className="menu-content-heading">FAQ Section</p>
            <p className="menu-content-p">Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat.</p>
          </a>
        </div>
        <div className="user-pages">
          <p className="user-pages-heading">User Pages</p>
          <a href="#" className="user-page-option">Login</a>
          <a href="#" className="user-page-option">Login Boxed</a>
          <a href="#" className="user-page-option">Register</a>
          <a href="#" className="user-page-option">Register Boxed</a>
          <a href="#" className="user-page-option">Forgot Password</a>
          <a href="#" className="user-page-option">Forgot Password Boxed</a>
        </div>
      </div>
    </>
  )
}

export default Layout_menu