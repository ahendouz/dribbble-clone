import Styled from "styled-components";

export const Form = Styled.div`
  padding: 2rem;
  form {
    display: flex;
    flex-direction: column;
    > input, fieldset {
      margin-bottom: 1.3rem;
      padding: 10px 12px;
      font-family: "Haas Grot Text R Web","Helvetica Neue",Helvetica,Arial,sans-serif;
      color: ${props => props.theme.gray5};
      border: none;
      background: rgba(0,0,0,0.07);
      border-radius: 6px;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
      font-size: 16px;
    }
    > fieldset {
      > label {
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
 }
`;
