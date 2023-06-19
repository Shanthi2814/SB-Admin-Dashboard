import React from 'react'
import Navbar from './Navbar'
import Card from './Card';
import Chart from './Chart';
import Project from './Project';


function Dashboard() {
  const CardData = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40,000",
      theme: "primary",
      icon: "fas fa-calendar",
    },
    {
      title: "Earnings (Annual)",
      price: "$215,000",
      theme: "success",
      icon: "fas fa-dollar-sign",
    },
    {
      title: "Tasks",
      price: "50%",
      theme: "info",
      icon: "fas fa-clipboard-list",
    },
    {
      title: "Pending Requests",
      price: "18",
      theme: "warning",
      icon: "fas fa-comments",
    },
  ];
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 py-2">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <div className='d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm'>
        <i className="fas fa-download fa-sm text-white-50" />
        <span> Generate Report </span>

        </div>
          
      
      </div>
      <div className="row">
        {CardData.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </>
      </div>
     <Chart/>
      <Project/>
      
   
    </div>
  )
}

export default Dashboard