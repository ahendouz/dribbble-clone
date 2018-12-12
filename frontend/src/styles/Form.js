import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  input,
  textarea,
  fieldset {
    border: none;
    margin-bottom: 1.3rem;
  }

  input,
  .uploadFieldset,
  .passwordInput,
  textarea {
    padding: 10px 12px;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
    color: ${props => props.theme.gray3};
    background: rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    width: 100%;
    ::placeholder {
      color: ${props => props.theme.gray5};
    }
    @media (max-width: ${props => props.theme.breakPoint14}) {
      /* HERE */
      font-size: 14px;
    }
  }

  input {
    label {
      color: ${props => props.theme.gray3};
    }
  }
  label {
    text-align: left;
    font-size: 1.5rem;
  }
  textarea {
    resize: vertical;
    height: 10rem;
    min-height: 6rem !important;
  }

  .uploadFieldset {
    input {
      font-size: 1.2rem;
      padding: 0;
      background: none;
      box-shadow: none;
    }
    > label {
      display: flex;
      flex-direction: column;
      align-items: start;
      color: #757575;
      @media (max-width: ${props => props.theme.breakPoint19}) {
        width: 170px;
        .input {
          width: 100%;
        }
      }
      p {
        font-size: 1.1rem;
        color: ${props => props.theme.highlight2};
      }
      img {
        padding: 1.3rem 0;
      }
    }
  }

  .passwordFieldset {
    border: none;
    text-align: left;
    p {
      font-size: 1.3rem;
      padding-top: 3px;
      @media (max-width: ${props => props.theme.breakPoint14}) {
        font-size: 1.2rem;
      }
    }
  }

  .submitBtn {
    align-self: center;
    padding: 1.3rem 1.8rem;
  }

  .commentTextarea {
    margin-bottom: 0.9rem;
  }

  .editShotFieldset {
    label {
      color: ${props => props.theme.gray11};
      font-size: 1.6rem;
      font-weight: 500;
    }
    input {
      margin-top: 5px;
    }
  }
`;
