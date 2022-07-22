import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Section className="hero">
      <img className="background-image" />
      <div className="hero-content-area">
        <h1>Thinking of cooking something new today?</h1>
        <h5>Why not try out some Cakes?</h5>
        <Link to={"/searched/cake"} className="text-link">
          <a href="#" class="btn">
            YES! I'M INTERESTED!
          </a>
        </Link>
      </div>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px;
  height: 65vh;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg");
    background-size: cover;
    z-index: -1;
  }

  h1 {
    font-size: 62px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 17px;
  }

  h5 {
    margin-bottom: 33px;
    font-style: italic;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    opacity: 0.75;
    color: #fff;
  }

  a:hover {
    opacity: 1;
  }

  a.btn {
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    background-color: #e07e7b;
    opacity: 1;
    transition: all 400ms;
  }

  a.btn:hover {
    background-color: #ce5856;
  }

  .hero-content-area {
    opacity: 0;
    margin-top: 100px;
    animation: 1s slidefade 1s forwards;
  }

  @keyframes slidefade {
    100% {
      opacity: 1;
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 20px;
    }

    a.btn {
      padding: 13px 20px;
    }
  }
`;
