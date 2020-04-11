import React from 'react';
import { useSpring } from 'react-spring';
import { Container, TitleWrapper, StyledButton, Imagem } from './styles';
import Layout from '../../components/Layout';
import Title from '../../components/Title';
import SubTitle from '../../components/SubTitle';
import test from '../../assets/logo.jpg';

export default function Home() {
  const Fade = useSpring({
    delay: 400,
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <Layout vh id="home">
      <Container>
        <TitleWrapper style={Fade}>
          <Title>Hi,</Title>
          <Title>I'm Ruan Linos Alves,</Title>
          <SubTitle>A Full Stack Developer</SubTitle>

          <StyledButton
            activeClass="active"
            to="about"
            smooth
            spy
            offset={-70}
            duration={700}
          >
            About me
          </StyledButton>
        </TitleWrapper>
        <Imagem src={test} />
      </Container>
    </Layout>
  );
}
