import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import Styled from "styled-components";
import { GET_SHOT } from "../../queries";
import { formatDate } from "../Profile/UserInfo";

import LikeShot from "./LikeShot";

const ShotPage = ({ match }) => {
  const { _id } = match.params;
  // console.log(_id);
  return (
    <Query query={GET_SHOT} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data);
        const {
          _id,
          imageUrl,
          name,
          description,
          createDate,
          likes,
          username
        } = data.getShot;
        return (
          <Container style={{ fontSize: "1.3rem" }}>
            <Header>
              <div className="container">
                <HeaderTex>
                  <h2>{name}</h2>
                  <p>
                    by <span>{username} </span>
                    on {formatDate(createDate)}
                  </p>
                </HeaderTex>
                <button>Like</button>
              </div>
            </Header>
            <Shot>
              <img src={imageUrl} alt="shot image" />
            </Shot>
            <Description>
              <div className="container">
                <p>{description}</p>
              </div>
            </Description>
            {/* <LikeShot _id={_id} /> */}
          </Container>
        );
      }}
    </Query>
  );
};
export default withRouter(ShotPage);

const Container = Styled.div`
  font-size: 1.4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = Styled.div`
  background: #f4f4f4;
  height: 10rem;
  display: flex;
  align-items: center;
  > div {
    display: flex;
    justify-content: space-between
    > button {
      align-self: center
      background-color: white;
      color: #777;
      border: 1px solid #bdbdbd;
      border-radius: 5px;
      padding: 1rem 1.3rem;
      font-size: 1.4rem;
      font-weight: 600;    
      outline: none     
    }
  }
`;
const HeaderTex = Styled.div`
  h2 {
    color: #444;
  }
  > p {
    span {
      color: #1d81bdbd;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;
const Shot = Styled.div`
  padding: 2rem 0;
  width: 45rem;
  margin: 0 auto;
  > img {
    width: 100%
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
  }
`;
const Description = Styled.div`
  background: #f4f4f4;
  flex: 1
  p {
    width: 46rem;
    padding: 1rem 0
  }
`;
