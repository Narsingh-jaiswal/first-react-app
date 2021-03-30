import React from 'react'
import './dashboard-dropdown.css'

const Dropdown_Dashboard = ()=>{
  return (
    <>
      <div className="drop">
        <div className="drop_header">
          <h3 className="drop-down-heading">Dashboards</h3>
          <h5 className="drop-down-subheading">This is a dropdown header example!</h5>
        </div>
        <div className="drop_down_content">
          <p>Analitics</p>
          <p>Management</p>
          <p>Advertisement</p>
          <p>Helpdesk</p>
          <p>Monitoring</p>
          <p>CryptoCurrency</p>
          <p>Monitoring</p>
          <p>Project Management</p>
          <p>Product</p>
          <p>Statics</p>
        </div>
        <div className="purchase_button">
          <button>Purchase</button>
        </div>
      </div>
    </>
  )
}

export default Dropdown_Dashboard