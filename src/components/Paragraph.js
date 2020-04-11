/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const P = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.08rem;
  line-height: 3rem;
  font-family: "Lexend Deca", sans-serif;
  color: ${props => props.theme.colors.mainDark};
  margin-top: 3rem;

  &:last-child {
    margin-bottom: 6rem;
  }
  @media ${props => props.theme.mediaQueries.largest} {
  }

  @media ${props => props.theme.mediaQueries.smallest} {
    font-size: 1.4rem;
    letter-spacing: 0.04rem;
  }
`;

export default function Paragraph({ children, ...rest }) {
  return <P {...rest}>{children}</P>;
}

Paragraph.propTypes = {
  children: PropTypes.any
};

Paragraph.defaultProps = {
  children: null
};
