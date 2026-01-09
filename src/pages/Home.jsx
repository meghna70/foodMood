import React from 'react';
import Trending from "../components/Trending"
import Header from "../components/Header";
import styled from "styled-components";
import Category from "../components/Category";
import Popular from "../components/Popular";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function Home() {

  gsap.registerPlugin(ScrollTrigger);
  


  return (
    <AppW>
      <Header />
      <Category />
      <Popular />
      <Trending />
      {/* <MealPlanning/> */}
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