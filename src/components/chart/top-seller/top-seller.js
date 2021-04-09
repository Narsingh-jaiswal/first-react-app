import React from 'react'
import './top-seller.css'
import { Pie } from "react-chartjs-2";
import lighter from "./../../../assets/lighter.png";

const Seller = () => {
  return (
    <>
      <div className="seller-container">
        <div className="seller-container-main">
          <div className="seller-detail">
            <h1 id="heading">Top Seller</h1>
            <p id="card-example">Yet another Example of Card Boxes</p>
            <button className="card-btn" id="john">John</button>
            <button className="card-btn">Mary</button>
            <button className="card-btn" id="Katie">Katie</button>
          </div>
          <div className="pie-content">
            <div className="chart">
              <Pie
                data={{
                  datasets: [{
                    label: 'marine',
                    data: [20, 50, 60, 30, 10, 60],
                    backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                  }]
                }}
              />
            </div>
            <div className="sales-figer">
              <div className="today">
                <h1 className="today-data">$158</h1>
                <p id="sale">sales Today</p>
              </div>
              <div className="month">
                <h1 className="month-data">$346</h1>
                <p id="sale" id="month-sale">Sales this Month</p>
              </div>
            </div>
          </div>
          <div id="block-btn-container">
            <button className="block-btn"><strong>BLOCK BUTTON MAYBE?</strong></button>
          </div>
        </div>
        <div className="user-card">
          <div className="user-card-detail">
            <div className="user-card-header">
              <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/1.jpg" className="ruben" alt="" />
              <div className="name-subname">
                <h3 className="ruben-name">Ruben Tillman</h3>
                <p id="subname">Etiam sit amet orci eget</p>
              </div>
            </div>
            <div>
              <button id="view-profile-btn">View Profile</button>
            </div>
          </div>
          <div className="leads">
            <h3 id="new-lead"><span id="exact-lead"><strong>12</strong></span> new leads, <span id="price-tag"><strong>$56.24</strong></span> in sales</h3>
          </div>
          <div className="after-leads-div">
            <div className="top-btn">
              <div className="common-property automation">
                <button className="common-btn-property">
                  <img width={25} src={lighter} alt="" />
                  <p>automation</p>
                </button>
              </div>
              <div className="common-property report">
                <button className="common-btn-property">
                  <img width={25} src={lighter} alt="" />
                  <p>report</p>
                </button>
              </div>
            </div>
            <div className="bottom-btn">
              <div className="common-property activity-div">
                <button className="common-btn-property activity-btn">
                  {/* <img width={25} src={lighter} alt="" /> */}
                  <i className="material-icons activity">
                    directions_bus
                  </i>
                  <p>activity</p>
                </button>
              </div>
              <div className="common-property setting">
                <button className="common-btn-property">
                  <img width={25} src={lighter} alt="" />
                  <p>setting</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Seller