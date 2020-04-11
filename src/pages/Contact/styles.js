import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: Roboto;
    font-size: 12px;

    line-height: 1.17;
    text-align: center;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.main};
  text-decoration: none;
  outline: none;
  &:active {
    outline: none;
  }
  svg {
    margin-right: 1rem;
  }
`;

export const Credits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.main};
  text-decoration: none;
  outline: none;
  svg {
    margin: 0 5px;
  }
`;
