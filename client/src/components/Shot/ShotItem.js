import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

import { Card } from "../../styles/Card";
import { date } from "../Date";
import LikeShot from "./LikeShot";
import { UsernameHighlighted } from "../../styles/UsernameHighlighted";

const ShotItem = ({
  _id,
  imageUrl,
  name,
  description,
  createDate,
  likes,
  username,
  props
}) => {
  return (
    <Card>
      <div className="container">
        <div className="shotImg">
          <img src={imageUrl} alt="shot" />
          <Link to={`/shot/${_id}`}>
            <div className="shotInfo">
              <h4 className="shotName">{name}</h4>
              <p className="shotDescription">
                {description.slice(0, 120)}
                ...
              </p>
              <p>{date(createDate)}</p>
            </div>
          </Link>
        </div>
        <div className="shotInfo">
          <Link to={`/shot/${_id}`}>
            <p>
              {name.slice(0, 29)}
              ...
            </p>
          </Link>
          <div className="like">
            <p className="likesNum">{likes}</p>
            <LikeShot _id={_id} btnType="heart" />
          </div>
        </div>
      </div>
      <UsernameHighlighted className="username">{username}</UsernameHighlighted>
    </Card>
  );
};

export default ShotItem;

    