import Vegetarian from "../components/Vegetarian"
import Trending from "../components/Trending"
import Header from "../components/Header";
import styled from "styled-components";

import React from 'react'

function Home() {
  return (
    <AppW>
        <Header/>
        <Trending/>
        <Vegetarian/>
    </AppW>
  )
}

export default Home


const AppW= styled.div`
      margin: 0% 10%;

      
      @media (max-width: 600px) {
        margin: 0% 10px;
      }
`