import Vegetarian from "../components/Vegetarian"
import Trending from "../components/Trending"
import Header from "../components/Header";
import styled from "styled-components";
import GlutenFree from "../components/GlutenFree";
import React from 'react'
import RecipeCard from "../components/RecipeCard";
import Category from "../components/Category";
import Popular from "../components/Popular";
import MealPlanning from "../components/MealPlanning";

function Home() {
  return (
    <AppW>
      <Header />
      <Category />
      <Popular />
      <Trending />
      <MealPlanning/>
      {/* <Vegetarian />
      <GlutenFree /> */}
    </AppW>
  )
}

export default Home


const AppW = styled.div`
      margin: 0% 0%;

      
      @media (max-width: 600px) {
        margin: 0% 10px;
      }
`