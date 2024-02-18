import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { FaArrowDownLong } from "react-icons/fa6";
import { BsMouse } from "react-icons/bs";

const GreetWrapper = styled.div`
padding: 0 8%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  color: #ffffff;
  font-size: 4rem;
  gap: 10px;
  span {
    color: gray;
  }
`;

const LowerSection = styled.div`
  position: absolute;
  bottom: 10px;
  .bs-mouse {
    height: 30px;
  }
  .mouse-arrow {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 85%;
    left: 50%;
    height: 20px;
  }
`;

const buttonExStyle = { padding: "14px 30px", marginTop: "5%" };

const Greet = () => {
  return (
    <GreetWrapper>
      <div>
        <span>Designing with</span> Purpose,
      </div>
      <div>
        <span>Building with</span> Webflow.
      </div>
      <Button text={"Say hi👋"} br={"half-hold"} style={buttonExStyle} />
      <LowerSection>
        <BsMouse className="bs-mouse"/>
        <FaArrowDownLong
          className="mouse-arrow"
        />
      </LowerSection>
    </GreetWrapper>
  );
};

export default Greet;
