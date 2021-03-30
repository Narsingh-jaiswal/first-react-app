import React, { useState } from 'react'
import './header.css'
import dashboard from '../../../assets/dashboard.png'
import magnifier from '../../../assets/magnifier.svg'
import layout from "../../../assets/layout.png";
import componentsimg from "../../../assets/components.png";
import widget from '../../../assets/widget.png'
import widget1 from "../../../assets/widget(1).png";
import arrow from "../../../assets/down-arrow.svg";
import Dropdown_Dashboard from "./dropdown-components/dashboard-dropdown";
import Layout_menu from "./layout-menu/layout_menu";
import Component_menu from "./component-menu/component-menu"

const Header = () => {
	const [display, displayValue] = useState(false);
	const [Layout, LayoutValue] = useState(false);
	const [component, componentsValue] = useState(false);
	window.onclick = (event) => {
		if (event.target.matches(".dashboard")) {
			displayValue(true)
		} else {
			displayValue(false)
		}
		if(event.target.matches('#layout')){
			LayoutValue(true)
			console.log(Layout);
		}else{
			LayoutValue(false)
		}
		if(event.target.matches('#components')){
			componentsValue(true)
			console.log(Layout);
		}else{
			componentsValue(false)
		}		
	}
	console.log(display);
	return (
		<>
			<div className="hearder-container">
				<div className="content-container">
					<div className="header-logo">
						<a href="#" id="img-a"><img className="logo" src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/logo.png" alt="" /></a>
					</div>
					<div className="header-main-list-container">
						<ul className="header-list">
							<li className="main-content">
								<a className="main-content-a" href="#">
									<img src={dashboard} id="dashboard-img" alt="" />
									<strong className="content"><span className="dashboard">Dashboards</span></strong>
									<i className="material-icons nav-arrow">keyboard_arrow_down</i>									
								</a>								
								<span className="border-span-fixed"></span>
								{display &&
									<div className="Dashboard-div">
										<Dropdown_Dashboard />
									</div>
								}

							</li>
							<li className="main-content">
								<a className="main-content-a" href="#">
									<img src={layout} id="layout-img" alt="" />
									<span className="content" id="layout"> Layouts </span>
									<i className="material-icons nav-arrow">keyboard_arrow_down</i>									
								</a>
								<span className="border-span"></span>
								{Layout &&
									<div className="Dashboard-div">
										<Layout_menu />
									</div>
								}
							</li>
							<li className="main-content">
								<a className="main-content-a" href="#">
									<img src={componentsimg} id="component-img" alt="" />
									<span className="content" id="components">Components</span>
									<i className="material-icons nav-arrow">keyboard_arrow_down</i>
								</a>
								<span className="border-span"></span>
								{component &&
									<div className="Dashboard-div">
										<Component_menu />
									</div>
								}
							</li>
							<li className="main-content">
								<a className="main-content-a" href="#">
									<img src={widget} id="widgets-img" alt="" />
									<span className="content">Widgets</span>
									<i className="material-icons nav-arrow">keyboard_arrow_down</i>
								</a>
								<span className="border-span"></span>
							</li>
						</ul>
						<div className="header-right-container">
							<div className="search-bar-container">
								<img className="magnifier" src={magnifier} alt="" set="" />
								<input type="text" id="search-bar" placeholder="Search..." />
							</div>
							<div className="header-buttons">
								<button className="btn-style1">
									<img src={widget1} alt="" set="" />
								</button>
								<button className="btn-style2">
									<i className="material-icons">
									notifications_none
									</i>
								</button>
							</div>
							<button id="avtar-btn">
								<img className="avtar" src="https://demo.dashboardpack.com/fiori-html-pro/assets/images/avatars/3.jpg" alt="" set="" />
								<img className="arrow" src={arrow} alt=""/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header