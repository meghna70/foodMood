import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useMediaQuery } from 'usehooks-ts';
import { Link } from "react-router-dom";

export default function Vegetarian() {

  const matches = useMediaQuery('(min-width: 768px)')
  const [Veggie, setVeggie]= useState([]);

   useEffect( () => {
    getVeggie();
   } , [])

  const getVeggie= async()=>{

     const check = localStorage.getItem("Veggie")

      if(check){
        setVeggie(JSON.parse(check));
      }
      else{
        
     const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
     const data= await api.json();

     localStorage.setItem("Veggie", JSON.stringify(data.recipes))
     console.log(data);
     setVeggie(data.recipes);
      }
  }
  return (
    <div>
      
            <Wrapper>
             <GlobalStyle/>
              <h1>Vegetarian options</h1>
              <Splide
                  options={{
                  perPage:  3,
                  arrows:true,
                  pagiination:false,
                  drag:true,
                  gap:'0.5rem'}}
              >
              {Veggie.map((recipe) =>{
                      
                      return(
                        <SplideSlide key={recipe.id}>
                           <Card>
                            <Link to={'/recipe/'+ recipe.id}>
                              <p>{recipe.title}</p>
                              <img src={recipe.image} alt={recipe.title}/>
                              <Gradient/>
                              </Link>
                            </Card>
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
       height:23vw;
       width:20vw;
       background-color:yellow;
       aspect-ratio:9:1;
       border-radius:2rem;
       overflow:hidden;
       position: relative;
       margin right:3rem;

       @media (max-width: 1024px) {
        height:15rem;
        width:13rem;
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
        position:absolute;
        left:0;
        border-radius: 2rem;

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