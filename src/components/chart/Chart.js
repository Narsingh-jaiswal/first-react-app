import React from 'react'
import Income from "./Income/Income_report";
import Highlights from "./Highlights/Highilights";
import Simple_table from "./table/simple_table";
import Bug from "./bug/bug";
import "./Chart.css";
import Seller from "./top-seller/top-seller";

const Chart = () => {
  return (
    <>
      <div>
        <div className="charts-main-container">
          <div className="chart-container">
            <Income />
            <Highlights />
          </div>
          <Simple_table />
          <div className="bug-seller">
            <Bug />
            <Seller />
          </div>
        </div>
      </div>
    </>
  )
}
export default Chart