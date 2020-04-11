/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

export const Container = styled.div`
  width: 100%;
  height: ${props => (props.vh ? `100vh` : `auto`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
  transition: all 0.2s;

  &:last-child {
    margin-bottom: 10rem;
  }

  @media ${props => props.theme.mediaQueries.large} {
    padding: 0 5rem;
  }
`;

export default function Layout({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.any
};

Layout.defaultProps = {
  children: null
};
