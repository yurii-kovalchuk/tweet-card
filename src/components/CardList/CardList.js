import { Card } from "../Card/Card";

import "./CardList.style.css";

export const CardList = ({ users }) => {
  return (
    <ul className="list">
      {users.map((user) => (
        <li key={user.id}>
          <Card info={user} />
        </li>
      ))}
    </ul>
  );
};
