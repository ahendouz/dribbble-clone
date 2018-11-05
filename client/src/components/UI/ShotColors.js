import React from "react";
import Styled from "styled-components";

const ShotColors = () => {
  return (
    <Colors>
      <li class="color" style={{ backgroundColor: "#ECCBD1" }} />
      <li class="color" style={{ backgroundColor: "#050406" }} />
      <li class="color" style={{ backgroundColor: "#DCA3AF" }} />
      <li class="color" style={{ backgroundColor: "#B5523A" }} />
      <li class="color" style={{ backgroundColor: "#8E9EA6" }} />
      <li class="color" style={{ backgroundColor: "#134BA2" }} />
      <li class="color" style={{ backgroundColor: "#C6A8C2" }} />
      <li class="color" style={{ backgroundColor: "#443748" }} />
    </Colors>
  );
};
export default ShotColors;

const Colors = Styled.ul`
    display: flex;
    overflow: hidden;
    border-radius: 4px;
    li {
        width: 2.7rem;
        height: 1.8rem;
    }
`;
