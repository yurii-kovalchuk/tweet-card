import "./Card.style.css";
import logo from "../../images/logo.svg";
import pict from "../../images/picture.png";
import defaultAvatar from "../../images/avatar.png";
import { useState, useEffect } from "react";

const storageState = () => {
  return JSON.parse(localStorage.getItem("isFollowing")) || false;
};

const Card = ({ info: { tweets, user, avatar, followers } = {} }) => {
  const [isFollowing, setIsFollowing] = useState(storageState);

  useEffect(() => {
    localStorage.setItem("isFollowing", JSON.stringify(isFollowing));
  }, [isFollowing]);

  const handleClick = () => {
    setIsFollowing(isFollowing ? false : true);
  };

  const followersNumber = isFollowing ? followers + 1 : followers;
  const btnClasses = isFollowing ? "btn btn-following" : "btn";
  const btnText = isFollowing ? "FOLLOWING" : "FOLLOW";

  return (
    <div className="card">
      <img src={logo} alt="logo" className="logo" />
      <div className="pictWrap">
        <img src={pict} alt="social media icons" />
      </div>
      <div className="line">
        <div className="avatarWrap">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
      <div className="info">
        <p className="tweets">{tweets} TWEETS</p>
        <p className="followers">
          {new Intl.NumberFormat("en-US").format(followersNumber)} FOLLOWERS
        </p>
        <button type="button" className={btnClasses} onClick={handleClick}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
