import React from 'react'
import './Highlights.css'
import Monthly from './monthly/Monthly'

const Highlights = () => {
  return (
    <>
      <div className="highlight-container">
        <div className="highlight-main-container">
          <div className="highlight-border">
            <div>
              <h3 id="highlight-title">Highlights</h3>
              <ul className="user-detail">
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/1.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Beck Collier</p>
                      <button className="after-name">$152
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$750</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/2.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Angelo Hume</p>
                      <button className="after-name">$53</button>
                    </div>
                  </div>
                  <h3 className="price-tag">$542</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/2.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Saim Melendez</p>
                      <button className="after-name">$239
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$874</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/3.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Primrose Navarro</p>
                      <button className="after-name">$21
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$348</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/4.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Finnlay Barton</p>
                      <button className="after-name">$381
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$692</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/10.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Johan Corbett</p>
                      <button className="after-name">$74
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$395</h3>
                </li>
                <li className="user-list">
                  <div className="profile-detail">
                    <img src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/9.jpg" alt="" />
                    <div className="name-detail">
                      <p className="user-name">Kaja Wolfe</p>
                      <button className="after-name">$7
              </button>
                    </div>
                  </div>
                  <h3 className="price-tag">$619</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="highlight-border monthly-start">
            <Monthly />
          </div>
        </div>
      </div>
    </>
  )
}

export default Highlights