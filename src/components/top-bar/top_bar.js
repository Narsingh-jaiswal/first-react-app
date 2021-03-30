import React from 'react';
import './top_bar.css';
import language from "./../../assets/language.png";
import arrow from "./../../assets/down-arrow.svg";
import Header from "./header/header"

const Topbar = () => {
	return (
		<>		
			<div className="container">
				<div className="top_bar">
					<ul className="nav">
						<li><a className="top-nav-content">DashboardPack.com</a></li>
						<li><a className="top-nav-content">
							<span>Grid Menu</span>
						<i className="material-icons nav-bar-img arrow">keyboard_arrow_down</i>						
						</a></li>
					</ul>
					<ul className="nav">
						<li><a className="top-nav-content">Create Account</a></li>
						<li><a className="top-nav-content">Login</a></li>
						<li><a className="top-nav-content">
							<i className="material-icons nav-bar-img" >language</i>
							<span className="nav-bar-content">Language</span>							
							<i className="material-icons nav-bar-img arrow">keyboard_arrow_down</i>
						</a></li>
					</ul>
				</div>
			</div>
			<Header />
		</>
	)
}

export { Topbar }