import styled from 'styled-components';

const InputGroup = styled.div`
  position: relative;

  .field {
    font-family: inherit;
    width: 100%;
    outline: 0;
    font-size: 1rem;
    background: transparent;
    transition: all 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .label {
      font-size: 1.3rem;
      cursor: text;
      top: 0;
      left: 15px;
    }
  }

  .message {
    position: absolute;
    top: 34px;
    left: 12px;
  }

  .label {
    position: absolute;
    left: 15px;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }

  .field:focus {
    ~ .label {
      position: absolute;
      color: ${(props) => props.theme.colors.green};
      top: -22px;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
    }
  }
  .field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;

export default InputGroup;
