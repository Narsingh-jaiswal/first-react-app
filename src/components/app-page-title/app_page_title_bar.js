import React from 'react'
import './app_page_title_bar.css'

const App_page_title = () => {
  return (
    <>
      <div className="app-page-title">
        <div className="title-container">
          <div className="page-title-border">
            <div className="title-content">
              <strong><h3 id="title">Helpdesk</h3></strong>
              <p id="subtitle">This is an example dashboard created using build-in element and components.</p>
            </div>
            <div className="title-button">
              <button id="star-button">
              &#9733;
              <i className="material-icons arrow-icon">
                arrow_drop_down
              </i>
              </button>
              <button id="add-button">
                &#43;
                <p id="add-btn">Add New</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default App_page_title 