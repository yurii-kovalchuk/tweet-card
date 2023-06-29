import { useState } from "react";

import logo from "../../assets/icons/logo.svg";
import pict from "../../assets/images/picture.png";
import defaultAvatar from "../../assets/images/avatar.png";

import "./Card.style.css";

export const Card = ({ info }) => {
  const { id, tweets, avatar = defaultAvatar, followers } = info;
  const storageFollowed = JSON.parse(localStorage.getItem("followed")) || [];

  const [isFollowing, setIsFollowing] = useState(
    storageFollowed.find((userId) => userId === id)
  );
  const [count, setCount] = useState(followers);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);

    if (!isFollowing) {
      storageFollowed.push(id);
      localStorage.setItem("followed", JSON.stringify(storageFollowed));
      setCount((state) => state + 1);
    } else {
      const filteredFollowed = storageFollowed.filter(
        (userId) => userId !== id
      );
      localStorage.setItem("followed", JSON.stringify(filteredFollowed));
      setCount((state) => state - 1);
    }
  };

  const btnClasses = isFollowing ? "btn btnFollowing" : "btn";
  const btnText = isFollowing ? "FOLLOWING" : "FOLLOW";
  const formatedValue = (value) => new Intl.NumberFormat("en-US").format(value);

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
        <p>{formatedValue(tweets)} TWEETS</p>
        <p>{formatedValue(count)} FOLLOWERS</p>
        <button type="button" className={btnClasses} onClick={handleFollow}>
          {btnText}
        </button>
      </div>
    </div>
  );
};
