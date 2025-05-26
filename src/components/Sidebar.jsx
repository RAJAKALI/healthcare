import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaCog,
  FaThLarge,
  FaArrowUp,
  FaCommentDots,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { FaChartLine, FaMessage, FaSquarePlus } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="section">
          <h3 className="section-title">General</h3>
          <ul className="nav-list general-nav">
            <li>
              <FaThLarge size={12} /> Dashboard
            </li>
            <li>
              <FaArrowUp />History
            </li>
            <li>
              <FaCalendarAlt /> Calendar
            </li>
            <li>
              <FaSquarePlus /> Appointments
            </li>
            <li>
              <FaChartLine /> Statistics
            </li>
          </ul>
          <div className="middle-section">
            <h3 className="section-title">Tools</h3>
            <ul className="nav-list tools-nav">
              <li>
                <FaCommentDots /> Chat
              </li>
              <li>
                <FaPhoneAlt /> Support
              </li>
            </ul>
          </div>
        </div>

        <div className="settings">
          <FaCog /> Setting
        </div>
      </div>
    </>
  );
};

export default Sidebar;
