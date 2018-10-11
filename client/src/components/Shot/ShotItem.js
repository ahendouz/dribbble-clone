import React from "react";
import { Link } from "react-router-dom";

const ShotItem = ({ _id, name }) => {
    // console.log(_id)
  return (
    <li>
      <Link to={`/shot/${_id}`}>
        <h4>{name}</h4>
      </Link>
    </li>
  );
};
export default ShotItem;
