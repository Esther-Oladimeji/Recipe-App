import { FaCookieBite, FaBreadSlice } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { GiBowlOfRice, GiSandwich, GiCakeSlice } from "react-icons/gi";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

export default function Category() {
  return (
    <CategoryWrapper>
      <h1 className="centerh1">CATEGORIES</h1>
      <Categorylist className="category-list">
        <Link to={"/type/Maincourse"} className="text-link">
          <Iconbg className="iconbg1">
            <GiBowlOfRice />
          </Iconbg>
          <h3>Main Course</h3>
        </Link>
        <Link to={"/type/fingerfood"} className="text-link">
          <Iconbg className="iconbg2">
            <GiSandwich />
          </Iconbg>
          <h3>Finger bites</h3>
        </Link>
        <Link to={"/type/dessert"} className="text-link">
          <Iconbg className="iconbg3">
            <GiCakeSlice />
          </Iconbg>
          <h3>Dessert</h3>
        </Link>
        <Link to={"/type/breakfast"} className="text-link">
          <Iconbg className="iconbg4">
            <FaBreadSlice />
          </Iconbg>
          <h3>Breakfast</h3>
        </Link>
        <Link to={"/type/drink"} className="text-link">
          <Iconbg className="iconbg5">
            <BiDrink />
          </Iconbg>
          <h3>Drinks</h3>
        </Link>
        <Link to={"/type/snacks"} className="text-link">
          <Iconbg className="iconbg6">
            <FaCookieBite />
          </Iconbg>
          <h3>Snacks</h3>
        </Link>
      </Categorylist>
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.div`
  //background-color: #E0D3DD;
  margin: 6rem 0;
  @media (max-width: 768px) {
    h1 {
      font: 2.3rem "Paytone One", sans-serif;
    }
    @media (max-width: 576px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;

const Categorylist = styled.div`
  margin: 3rem 0 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 3fr));
  justify-content: space-between;
  svg {
    height: 2rem;
    width: 2rem;
    margin: auto;
    color: rgb(245, 233, 219);
    transition: transform 0.5s;
  }
  div:hover {
    cursor: pointer;
  }
  div:hover svg {
    transform: scale(1.4);
  }
  h3 {
    display: flex;
    top: 2rem;
    font-family: "Ibarra Real Nova", serif;
    text-align: center;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto auto;
    gap: 2rem 0;

    h3 {
      font-size: 1rem;
    }
  }
  @media (max-width: 576px) {
    //grid-template-columns: auto auto;
    h3 {
      font-size: 0.6rem;
    }
  }
  .iconbg1 {
    background-image: url("https://ilovefood21.files.wordpress.com/2012/11/salmonsteak.jpg");
  }
  .iconbg2 {
    background-image: url("https://purewows3.imgix.net/images/articles/2019_09/easy_finger_food_recipes_for_a_crowd_cranberry-brie-pie-crust-bites-recipe.jpg?auto=format,compress&cs=strip");
  }
  .iconbg3 {
    background-image: url("https://iambaker.net/wp-content/uploads/2017/02/brownie-valentine-518x650.jpg");
  }
  .iconbg4 {
    background-image: url("https://articles.connectnigeria.com/wp-content/uploads/2021/10/creamy-oatmeal-bowl-with-banana-blueberries-royalty-free-image-1619015007_.jpg");
  }
  .iconbg5 {
    background-image: url("https://www.acouplecooks.com/wp-content/uploads/2021/06/Strawberry-Water-006.jpg");
  }
  .iconbg6 {
    background-image: url("https://health.clevelandclinic.org/wp-content/uploads/sites/3/2014/06/healthySnacks-1249099963-770x533-1.jpg");
  }
`;

const Iconbg = styled.div`
  height: 5.5rem;
  width: 5.5rem;

  display: flex;
  align-items: center;
  border-radius: 50px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin-bottom: 1rem;

  *:nth-child(3) {
    margin-bottom: 100px;
  }
`;
