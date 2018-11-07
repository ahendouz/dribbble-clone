import Styled from "styled-components";

export const Form = Styled.form`
  padding: 2rem;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > input, fieldset {
    margin-bottom: 1.3rem;
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: ${props => props.theme.gray3};
    border: none;
    background: rgba(0,0,0,0.07);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
    font-size: 16px;
    ::placeholder {
      color: ${props => props.theme.gray5};
    }
    @media (max-width: ${props => props.theme.breakPoint14}) {
      /* HERE */
        font-size: 14px;
      };
  }
  > fieldset {
    > label {
      @media (max-width: ${props => props.theme.breakPoint19}) {
        width: 170px;
        .input {
          width: 100%
        }
      };
      display: flex;
      flex-direction: column;
      align-items: start;
      color: #757575;
      p {
        font-size: 1.1rem;
        color: ${props => props.theme.highlight2};
      }
      img {
        padding: 1.3rem 0;
      }
    }
  }
  .submitBtn {
    align-self: center;
    padding: 1.3rem 1.8rem;
  }
`;
