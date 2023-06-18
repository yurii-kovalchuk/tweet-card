import "./App.css";
import logo from "./logo.svg";
import pict from "./picture.png";

function App() {
  return (
    <div className="card">
      <img src={logo} alt="logo" className="logo" />
      <div className="pictWrap">
        <img src={pict} alt="social media icons" />
      </div>
      <div className="line">
        <div className="avatarWrap">
          <img className="avatar" alt="avatar" />
        </div>
      </div>
      <div className="info">
        <p className="tweets">777 TWEETS</p>
        <p className="followers">100,500 FOLLOWERS</p>
        <button type="button" className="btn">
          FOLLOW
        </button>
      </div>
    </div>
  );
}

export default App;
