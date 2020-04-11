import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Paragraph from "../../components/Paragraph";

import { Container, TechList, TechItem } from "./styles";

const techItem = [
  "Node.js",
  "Express",
  "React",
  "React Native",
  "Styled Components",
  "Redux"
];

export default function About() {
  return (
    <Layout center id="about">
      <Title>About</Title>
      <SubTitle>Let's talk a little about me</SubTitle>
      <Container>
        <Paragraph>
          I am a 22 year old Brazilian, living in Guarapuava Paraná. Who studies
          Mechatronics Engineering at Unicesumar. I've had fun with the code
          since January 2019; I started creating small projects, using C # with
          HTML, CSS, and JavaScript, I invested hours in studies on these
          topics. I am a self-taught, curious, and committed person. I am
          currently focused on Development using Typescript Language and
          technologies like NodeJs, React, and React Native since September
          2019. In addition to the schedule, I like to read, motoring.
        </Paragraph>
        <Paragraph>
          Challenging projects makes my eyes shine and grabs my attention. I
          follow the dilemma, Give me an ask, and I give you a solution.
        </Paragraph>
        <Paragraph>
          Nowadays, I'm available for freelance work with the following
          technologies.
        </Paragraph>

        <TechList>
          {techItem.map(tech => (
            <TechItem key={tech}>{tech}</TechItem>
          ))}
        </TechList>
      </Container>
    </Layout>
  );
}
