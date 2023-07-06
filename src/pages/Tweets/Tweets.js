import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { CardList } from "../../components/CardList/CardList";
import "./Tweets.style.css";
import { getFollowedFromLocalStorage } from "../../utils/getFollowedFromLocalStorage";

const options = [
  { value: "all", label: "Show all" },
  { value: "follow", label: "Follow" },
  { value: "followings", label: "Followings" },
];

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("all");
  const [pagination, setPagination] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      setIsLoading(true);
      try {
        const resp = await fetch(
          `https://63fc8dd6677c4158730e5bf6.mockapi.io/my-api/users`
        );
        const result = await resp.json();
        setUsers(result);
      } catch (e) {
        console.error(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCards();
  }, []);

  const handleClick = () => {
    setPagination((state) => state + 3);
  };

  const onBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    setSelectValue(e.value);
  };

  const filteredUsers = () => {
    const followedFromStorage = getFollowedFromLocalStorage();

    switch (selectValue) {
      case "follow":
        return users.filter((user) => !followedFromStorage.includes(user.id));
      case "followings":
        return users.filter((user) => followedFromStorage.includes(user.id));
      default:
        return users;
    }
  };

  const visibleUsers = filteredUsers();

  return (
    <div>
      <button type="button" className="btn btnBack" onClick={onBack}>
        Back
      </button>
      {isLoading ? (
        <div>Loading, please wait...</div>
      ) : (
        <>
          <Select
            options={options}
            onChange={handleChange}
            defaultValue={options[0]}
          />
          <CardList users={visibleUsers.slice(0, pagination)} />
          {visibleUsers.length > pagination && (
            <button type="button" className="btn" onClick={handleClick}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Tweets;
