import "./App.css";
import CardList from "./components/CardList/CardList";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(3);

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
  return (
    <div>
      <CardList users={users.slice(0, pagination)} />
      <button type="button" onClick={handleClick} className="btnLoadMore">
        Load More
      </button>
    </div>
  );
}

export default App;
