import styled from 'styled-components';

const InputMessage = styled.span`
  font-size: 0.8rem;
  color: ${(props) =>
    props.messType === 'error'
      ? 'red'
      : props.messType === 'info'
      ? 'blue'
      : props.theme.colors.green};
`;

export default InputMessage;
