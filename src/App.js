import './App.css';
import { Topbar } from "./components/top-bar/top_bar";
import App_page_title from "./components/app-page-title/app_page_title_bar";
import App_inner_bar from "./components/app-inner-bar/App_inner_bar"
import Sidebar from "./components/sidebar/sidebar"
import Chart from './components/chart/Chart'
import { useState } from 'react';

function App() {
  const [sidebar, setsidebar] = useState(false) 
  return (
    <>
      <Topbar />
      <App_page_title />
      <App_inner_bar sidebarfun = {setsidebar} sidebarVar = {sidebar}  />
      <div className="sidebar-chart-container">
        { sidebar &&
          <Sidebar />
        }
        <Chart />
      </div>
    </>
  );
}

export default App;
