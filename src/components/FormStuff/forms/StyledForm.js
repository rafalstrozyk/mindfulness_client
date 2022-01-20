import styled from 'styled-components';

const StyledForm = styled.form`
  position: relative;
  & > *:not(:first-child) {
    margin-top: 35px;
  }

  button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default StyledForm;
