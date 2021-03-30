import React from 'react'
import './bug.css'
import education from "./../../../assets/education.png";
import right_arrow from "./../../../assets/right-arrow.png";
import { Bar,Line} from "react-chartjs-2";

const Bug = () => {
  return (
    <>
      <div className="bug-fixed-container">
        <div className="bar-container">
          <div className="bug-detail">
            <div className="img-div">
              <img src={education} width={24} />
            </div>
            <h1 id="actual-data">63.2K</h1>
            <p className="bug-fixed">Bug Fixed</p>
            <div className="percentage-data">
            <i className="material-icons bug-fixed">arrow_forward</i>
              <p className="bug-fixed">175.5%</p>
            </div>
          </div>
          <div className="bug-chart"></div>
          <Bar
            width={100}
            height={35}
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
        <div className="bug-fixed-line">
          <div className="bug-detail">
            <div className="img-div">
              <img src={education} width={24} />
            </div>
            <h1 id="actual-data-line">1.5M</h1>
            <p className="bug-fixed">Bug Fixed</p>
            <div className="percentage-data">
              <p className="bug-fixed">Down by <i className="material-icons">arrow_drop_down</i> 54.1% from 30 days ago</p>
            </div>
          </div>
          <div className="bug-chart"></div>
          <Line
            width={100}
            height={35}
            data={{
              labels: [1, 2, 3, 4, 5, 6],
              datasets: [{
                label: 'marine',
                data: [20, 50, 60, 30, 10, 60, 0, 70],
                backgroundColor: 'rgb(255,255,255,0.4)',
                borderColor: 'rgb(255,255,255,0.4)',
                borderWidth: 1
              }]
            }}
          />
        </div>
      </div>
    </>
  )
}
export default Bug