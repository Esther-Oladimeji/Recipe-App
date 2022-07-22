import React from "react";
import { Card, Margin, Grid } from "./Styles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function DailyPicks() {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const greeting = `${weekday[d.getDay()]} Picks For You`;

  const [dailyPick, setDailyPick] = useState([]);

  useEffect(() => {
    getDailyPick();
  }, []);

  const getDailyPick = async () => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=6`
    );
    const data = await api.json();

    setDailyPick(data.recipes);

    console.log(dailyPick);
  };
  return (
    <Margin>
      <h2>{greeting}</h2>
      <Grid>
        {dailyPick?.map((x) => (
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
