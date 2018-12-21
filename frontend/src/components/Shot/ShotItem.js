import React from "react";
import { Link } from "react-router-dom";

import { Shot } from "../../styles/Shot";
import { formatDate } from "../../lib/formatDate";
import LikeShot from "./LikeShot";
import { FullnameHighlighted } from "../../styles/FullnameHighlighted";
import SVGicon from "../../icons/SVGicon";
import UserImage from "../UI/UserImage";
import UserHover from "../UI/UserHover";

const ShotItem = ({
  id: shotId,
  image,
  title,
  description,
  createdAt,
  likes,
  comments,
  postedBy: { id: userId, fullname, profileImage },
  currentUserId
}) => {
  return (
    <Shot>
      <div className="shotContainer">
        <Link to={`/shot/${shotId}`}>
          <div className="shotImg" style={{ backgroundImage: `url(${image})` }}>
            <div className="shotInfo">
              <h4 className="shotName">{title}</h4>
              <p className="shotDescription">
                {description.length > 120
                  ? `${description.slice(0, 120)}...`
                  : description}
              </p>
              <p className="date">{formatDate(createdAt)}</p>
            </div>
          </div>
        </Link>
        <div className="down">
          <Link to={`/shot/${shotId}`}>
            <p>{title.length > 24 ? `${title.slice(0, 24)}...` : title}</p>
          </Link>
          <div className="comment">
            <SVGicon name="comment" fill="#bbbbbb" />

            <p className="commentsNum">{comments.length}</p>
          </div>
          <div className="like">
            <LikeShot
              shotId={shotId}
              btnType="heart"
              currentUserId={currentUserId ? currentUserId : null}
            />
            <p className="likesNum">{likes}</p>
          </div>
        </div>
      </div>
      <UserHover userId={userId}>
        <div className="shotUser" style={{ position: "relative" }}>
          <UserImage profileImage={profileImage} size="1.5rem" />
          <Link to={`/${userId}`}>
            <FullnameHighlighted className="fullname">
              {fullname}
            </FullnameHighlighted>
          </Link>
        </div>
      </UserHover>
    </Shot>
  );
};

export default ShotItem;
