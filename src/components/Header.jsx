import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderWrapper = styled.header`
    position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5% 8%;
  color: #fff;
  div {
    font-size: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  svg {
    height: 28px;
    width: 28px;
    cursor: pointer;
  }
  span{
    color: #d24707;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div>Yash Raj<span>.</span></div>
      <AiOutlineMenu />
    </HeaderWrapper>
  );
};

export default Header;
