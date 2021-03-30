import React from 'react'
import left_align from "./../../assets/left-align.png";
import right_align from "./../../assets/right-align.png";
import "./App_inner_bar.css";

const App_inner_bar = (props) => {
  function show() {
    props.sidebarfun(!props.sidebarVar)
  }
  return (
    <>
      <div className="app-inner">
        <div className="app-inner-container">
          <ul className="app-inner-nav">
            <li>
              <a href="#" className="nav-item-data-a">
                <img className="nav-left-image" src={left_align} alt="" />
                {!props.sidebarVar &&<span className="left-bar-btn" onClick={show}>Show Page Menu</span>}
                {props.sidebarVar &&<span className="left-bar-btn" onClick={show}>Close Page Menu</span>}
              </a>
            </li>
          </ul>
          <ul className="nav-item-data">
            <li className="nav-item-display-data">
              <a className="nav-item-data-a">Overview</a>
            </li>
            <li className="nav-item-display-data">
              <a className="nav-item-data-a">Audiences</a>
            </li>
            <li className="nav-item-display-data">
              <a className="nav-item-data-a">Demographics</a>
            </li>
            <li className="nav-item-display-data">
              <a className="nav-item-data-a">More</a>
            </li>
          </ul>
          <ul className="app-inner-nav">
            <li>
              <a href="#" className="nav-item-data-a">
                <span className="left-bar-btn">Show right Menu</span>
                <img className="nav-right-image" src={right_align} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App_inner_bar