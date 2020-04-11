import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 0;
  }
`;

export const TechList = styled.ul`
  padding: 1.5rem;
  list-style: none;
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
export const TechItem = styled.li`
  padding: 1rem;
  margin-top: 0.6rem;
  border-radius: 3px;
  font-size: 1.8rem;
  margin-right: 1rem;
  font-family: "Roboto";
  color: ${theme.colors.white};

  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 1rem;
    font-size: 1.4rem;
  }

  &:last-child {
    margin-right: 0;
  }

  background: ${theme.colors.main};
`;
