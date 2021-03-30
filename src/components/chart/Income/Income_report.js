import React from 'react'
import './../Income/Income_report.css'
import { HorizontalBar } from "react-chartjs-2";
import Income_Expenses from "./income-expenses/Income_Expenses";

const Income = () => {
  return (
    <>
      <div className="income-chart-container">
        <div className="income-header">
          <h5 id="income-title">Income Report</h5>
          <button className="option-button">
            Options
            <i className="material-icons option-btn">arrow_drop_down</i>
          </button>
        </div>
        <div className="main-bar">
          <HorizontalBar
            width={200}
            height={80}
            data={{
              labels: [1, 2, 3, 4, 5, 6],
              datasets: [{
                label: 'marine',
                data: [20, 50, 60, 30, 10, 60, 0, 70],
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
        <Income_Expenses />
      </div>
    </>
  )
}

export default Income