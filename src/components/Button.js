/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledButton = styled.a`
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
  font-family: "Lexend Deca", sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin-top: ${props => (props.margin ? "2.5rem" : "1rem")};
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

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.propTypes = {
  children: PropTypes.any
};

Button.defaultProps = {
  children: null
};
