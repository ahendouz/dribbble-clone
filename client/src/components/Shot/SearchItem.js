import React from "react";
import { Link } from "react-router-dom";

const SearchItem = ({_id, name, likes}) => {
  return (
    <li>
      <Link to={`/shot/${_id}`}>
        <h4>{name}</h4>
        <p>{likes}</p>
      </Link>
      <p />
    </li>
  );
};
export default SearchItem;
