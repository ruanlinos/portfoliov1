import React from "react";

import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../Button";
import { Container } from "./styles";
import posts from "./Posts";

export default function PortfolioItem() {
  return (
    <>
      {posts.map(post => (
        <Container key={post.id}>
          <h1>{post.title}</h1>
          <div>
            <div className="picture">
              <FaGithub size={20} color="#fff" />
              <img src={post.image} alt="" />
            </div>
            <div className="info">
              <p>{post.description}</p>
              <strong>{post.techs}</strong>
              <div className="ButtonWrapper">
                <Button target="_blank" href={post.code}>
                  <FaGithub size={20} color="#fff" />
                  Code
                </Button>
                <Button target="_blank" href={post.look}>
                  {post.look === "" ? (
                    <FaEyeSlash size={20} color="#fff" />
                  ) : (
                    <FaEye size={20} color="#fff" />
                  )}
                  Look
                </Button>
              </div>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
}
