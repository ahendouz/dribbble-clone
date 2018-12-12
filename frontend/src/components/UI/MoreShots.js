import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Query } from "react-apollo";

const MoreShots = ({ shots, fullname, userId }) => {
  return (
    <MoreShotsContainer>
      <Link to={`/${userId}`}>
        <h3 className="title">More from {fullname}</h3>
      </Link>
      <div>
        {shots.slice(0, 4).map(shot => (
          <div key={shot.id}>
            <Link to={`/shot/${shot.id}`}>
              <img src={shot.image} alt={shot.title} />
            </Link>
          </div>
        ))}
      </div>
    </MoreShotsContainer>
  );
};

export default MoreShots;

const MoreShotsContainer = styled.div`
  h3 {
    color: ${props => props.theme.gray11};
    font-size: 1.47rem;
    margin: 1rem 0;
    text-transform: capitalize;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem 0;
    @media (max-width: ${props => props.theme.breakPoint9}) {
      width: 50%;
    }
    @media (max-width: ${props => props.theme.breakPoint14}) {
      width: 100%;
    }
    > div {
      width: 45%;
      img {
        width: 100%;
      }
    }
  }
`;
