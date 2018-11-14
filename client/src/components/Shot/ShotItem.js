import React from "react";
import { Link } from "react-router-dom";

import { Shot } from "../../styles/Shot";
import { formatDate } from "../formatDate.js";
import LikeShot from "./LikeShot";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";

const ShotItem = ({
  _id,
  image,
  name,
  description,
  createDate,
  likes,
  fullname,
  userImg,
  props
}) => {
  return (
    <Shot>
      <div className="shotContainer">
        <div className="shotImg" style={{ backgroundImage: `url(${image})` }}>
          <Link to={`/shot/${_id}`}>
            <div className="shotInfo">
              <h4 className="shotName">{name}</h4>
              <p className="shotDescription">
                {description.length > 120
                  ? `${description.slice(0, 120)}...`
                  : description}
              </p>
              <p className="date">{formatDate(createDate)}</p>
            </div>
          </Link>
        </div>
        <div className="down">
          <Link to={`/shot/${_id}`}>
            <p>{name.length > 29 ? `${name.slice(0, 29)}...` : name}</p>
          </Link>
          <div className="like">
            <p className="likesNum">{likes}</p>
            <LikeShot _id={_id} btnType="heart" />
          </div>
        </div>
      </div>
      <div className="shotUser">
        <div className="userImg">
          <img src={userImg} alt="user" />
        </div>
        <FullnameHighlighted className="fullname">
          {fullname}
        </FullnameHighlighted>
      </div>
    </Shot>
  );
};

export default ShotItem;
