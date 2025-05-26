import React from "react";
import { FaSearch, FaBell, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
    <div className="header-left">
      <h1 className="company-title">
        <span className="title-1">Health</span>
        <span className="title-2">care.</span>
      </h1>
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="bell">
      <FaBell className="bell-icon" />
      </div>
     </div>
      <div className="header-right">
        <div className="profile-pic">
          <img
            src="https://img.freepik.com/premium-vector/cheerful-boy-with-curly-hair-smiles-warmly-showcasing-customizable-cartoon-illustration-suitable-various-creative-projects_538213-134485.jpg"
            alt="Kid"
          />
        </div>
        <div className="colored-box"> <FaPlus/> </div>
      </div>
    </div>
  );
};

export default Header;
