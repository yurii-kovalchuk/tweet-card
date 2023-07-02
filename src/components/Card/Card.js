import { useState } from "react";

import { getFollowedFromLocalStorage } from "../../utils/getFollowedFromLocalStorage";
import { setFollowedToLocalStorage } from "../../utils/setFollowedToLocalStorage";
import { getIsFollowingFromLocalStorage } from "../../utils/getIsFollowingFromLocalStorage";

import "./Card.style.css";

import logo from "../../assets/icons/logo.svg";
import pict from "../../assets/images/picture.png";
import defaultAvatar from "../../assets/images/avatar.png";

export const Card = ({ info }) => {
  const { id, tweets, avatar = defaultAvatar, followers } = info;

  const [isFollowing, setIsFollowing] = useState(
    getIsFollowingFromLocalStorage(id)
  );
  const [count, setCount] = useState(followers);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    const storedFollowed = getFollowedFromLocalStorage();

    if (!isFollowing) {
      const updatedFollowed = [...storedFollowed, id];
      setFollowedToLocalStorage(updatedFollowed);

      setCount((state) => state + 1);
    } else {
      const filteredFollowed = storedFollowed.filter((userId) => userId !== id);
      setFollowedToLocalStorage(filteredFollowed);

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
