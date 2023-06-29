import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardList } from "../../components/CardList/CardList";

import "./Tweets.style.css";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
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
  return (
    <div>
      <button type="button" className="btnTweets btnBack" onClick={onBack}>
        Back
      </button>
      {isLoading ? (
        <div>Loading, please wait...</div>
      ) : (
        <>
          <CardList users={users.slice(0, pagination)} />
          <button type="button" className="btnTweets" onClick={handleClick}>
            Load More
          </button>
        </>
      )}
    </div>
  );
};
