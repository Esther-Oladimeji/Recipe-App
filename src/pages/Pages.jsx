import Home from "./Home"
import Types from "./Types"
import Searched from "./Searched"
import Category from "../components/Category"
import Recipe from "./Recipe"
import { Route, Routes } from "react-router-dom"
import Favorite from "./Favorite"
import React from "react";

export default function Pages() {
  return (
  <Routes>
    <Route exact path= "/" element = {<Home />} />
    <Route path= "/type/:type" element = {<Types />} />
    <Route path= "/searched/:search" element = {<Searched />} />
    <Route path= "/recipe/:name" element = {<Recipe />} />
    <Route path="#category" element={<Category />} />
        <Route path="/favorite" element={<Favorite />} />
  </Routes>
  )
}
