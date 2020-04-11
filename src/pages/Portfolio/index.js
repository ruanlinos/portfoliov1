import React from "react";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import PortfolioItem from "../../components/PortfolioItem/index";

export default function Portfolio() {
  return (
    <Layout center id="portfolio">
      <Title>Portfolio</Title>
      <SubTitle>Recent Work</SubTitle>
      <PortfolioItem />
    </Layout>
  );
}
