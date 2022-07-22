import React, { useEffect, useState } from "react";
import { Margin, Grid, Card, Title } from "../components/Styles";
import styled from "styled-components";
//import {motion} from 'framer-motion'
import { Link, useParams } from "react-router-dom";

export default function Types() {
  const [type, setType] = useState([]);
  let params = useParams();
  const getTypes = async (name) => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&type=${name}&number=40`
    );
    const recipes = await data.json();
    setType(recipes.results);
  };
  useEffect(() => {
    console.log(params.type);
    getTypes(params.type);
  }, [params.type]);

  return (
    <Style>
      <div className="img">
        <img src="https://images-gmi-pmc.edge-generalmills.com/c5bdd755-113e-4897-ba04-793b6b9f347c.jpg" />
      </div>
      <Margin>
        <Title>
          <h1>Result</h1>
          <hr />
        </Title>

        <Grid>
          {type?.map((x) => (
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
    </Style>
  );
}

const Style = styled.div`
  margin-top: 3rem;
  .img {
    width: 100vw;
    height: 50vh;
  }
  .img img {
    width: 100%;
    height: 100%;
  }
`;
