import React from "react";
import styled,{css} from "styled-components";

const ButtonWrapper = styled.button`
  color: #ffffff;
  background: transparent;
  border: 1px solid gray;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ br }) => (br === "square" ? "10px" : br === "half-hold" ? "40px" : "5px")};
`;
//br - sqare, semisquare, half-hold
const Button = ({ text, startIcon, endIcon, clickHandler, style, br }) => {
  return (
    <ButtonWrapper style={style} onClick={clickHandler} br={`${br}`}>
      {startIcon}
      {text}
      {endIcon}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
    startIcon: null,
    endIcon: null,
    clickHandler: () => {},
    style: {},
    br: "square",
  };
export default Button;
