import React from "react";
import { FaAngleDown, FaArrowDown, FaArrowRight, FaSearchPlus } from "react-icons/fa";
import Activity from "./Activity";
import anatomy from "../assets/anotomy.png";
import { parts } from "../data/parts.jsx";

const LeftDashBoard = () => {
  return (
    <div className="left-dashboard">
     <div className="left-dashboard-header">
      <h2 className="dashboard-title">Dashboard</h2>
      <p className="dashboard-week">This week <FaAngleDown/></p>
     </div>
      <div className="top-section">
        <div className="anatomy-container">
            <FaSearchPlus size={20} className="plus"/>
          <img
            src={anatomy}
            alt="Anatomy"
            className="anatomy-img"
          />
          <span className="badge heart"><p style={{ color: 'red' }}>❤</p>Healthy Heart</span>
          <span className="badge leg">🦵 Healthy Leg</span>
        </div>

        <div className="cards-container">
          {parts.map((part) => (
            <div key={part.name} className="health-card">
              <div className="card-top">
                <img src={part.icon} alt={part.name} className="card-icon" />
                <div className="card-name">{part.name}</div>
                </div>
                <div>
                  <div className="card-date">{part.date}</div>
                </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: part.progress, backgroundColor: part.color }}
                ></div>
              </div>
            </div>
          ))}
           <div className="details-container">
           <p className="details">Details<FaArrowRight/></p>
           </div>
        </div>
      </div>
        <Activity/>
    </div>
  );
};

export default LeftDashBoard;
