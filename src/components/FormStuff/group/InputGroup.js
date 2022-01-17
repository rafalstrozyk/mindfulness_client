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
      top: 30px;
      left: 15px;
    }
  }

  .label {
    position: absolute;
    top: 30px;
    left: 15px;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
  }

  .field:focus {
    ~ .label {
      position: absolute;
      top: 5px;
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
