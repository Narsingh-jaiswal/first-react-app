import React from 'react'
import './sidebar.css'

const Sidebar = () => {  
  return (
    <>
      <div className="sidebar-container">
        <h4 id="sidebar-header">DASHBOARDS EXAMPLE</h4>
        <ul className="side-bar-content">
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Analytics</a>
        </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Management</a>
        </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Advertisement</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Helpdesk</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Monitoring</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Cryptocurrency</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Project Management</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Product</a>
          </li>
        <li className="side-content">
          <a className="side-bar-a-tag" href="#">Statistics</a>
          </li>
      </ul> 
      </div>      
    </>
  )
}

export default Sidebar