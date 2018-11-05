import Styled from "styled-components";

export const Shot = Styled.li`
  .username{
    padding-top: 0.8rem;
    padding-left: 2rem;
    @media (max-width: ${props => props.theme.breakPointd}) {
        display: none;
    };
  }
  .shotContainer { 
    padding: 1rem 1rem 0 1rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.07);
    background: white;
    @media (max-width: ${props => props.theme.breakPointd}) {
      padding: 0.6rem;
    };
    @media (max-width: ${props => props.theme.breakPointv}) {
      padding: 0.4rem;
    };
    .shotImg {
        position: relative;
        overflow: hidden;
        height: 16rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        @media (max-width: ${props => props.theme.breakPointm}) {
            height: 14rem;
        }
        @media (max-width: ${props => props.theme.breakPointn}) {
            height: 12rem;
        };
        @media (max-width: ${props => props.theme.breakPointb}) {
            height: 10rem;
        };
        @media (max-width: ${props => props.theme.breakPointv}) {
            height: 9rem;
        };
        @media (max-width: ${props => props.theme.breakPointc}) {
            height: 8rem;
        };
        @media (max-width: ${props => props.theme.breakPointz}) {
            height: 7rem;
        };
        &:hover div {
            visibility: visible
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
            .shotName {
                font-size: 1.5rem;
                color: ${props => props.theme.gray3};
            }
            .shotDescription {
                font-weight: 300
                font-size: 1.1rem;
            }
        }
    }
    .shotInfo {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0 0.7rem 0;
        font-size: 1.1rem;
        @media (max-width: ${props => props.theme.breakPointd}) {
            display: none;
        };
        .like {
            display: flex;
            align-items: center;
            .likesNum {
                line-height: 1;
                padding: 0 3px 0 0;
                font-size: 1.3rem;
            }
            div {
                line-height: 1;
                margin-top: 1.9px;
            }
            > div {
                line-height: 0.7;
                cursor: pointer
            }
        }
    }
  }
`;
