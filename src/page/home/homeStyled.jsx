import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

export const Body = styled.div`
  background-image: url("https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-position: center bottom;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Content = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;
export const Content1 = styled.div`
  height: 700px;
  margin-top: 64px;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 576px) {
    margin-left: 0;
    height: 500px;
  }
`;
export const Content2 = styled.div`
  height: 1500px;
  background-color: white;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 576px) {
    margin-left: 0;
    display: none;
  }
`;
export const H1 = styled.h1`
  font-size: 100px;
  text-align: center;
  text-shadow: 2px 1px 3px #e13734;
`;
export const H2 = styled.h2`
  font-size: 100px;
  color: #e13734;
  margin-left: 200px;
  align-content: center;
  @media only screen and (max-width: 576px) {
    margin-left: 0;
    font-size: 50px;
  }
`;
export const H3 = styled.h3`
  font-size: 100px;
  color: #e13734;
  margin-right: 200px;
  align-content: center;
`;

export const Bg = styled.img`
  width: 900px;
  height: 800px;
  margin-left: -200px;
  @media only screen and (max-width: 576px) {
    display: none;
    margin-left: 0;
    width: 0;
    height: 0;
  }
`;
export const Box1 = styled.div`
  margin-left: 100px;
  margin-top: -1500px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 576px) {
    margin-left: 0;
    margin-top: 0;
    background-color: #FFFFFF;
    height: max-content;
    display: block;
    text-align: center;
  }
`;
export const Box2 = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 576px) {
    margin-left: 0;
    margin-top: 0;
    background-color: #FFFFFF;
    height: max-content;
    display: block;
    text-align: center;
  }
`;
export const Box3 = styled.div`
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 576px) {
    display: none;
  }
`;
export const RImg = styled.img`
  width: 50%;
  height: 500px;
  border-radius: 300px 0 0 300px;
  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 200px;
    border-radius: 0;
  }
`;
export const LImg = styled.img`
  width: 50%;
  height: 500px;
  border-radius: 0 300px 300px 0;
  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 200px;
    border-radius: 0;
  }
`;

export const BoxTypewriter = styled.div`
  display: block;
  text-align: center;
  color: #000000;
  font-family: "Prompt";
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  text-shadow: 0 2px 4px #153250;
  margin-top: 200px;

  @media only screen and (max-width: 576px) {
    font-size: 60px;
  }
`;
