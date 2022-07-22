import Healthy from "../components/Healthy"
import Popular from "../components/Popular"
import styled from "styled-components";
import {Margin } from "../components/Styles";
import Category from "../components/Category";
import Header from "../components/Header";
import DailyPicks from "../components/DailyPicks";
import { Route, Routes } from "react-router-dom"
import React from "react";

export default function Home() {
  return (
    <>
     <Header/>
   <Margin >
 
    <Popular />
    <Healthy /> 
   
   
   <Category />
   </Margin>
  <DailyPicks/>
    </>
  )
}

