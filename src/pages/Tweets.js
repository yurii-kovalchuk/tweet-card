import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import "../App.css";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const getCards = async () => {
      try {
        const resp = await fetch(
          `https://63fc8dd6677c4158730e5bf6.mockapi.io/my-api/users`
        );
        const result = await resp.json();
        setUsers(result);
      } catch (e) {
        console.error(e.message);
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
      <button type="button" onClick={onBack}>
        Back
      </button>
      <CardList users={users.slice(0, pagination)} />
      <button type="button" onClick={handleClick} className="btnLoadMore">
        Load More
      </button>
    </div>
  );
};
