import { Card, Grid } from "./Styles";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Recommendations() {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    getRecommend();
  }, []);

  const getRecommend = async () => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=6`
    );
    const data = await api.json();

    setRecommend(data.recipes);

    console.log(recommend);
  };

  function refreshPage() {
    window.scrollTo(0, 0);
  }
  return (
    <RecommendationStyle>
      <h2>You may also like</h2>
      <Grid>
        {recommend.map((x) => (
          <div key={x.id}>
            <Card onClick={refreshPage}>
              <Link to={"/recipe/" + x.id} className="text-link">
                <img src={x.image} alt={x.title} />
                <p>{x.title}</p>
              </Link>
            </Card>
          </div>
        ))}
      </Grid>
    </RecommendationStyle>
  );
}
const RecommendationStyle = styled.div`
  h2 {
    margin: 3rem 0 1.5rem;
  }
`;
