import styled from 'styled-components';

const Label = styled.label`
  color: ${(props) => props.error && 'red !important'};
`;

export default Label;
