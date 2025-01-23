import React from "react";
import profileImage from "../assets/mk.png"; // Adjust the path based on your folder structure

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img  src={profileImage}  alt="Profile" />
      <h2>Madhavi Khunt</h2>
      <p>A Software Engineer who has developed countless innovative solutions.</p>
    </div>
  );
};

export default ProfileCard;
