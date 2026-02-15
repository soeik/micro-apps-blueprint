import { Link } from "react-router";

export const App = () => {
  return (
    <ul>
      <li>
        <Link to="/app/dealsList">Deals list</Link>
      </li>
      <li>
        <Link to="/app/tasksList">Tasks list</Link>
      </li>
    </ul>
  );
};
