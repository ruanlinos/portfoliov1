import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.7rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.light};

  @media ${props => props.theme.mediaQueries.large} {
    padding: 3rem 0;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 2.4rem;
    color: ${props => props.theme.colors.mainDark};
    padding-bottom: 5.2rem;
    @media ${props => props.theme.mediaQueries.large} {
      padding: 3rem;
    }
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media ${props => props.theme.mediaQueries.medium} {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      max-width: 50rem;
      width: 100%;
      box-shadow: 3px 6px 25px -10px rgba(0, 0, 0, 0.5);
    }

    div.info {
      max-width: 40rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: right;
      @media ${props => props.theme.mediaQueries.medium} {
        text-align: center;
        align-items: center;
        width: 100%;
        max-width: 50rem;
      }
      p {
        font-size: 16px;
        line-height: 20px;
        font-family: "Lexend Deca", sans-serif;
        color: ${props => props.theme.colors.mainDark};
        @media ${props => props.theme.mediaQueries.medium} {
          margin-top: 3rem;
        }
        @media ${props => props.theme.mediaQueries.smallest} {
          font-size: 1.4rem;
          letter-spacing: 0.04rem;
        }
      }
      strong {
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        color: ${props => props.theme.colors.mainDark};
      }
      .ButtonWrapper {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        svg {
          margin-right: 5px;
        }
        a:first-child {
          margin-right: 15px;
        }
        @media ${props => props.theme.mediaQueries.medium} {
          margin-top: 3rem;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
