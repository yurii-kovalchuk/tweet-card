import "./App.css";
import logo from "./logo.svg";
import pict from "./picture.png";
import avatar from "./avatar.png";
import { useState, useEffect } from "react";

const storageState = () => {
  return JSON.parse(localStorage.getItem("isFollowing")) || false;
};

function App() {
  const [isFollowing, setIsFollowing] = useState(storageState);
  const initNum = 100500;

  useEffect(() => {
    localStorage.setItem("isFollowing", JSON.stringify(isFollowing));
  }, [isFollowing]);

  const handleClick = () => {
    setIsFollowing(isFollowing ? false : true);
  };

  const followersNumber = isFollowing ? initNum + 1 : initNum;
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
        <p className="tweets">777 TWEETS</p>
        <p className="followers">
          {new Intl.NumberFormat("en-US").format(followersNumber)} FOLLOWERS
        </p>
        <button type="button" className={btnClasses} onClick={handleClick}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default App;
