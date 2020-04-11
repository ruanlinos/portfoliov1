/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const H1 = styled.h1`
  font-size: 4.2rem;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  color: ${props =>
    props.blue ? props.theme.colors.main : props.theme.colors.mainDark};
`;

export default function Title({ children, ...rest }) {
  return <H1 {...rest}>{children}</H1>;
}

Title.propTypes = {
  children: PropTypes.any
};

Title.defaultProps = {
  children: null
};
