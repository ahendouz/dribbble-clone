import React, { Component, Fragment } from "react";
import { ApolloConsumer } from "react-apollo";
import { gql } from "apollo-boost";
import styled from "styled-components";
import { Link } from "react-router-dom";

const USER_HOVER = gql`
  query($id: ID!) {
    user(where: { id: $id }) {
      id
      fullname
      profileImage
      location
      shots {
        id
        image
      }
    }
  }
`;

class UserHover extends Component {
  state = {
    userInfo: {},
    visibility: false
  };

  handleMoseOver = async (e, client) => {
    const { userId: id } = this.props;
    if (!this.state.userInfo.data) {
      const res = await client.query({
        query: USER_HOVER,
        variables: { id }
      });
      this.setState({
        userInfo: res
      });
      console.log(res);
    }
  };
  handleMouseLeave = (el, e) => {
    this.setState({ userInfo: {} });
  };
  render() {
    const { children, session, userId } = this.props;
    const { data } = this.state.userInfo;
    return (
      <ApolloConsumer>
        {client => {
          return (
            <div
              onMouseOver={e => {
                e.persist();
                this.handleMoseOver(e, client);
              }}
              onMouseLeave={e => this.handleMouseLeave(this, e)}
            >
              {children}
              {data && (
                <UserHoverInfo>
                  <ul className="shots">
                    {data.user.shots.slice(0, 4).map(shot => (
                      <Link to={`/shot/${shot.id}`} key={shot.id}>
                        <li style={{ backgroundImage: `url(${shot.image})` }}>
                          {/* <img src={shot.image} alt="shot" /> */}
                        </li>
                      </Link>
                    ))}
                    <div>
                      <div>
                        <img
                          src={data.user.profileImage}
                          alt={data.user.fullname}
                        />
                      </div>
                    </div>
                  </ul>
                  <h2>{data.user.fullname}</h2>
                  <p>{data.user.location}</p>
                </UserHoverInfo>
              )}
            </div>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default UserHover;

const UserHoverInfo = styled.div`
  text-align: center;
  background: white;
  position: absolute;
  z-index: 2;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow1};
  border-radius: 4px;
  margin-left: -50px;
  margin-top: 4px;
  cursor: pointer;
  .shots {
    display: flex;
    position: relative;
    margin-bottom: 3rem;
    height: 7rem;
    justify-content: center;
    li {
      width: 9rem;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    > div {
      padding: 0.4rem;
      position: absolute;
      width: 60px;
      height: 60px;
      background: white;
      border-radius: 50%;
      left: calc(50% - 29px);
      top: 60%;
      > div {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
    }
  }
  > h2,
  > p {
    color: ${props => props.theme.gray11};
  }
  > p {
    font-weight: 400;
    color: ${props => props.theme.gray3};
  }
`;
