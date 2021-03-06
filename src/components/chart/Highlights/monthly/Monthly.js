import React from "react";
import "./Monthly.css";
import { Line } from "react-chartjs-2";

const Monthly = () => {
  return (
    <>
      <div className="monthly-container">
        <div className="monthly-title">
          <h1 className="title">Monthly Statistics</h1>
        </div>
        <div className="data-chart">
          <div className="revenue-data">
            <h1 id="revenue">+76</h1>
            <h4 className="revenue-content">Revenue Increased this Quater</h4>
          </div>
          <Line
            width={200}
            height={100}
            data= {{
              labels: [1,2,3,4,5,6],
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
      </div>
    </>
  );
};

export default Monthly;
