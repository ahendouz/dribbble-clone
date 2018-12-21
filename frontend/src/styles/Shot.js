import styled from "styled-components";

export const Shot = styled.li`
  text-align: left;
  .shotContainer {
    padding: 1rem 1rem 0 1rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    background: white;
    @media (max-width: ${props => props.theme.breakPoint15}) {
      padding: 0.6rem;
    }
    @media (max-width: ${props => props.theme.breakPoint19}) {
      padding: 0.4rem;
    }
    .shotImg {
      position: relative;
      overflow: hidden;
      height: 16rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      @media (max-width: ${props => props.theme.breakPoint16}) {
        height: 14rem;
      }
      @media (max-width: ${props => props.theme.breakPoint17}) {
        height: 12rem;
      }
      @media (max-width: ${props => props.theme.breakPoint18}) {
        height: 10rem;
      }
      @media (max-width: ${props => props.theme.breakPoint19}) {
        height: 9rem;
      }
      @media (max-width: ${props => props.theme.breakPoint20}) {
        height: 8rem;
      }
      @media (max-width: ${props => props.theme.breakPoint21}) {
        height: 7rem;
      }
      &:hover div {
        visibility: visible;
      }
      .shotInfo {
        background-color: white;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
        display: flex;
        flex-direction: column;
        text-align: start;
        justify-content: space-around;
        padding: 1rem;
        font-weight: inherit;
        font-size: 1.1rem;
        .shotName {
          font-size: 1.5rem;
          color: ${props => props.theme.gray3};
        }
        .shotDescription {
          font-size: 1.1rem;
        }
        .shotDescription,
        .date {
          color: ${props => props.theme.gray5};
        }
        .date {
          font-size: 1.2rem;
        }
      }
    }
    .down {
      display: flex;
      padding: 0.4rem 0 0.7rem 0;
      font-size: 1.1rem;
      @media (max-width: ${props => props.theme.breakPoint15}) {
        display: none;
      }
      > a {
        margin-right: auto;
      }
      > div:not(:last-of-type) {
        margin-right: 4px;
      }
      .like,
      .comment {
        display: flex;
        align-items: center;
        .likesNum,
        .commentsNum {
          line-height: 0;
          padding-left: 4px;
          font-size: 1.3rem;
        }
        svg {
          width: 13px;
          height: 13px;
        }
        > button {
          line-height: 0;
        }
        div {
          line-height: 1;
          margin-top: 1.9px;
        }
        > div {
          line-height: 0.7;
          cursor: pointer;
        }
      }
    }
  }
  .shotUser {
    margin: 0.6rem 0 0 0.6rem;
    display: flex;
    align-items: center;
    @media (max-width: ${props => props.theme.breakPoint15}) {
      display: none;
    }
    .fullname {
      margin-left: 0.5rem;
    }
  }
  > div:last-of-type {
    display: inline-table;
  }
`;
