/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const H2 = styled.h2`
  font-size: 2.4rem;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  color: ${props => props.theme.colors.neutral};
  margin-top: 1.5rem;
  position: relative;
`;

export default function SubTitle({ children, ...rest }) {
  return <H2 {...rest}>{children}</H2>;
}

SubTitle.propTypes = {
  children: PropTypes.any
};

SubTitle.defaultProps = {
  children: null
};
