import React from "react";
import styled from "styled-components";
import SVGicon from "../../icons/SVGicon";
import ShotColor from "../UI/ShotColor";

const ShotInfo = ({ likes, colors, tags }) => {
  return (
    <ShotInfoContainer>
      {tags.length > 0 && (
        <div className="tags">
          <SVGicon name="tag" className="tagIcon" />
          <div>
            {tags.map((tag, i) => (
              <p key={i}>{tag}&nbsp;</p>
            ))}
          </div>
        </div>
      )}
      <div className="shotColors">
        <SVGicon name="palette" className="paletteIcon" />
        <ul className="colors">
          {colors.map(color => (
            <ShotColor key={color} hex={color} />
          ))}
        </ul>
      </div>
      <div className="likes">
        <SVGicon name="heart" className="heartIcon" />
        <span className="likeNum">{likes} likes</span>
      </div>
    </ShotInfoContainer>
  );
};

export default ShotInfo;

const ShotInfoContainer = styled.div`
  .tags {
    > div {
      display: flex;
      flex-wrap: wrap;
    }
    > .tagIcon {
      margin-top: 5px;
      align-self: self-start;
    }
  }
  .tags,
  .likes,
  .shotColors {
    display: flex;
    align-items: center;
    padding-bottom: 2rem;
    color: ${props => props.theme.gray12};
    .tagIcon,
    .paletteIcon,
    .heartIcon {
      margin-right: 1rem;
      fill: ${props => props.theme.gray12};
      min-width: 15px;
      height: 100%;
    }
    .likeNum {
      font-size: 1.4rem;
    }
  }
  .shotColors {
    .colors {
      display: flex;
    }
  }
`;
