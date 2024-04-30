import React from "react";
import { Layout } from "antd";
import Typewriter from "typewriter-effect";
import {
  Body,
  Content,
  Content1,
  Content2,
  H2,
  H3,
  Bg,
  Box1,
  Box2,
  Box3,
  RImg,
  LImg,
  BoxTypewriter,
} from "./homeStyled"; 
import off from "../../images/png/off.png";
import logobg from "../../images/jpg/logobg.jpg";

function Home() {
  return (
    <Body>
      <Content>
        <Content1>
          <BoxTypewriter >
            <Typewriter
              options={{
                strings: ["Welcome"],
                autoStart: true,
                loop: true,  
                delay:200,
                cursor:'!',
              }} 
            />
            <img src={off} style={{ width: "80px" }}></img>   
          </BoxTypewriter>
        </Content1>
        <Content2>
          <Bg src={logobg}></Bg>
        </Content2>
        <Box1>
          <H2>See</H2>
          <RImg src="https://images.unsplash.com/photo-1442548520776-20acf66617df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></RImg>
        </Box1>
        <Box2>
          <LImg src="https://images.unsplash.com/photo-1496250161524-b0549bf85a55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></LImg>
          <H3>It</H3>
        </Box2>
        <Box3>
          <H2>Live</H2>
          <RImg src="https://images.unsplash.com/photo-1494948949099-1311f3e907a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></RImg>
        </Box3>
      </Content>
    </Body>
  );
}

export default Home;
