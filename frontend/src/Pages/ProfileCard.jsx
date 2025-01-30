// import "./ProfileCard.css";
import profileImage from "../assets/mk.png";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" />
      <h2>Aabid Ahmed</h2>
      <p>A Software Engineer who has developed countless innovative solutions.</p>
    </div>
  );
};

export default ProfileCard;
