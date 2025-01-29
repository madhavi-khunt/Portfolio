import React from "react";
import profileImage from "../assets/mk.png"; // Adjust the path based on your folder structure
import { FaDribbble, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import icons

const ProfileCard = () => {
  return (
    <div className="profile-card">
    <img src={profileImage} alt="Profile" />
    <h2>Madhavi Khunt</h2>
    <p>A Software Engineer who has developed countless innovative solutions.</p>
    <div className="social-icons">
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
          <FaDribbble />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="mailto:someone@example.com">
          <FaEnvelope />
        </a>
      </div>
  </div>
  );
};

export default ProfileCard;
