import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-scroll';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 112rem;
  width: 100%;
`;
export const TitleWrapper = styled(animated.div)`
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Techs = styled.div``;

export const Imagem = styled.img`
  display: flex;
  width: 90%;
  max-width: 70rem;
  background: no-repeat cover;
  @media ${props => props.theme.mediaQueries.large} {
    max-width: 70rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    max-width: 50rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  font-weight: 600;
  width: 110px;
  position: relative;
  display: inline-block;
  text-align: center;
  font-style: italic;
  color: var(--text-highlight);
  transition: color 0.2s ease-out;

  & span {
    text-align: center;
    width: 100%;
  }
`;

export const StyledButton = styled(Link)`
  width: 11.6rem;
  height: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.main};
  color: #fff;
  padding: 0.6rem 2rem;
  border: 0;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2.5rem;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }
`;
