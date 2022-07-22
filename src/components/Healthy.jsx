import React from "react";
import { Card } from "./Styles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

export default function Healthy() {
  const [healthy, setHealthy] = useState([]);

  useEffect(() => {
    getHealthy();
  }, []);

  const getHealthy = async () => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const check = localStorage.getItem("healthy");

    if (check) {
      setHealthy(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=15&diet=Vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("healthy", JSON.stringify(data.recipes));
      setHealthy(data.recipes);
    }
    console.log(healthy);
  };

  return (
    <div>
      <Wrapper>
        <h2>Healthy & Tasty</h2>
        <Splide
          options={{
            perPage: 3,
            gap: "2rem",
            drag: "free",
            breakpoints: {
              650: {
                perPage: 2,
                gap: "1rem"
              }
            },
            pauseOnHover: true,
            arrows: false
          }}
        >
          {healthy?.map((x) => (
            <SplideSlide key={x.id}>
              <Card>
                <Link to={"/recipe/" + x.id} className="text-link">
                  <img src={x.image} alt={x.title} />
                  <p>{x.title}</p>
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div``;
