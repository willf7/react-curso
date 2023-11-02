import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Paragrafo = styled.p`
  font-size: 20px;
`;
