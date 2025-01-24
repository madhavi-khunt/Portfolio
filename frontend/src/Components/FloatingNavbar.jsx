import React from "react";
import "./FloatingNavbar.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

// import { faHome, faFolder, faClipboard, faEdit } from "@fortawesome/free-solid-svg-icons";

const FloatingNavbar = () => {
  return (
    <div className="floating-navbar">
      <a href="#home">
        <HomeOutlinedIcon className="navbar-icon" />
      </a>
      <a href="#about">
        <InsertDriveFileOutlinedIcon className="navbar-icon" />
      </a>
      <a href="#about">
        <WorkOutlineOutlinedIcon className="navbar-icon" />
      </a>
      <a href="#contact">
        <BuildOutlinedIcon className="navbar-icon" />
      </a>
      <a href="#contact">
        <PhoneOutlinedIcon className="navbar-icon" />
      </a>
    </div>
  );
};

export default FloatingNavbar;
