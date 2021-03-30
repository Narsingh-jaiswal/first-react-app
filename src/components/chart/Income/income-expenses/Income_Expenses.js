import React from 'react'
import './Income_Expenses.css'

const Income_Expenses = () => {

  return (
    <>
      <div className="income-expenses-container">
        <button className="income-button income-radius">Income</button>
        <button className="income-button expenses-radius">Expenses</button>
      </div>
      <div className="income-content">
        <h3 id="title">Tabbed Content</h3>
        <p id="subtitle-income">Exalple of various options built with Fiori</p>
        <div className="sales-client">
          <div className="sales">
            <div className="monthly-goal">
              <h4 className="monthly-content">Sales</h4>
              <h4 className="monthly-content goal-color">Monthly Goals</h4>
            </div>
            <h4 className="monthly-percentage goal-color">
              <i className="material-icons monthly-expand">expand_less</i>
            175%</h4>
            <h1 className="monthly-content monthly-expense">$976
              <i className="material-icons">expand_less</i>
            </h1>
          </div>
          <div className="client">
            <div className="monthly-goal">
              <h4 className="monthly-content">Clients</h4>
              <h4 className="monthly-content percentage-color">Returning</h4>
            </div>
            <h4 className="monthly-percentage percentage-color">45
            <i className="material-icons monthly-expand">expand_less</i>
            </h4>            
            <h1 className="monthly-content percentage-color">84%
            <i className="material-icons">expand_less</i>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Income_Expenses