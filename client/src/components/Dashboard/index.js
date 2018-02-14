import React from 'react';
import './index.css';

const DashboardHeader = () => (
    <div className="dashboard-header">
        <div>Hi, Lizzy!</div>
        <h2 className="font-bold">Check your results</h2>
        <div className="">
            <span className="font-bold pr2">Your results:</span> 
            <span className="pr1">Height</span>
            <span className="font-bold pr2">5'5''</span>
            <span className="pr1">Weight</span>
            <span className="font-bold pr2">150 Lb</span>
            <span className="pr1">BMI</span>
            <span className="font-bold pr2">23</span>
        </div>
    </div>
)

const DashboardResult = () => (
    <div className="dashboard-bottom">
    </div>
)

const Dashboard = () => (
    <div>
        <DashboardHeader/>
        <DashboardResult/>
    </div>
)

export default Dashboard;