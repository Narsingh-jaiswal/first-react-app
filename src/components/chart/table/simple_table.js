import React from 'react'
import './simple_table.css'
import avtar from './../../../assets/avtar.png'
import { Line } from "react-chartjs-2";
import center_align from "./../../../assets/center-align.png";

const Simple_table = () => {
  return (
    <>
      <div className="table-container">
        <div className="table-header">
          <h4 id="table-title">Simple Table</h4>
          <div className="weekly-btn">
            <button className="last" id="selected">
              <strong>Last Week</strong>
            </button>
            <button className="last" id="select">
              All Month
            </button>
          </div>
        </div>
        <div className="main-table">
          <table>
            <thead>
              <tr className="headings">
                <th className="table-head">#</th>
                <th className="table-head">Status</th>
                <th><p className="th-name">Name</p></th>
                <th className="table-head">Progress</th>
                <th className="table-head">Sales</th>
                <th className="table-head">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="common-tr">
                <td><p className="index">#345</p></td>
                <td>
                  <div className="status-row">
                    <p className="status">Pending</p>
                  </div>
                </td>
                <td>
                  <div className="name-info">
                    <img src={avtar} alt="" />
                    <div className="name-expertise">
                      <strong><p className="name-and-expertise">John Doe</p></strong>
                      <p className="name-and-expertise">Web Developer</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="progress-bar-container">
                    <div className="progressbar">
                      <div className="progress"></div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="line-chart">
                    <Line
                      width={50}
                      height={30}
                      className="table-chart"
                      data={{
                        labels: [1, 2, 3, 4, 5, 6],
                        datasets: [{
                          label: 'Revenue',
                          data: [12, 19, 3, 5, 2, 3],
                          backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
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
                </td>
                <td>
                  <img src={center_align} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-footer">
          <button className="danger">
            <strong>Delete</strong>
          </button>
          <div className="viw-entry-btn">
            <button id="view">View All</button>
            <button id="entry">Add New Entry</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Simple_table