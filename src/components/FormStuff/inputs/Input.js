import styled from 'styled-components';

const StyledTextInput = styled.input`
  border: 2px solid
    ${(props) => (props.error ? 'red' : props.theme.colors.greenDark)};
  border-radius: 20px;
  outline: none;
  width: 100%;
  padding: ${(props) => props.theme.padding.p1};
  transition: all 0.2s;

  &:focus {
    border-bottom: 4px solid
      ${(props) => (props.error ? 'red' : props.theme.colors.green)};
  }
`;

export default StyledTextInput;
