import "./Card.style.css";
import logo from "../../images/logo.svg";
import pict from "../../images/picture.png";
import defaultAvatar from "../../images/avatar.png";
import { useState, useEffect } from "react";

const Card = ({
  info: { id, tweets, user, avatar = defaultAvatar, followers } = {},
}) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    const storageState = JSON.parse(localStorage.getItem("isFollowing")) || [];
    const isFollowing = storageState.find((el) => el === id);
    return isFollowing ? true : false;
  });

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("isFollowing")) || [];
    if (isFollowing) {
      arr.push(id);
      localStorage.setItem("isFollowing", JSON.stringify(arr));
    } else {
      const newArr = arr.filter((el) => el !== id);
      localStorage.setItem("isFollowing", JSON.stringify(newArr));
    }
  }, [isFollowing, id]);

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
        <p className="tweets">
          {new Intl.NumberFormat("en-US").format(tweets)} TWEETS
        </p>
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
