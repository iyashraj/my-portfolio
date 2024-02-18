import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImSphere } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import User from "./../assets/user_img.jpg";

const AboutSectionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  border-top: 2px solid gray;
  padding: 5% 8%;
`;
const AboutNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  p {
    padding: 0;
    font-size: 16px;
    color: gray;
  }
`;

const NavIcons = styled.div`
  width: auto;
  svg {
    color: gray;
    border: 1px solid gray;
    border-radius: 50%;
    margin: 5px;
    height: 35px;
    width: 35px;
    padding: 7px;
    cursor: pointer;
  }
  svg:hover {
    opacity: 0.8;
    color: #ffffff;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;
const AboutContent = styled.div`
  margin-top: 5%;
  font-size: 26px;
  color: #dedede;
`;

const AboutContentPic = styled.div`
  padding: 3% 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 26px;
    color: #dedede;
    flex: 80%;
  }
  .image-wrapper {
    flex: 40%;
    display: flex;
    justify-content: end;
    img {
      width: 80%;
      height: 80%;
      border-radius: 50%;
      align-self: flex-end;
    }
  }
`;

const About = () => {
  return (
    <AboutSectionWrapper>
      <AboutNav>
        <p>About Me</p>
        <NavIcons>
          <FaLinkedinIn /> <ImSphere />
          <FaFacebookF />
          <IoLogoInstagram />
          <FaXTwitter />
        </NavIcons>
      </AboutNav>
      <AboutContent>
        Greetings, I'm Yash Raj, a frontend developer with two years of
        experience. My expertise spans across frontend technologies such as
        React JS, Redux, as well as backend technologies like Node.js and
        Express.js.
      </AboutContent>
      <AboutContentPic>
        <p>
          I'm committed to delivering pixel-perfect websites, merging frontend
          (React, Redux) and backend (Node.js, Express.js) expertise seamlessly.
          With a passion for web development and a meticulous eye for design, I
          ensure top-quality work, whether solo or in a team.
        </p>
        <div className="image-wrapper">
          <img alt="user" src={User} />
        </div>
      </AboutContentPic>
    </AboutSectionWrapper>
  );
};

export default About;
