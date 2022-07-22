import React from "react";
import { GoClock } from "react-icons/go";
import { GiCampCookingPot, GiKnifeFork } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Margin } from "../components/Styles";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Recommendations from "../components/Recommendations";
import CommentBox from "../components/Comment";

export default function Recipe() {
  const [activeTab, setActiveTab] = useState("ingredients");
  let params = useParams();
  const [details, setDetails] = useState({});

  const getRecipeDetails = async () => {
    const api_key = "a81060e9446f4c0da0648da3da727fd8";
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${api_key}`
    );
    const recipeDetailData = await data.json();
    setDetails(recipeDetailData);
  };

  useEffect(() => {
    getRecipeDetails();
  }, [params.name]);
  console.log(details);

  return (
    <>
      <Recipestyle>
        <div className="icons">
          <div className="details">
            <GiKnifeFork />
            <p>
              Servings: <br />
              {details.servings}
            </p>
          </div>
          <div className="details">
            <GoClock />
            <p>
              Prep. Time: <br />
              {details.preparationMinutes} MIN
            </p>
          </div>
          <div className="details">
            <GiCampCookingPot />
            <p>
              Cooking Time:
              <br />
              {details.cookingMinutes} MIN
            </p>
          </div>
          <div className="details">
            <GiCampCookingPot />
            <p>
              Ready In:
              <br />
              {details.readyInMinutes} MIN
            </p>
          </div>
        </div>

        <div>
          <img src={details.image} />
        </div>
        <Margin>
          <h2>{details.title}</h2>

          <MobileOnly>
            <div className="buttons">
              <Button
                className={activeTab === "ingredients" ? "active" : ""}
                onClick={() => setActiveTab("ingredients")}
              >
                Ingredients
              </Button>
              <div className="vl1"></div>
              <Button
                className={activeTab === "instructions" ? "active" : ""}
                onClick={() => setActiveTab("instructions")}
              >
                {" "}
                Instruction
              </Button>
            </div>
            {activeTab === "ingredients" && (
              <div className="ingredient-mobile">
                <ol>
                  {details.extendedIngredients?.map((x) => (
                    <li key={x.id}> {x.original} </li>
                  ))}
                </ol>
              </div>
            )}
            {activeTab === "instructions" && (
              <div className="instruction-mobile">
                <div
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                  className="display-linebreak"
                ></div>
              </div>
            )}
          </MobileOnly>

          <DesktopOnly>
            <div className="flex">
              <div className="ingredient">
                <h3>INGREDIENT</h3>
                <ol>
                  {details.extendedIngredients?.map((x) => (
                    <li key={x.id}> {x.original} </li>
                  ))}
                </ol>
              </div>

              <div className="instruction">
                <h3>INSTRUCTION</h3>
                <li
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                  className="display-linebreak"
                ></li>
              </div>
            </div>
          </DesktopOnly>
          <hr />
        </Margin>
      </Recipestyle>
      <Margin>
        <CommentBox />
        <hr />
        <Recommendations />
      </Margin>
    </>
  );
}

const Recipestyle = styled.div`
  margin-top: 6rem;

  .vl1 {
    border-left: 1.5px solid grey;
    height: 2rem;
  }
  .display-linebreak {
    white-space: pre-line;
    font-size: 0.9rem;
    line-height: 2.5rem;
    display: inline;
  }

  div img {
    height: 40vh;
    @media (max-width: 576px) {
      height: 40vh;
      width: 100%;
    }
  }
  img {
    width: 100%;

    margin: auto;
    display: block;
    height: 100%;
  }

  .icons {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  h2 {
    width: 60%;
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  .vl {
    border-left: 1.5px solid grey;
    height: 15rem;
    margin: 1rem 2rem;
  }

  .active {
    border-bottom: solid blue;
  }
  ol {
    counter-reset: list -0; /*start from 0,1,2,3... name List - customize*/
    margin: 0;
  }
  ol li {
    list-style-type: none;
    position: relative;
    margin: 25px 0;

    padding-left: 58px;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  ol li:before {
    content: counter(list) "";
    counter-increment: list;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 37px;
    background: url(data:image/png;base64,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);
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }
  p {
    font-weight: bold;
  }
`;

const Button = styled.button`
  width: 100%;
  color: #313131;
  background: white;
  border: none 2px;
  border-left: 2px;
  font-weight: 600;
  display: flex;
  font-size: 1.5rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;
const MobileOnly = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  .buttons {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 2rem 0;
    @media (max-width: 576px) {
      font-size: 9px;
    }
  }
`;

const DesktopOnly = styled.div`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
  .instruction {
    width: 50vw;
  }
  .ingredient {
    width: 50vw;
    padding-right: 2rem;
  }
  .flex {
    display: flex;
    margin-top: 3rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: light;
    text-align: center;
    font-family: "Paytone One", sans-serif;
  }
`;
