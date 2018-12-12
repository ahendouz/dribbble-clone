import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <h3>
        <Link to="coming-soon">Hiring at Dribbble</Link>
      </h3>
      <ul>
        <li>
          <Link to="coming-soon">Post a job</Link>
        </li>
        <li>
          <Link to="coming-soon">Search designers</Link>
        </li>
        <li>
          <Link to="coming-soon">Add your team</Link>
        </li>
      </ul>
    </div>
  );
};
export default Links;
