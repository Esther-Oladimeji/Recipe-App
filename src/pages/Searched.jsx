import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Grid, Margin, Title } from "../components/Styles";
import React from "react";

export default function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}&number=40`
    );
    const recipes = await data.json();
    setSearched(recipes.results);
  };

  useEffect(() => {
    console.log(params.search);
    getSearched(params.search);
  }, [params.search]);

  return (
    <Margin>
      <Title>
        <h1>Cakes You'll Love!</h1>
        <hr />
      </Title>
      <Grid>
        {searched.map((x) => (
          <div key={x.id}>
            <Card>
              <Link to={"/recipe/" + x.id} className="text-link">
                <img src={x.image} alt={x.title} />
                <p>{x.title}</p>
              </Link>
            </Card>
          </div>
        ))}
      </Grid>
    </Margin>
  );
}
