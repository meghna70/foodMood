import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useMediaQuery } from 'usehooks-ts';
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

export default function Trending() {

  const matches = useMediaQuery('(min-width: 768px)')
  const [trending, setTrending]= useState([]);

   useEffect( () => {
    getTrending();
   } , [])

  const getTrending= async()=>{

     const check = localStorage.getItem("trending")

      if(check && check !== "undefined"){
        setTrending(JSON.parse(check));
      }
      else{
        
     const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
     const data= await api.json();

     localStorage.setItem("trending", JSON.stringify(data.recipes))
     console.log(data);
     console.log("here");
     setTrending(data.recipes)
      }
  }
  return (
    <div>
      
            <Wrapper>
             <GlobalStyle/>
              <h1>Trending</h1>
              <Splide
                  options={{
                  perPage: matches ? 4 : 2,
                  arrows:true,
                  pagiination:false,
                  drag:true,
                  // gap:'0.5rem'
                
                }}
              >
              {trending.map((recipe) =>{
                      
                      return(
                        <SplideSlide key={recipe.id}>
                           {/* <Card>
                            <Link to={'/recipe/'+ recipe.id}>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title}/>
                             <Gradient/>
                              </Link>
                            </Card> */}
                            <RecipeCard id = {recipe.id} title={recipe.title} rimg={recipe.image}/>
                        </SplideSlide>
                      );
              })}
              </Splide>
            </Wrapper>
         
    </div>
  )
      }

      const GlobalStyle = createGlobalStyle`
      body{
        font-family: 'Fredoka', sans-serif;
      }
      p{
        font-family: 'Fredoka', sans-serif;
      }
  `
  const Wrapper= styled.div`
     
      margin: 4rem 0rem
  `

  const Card = styled.div`

       height:18vw;
       width:18vw;
       background-color:yellow;
      
       border-radius:2rem;
       overflow:hidden;
       position: relative;
       margin right:3rem;


       height:20vw;
       width:36vw;
       background-color:white;

       @media (max-width: 1024px) {
        height:10rem;
        width:12rem;
      }
       @media (max-width: 900px) {
        height:10rem;
        width:10rem;
      }
      @media (max-width: 768px) {
        height:10rem;
        width:10rem;
      }

      @media (max-width: 600px) {
        height:10rem;
        width:10rem;
        font-size:1em;
        border-radius:0.5rem;
      }

      @media (max-width: 600px) {
        height:10rem;
        width:9em;
        font-size:1em;
        border-radius:0.5rem;
      }

       img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius:2rem;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        position:absolute;
        left:0;
        

        @media (max-width: 630px) {
          font-size:1em;
          border-radius:0.5rem;
        }
       }

       p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,50%);
        color:white;
        width:100%;
        height:40%;
        text-align:center;
        font-weight:600;
        font-size:1rem;

        @media (max-width: 1024px) {
          transform:translate(-50%,40%);
          
        }

       }
  `
const Gradient = styled.div`
        z-index:3;
        position:absolute;
        height:100%;
        width:100%;
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
