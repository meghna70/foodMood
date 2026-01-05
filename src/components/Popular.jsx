import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useMediaQuery } from 'usehooks-ts';
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import thai from "../thai.webp"
import chinese from "../chinese.jpg"
import mexican from "../mexican.jpg"
import italian from "../italian.jpg"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Popular() {
    
    const matches = useMediaQuery('(min-width: 768px)')
    const [popular, setPopular] = useState([
        {
            name: "Thai",
            rating: "4",
            c_img: thai,
            kcal: "220"
        },
        {
            name: "Italian",
            rating: 5,
            c_img: italian,
            kcal: "220"
        },
        {
            name: "Chinese",
            rating: "4",
            c_img: chinese,
            kcal: "220"
        },
        {
            name: "Mexican",
            rating: 5,
            c_img: mexican,
            kcal: "220"
        }]);


    return (
        <div>

            <Wrapper>
                <GlobalStyle />
                <h1 style={{ textAlign: "center", fontFamily: "Raleway" }}>Popular Cuisines</h1>
                <CardContainer>
                    {popular?.map((recipe) => {
                        return (
                            <Card key={recipe.id}>
                                <img src={recipe.c_img} alt={"Chili con Carne with Nachos Chips"} />
                                <div>
                                    <p>{recipe.name} <span className="cal"> / {recipe.kcal} kcal</span></p>
                                    <p className="starcontainer">{[1, 2, 3, 4, 5].map((index) => {
                                        if (index <= recipe.rating) {
                                            return (
                                                <span  className="star" key={index}>
                                                    <FaStar />
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span  className="star" key={index}>
                                                    <FaRegStar />
                                                </span>
                                            );
                                        }
                                    })} <span>{recipe.rating}</span></p>
                                </div>

                            </Card>

                        );
                    })}
                </CardContainer>
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
const Wrapper = styled.div`
     
      margin: 26rem 0rem 4rem 0rem;
      @media(max-width:800px){
         margin: 12rem 0rem 4rem 0rem;
    }
  `
const CardContainer = styled.div`
        display:flex;
        justify-content: center;
        gap:20px;
        flex-wrap:wrap;
`

const Gradient = styled.div`
        z-index:3;
        position:absolute;
        height:100%;
        width:100%;
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`
const Card = styled.div`

        border-radius:13px;
        border-width:1px;
        overflow:hidden;
        position: relative;
        width:200px;
        background-color:white;
        display : flex;
        flex-direction: column;
        // align-items: center;
        box-shadow: 0 10px 30px rgba(184, 58, 58, 0.06);
        cursor: pointer;
        transition: transform 0.35s ease, box-shadow 0.35s ease;
        font-family: 'DM Sans', sans-serif;
        
       img{
        width:100%;
        aspect-ratio: 4/3; 
        object-fit:cover;
        border-radius:15px 15px 0px 0px;
        transition: transform 0.6s ease;
        // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        &:hover{
            transform: scale(1.08);
        }
       }
        div{
        padding:15px 7px;
        }
       p{
        margin:15px 0px;
        font-weight:500;
        letter-spacing:0.7px;
        font-size:1.2em;
        padding:0px;
        margin:0px;
       }
        .cal{
            font-size:0.8em;
            color:	#3b3b3b;
        }
        .star {
         font-size:0.8em;
         color:#f4b740;
        }
        .starcontainer {
        padding-top:6px;
        }

       @media (max-width: 800px) {
            width:115px;
            p{
                font-weight:500;
                font-size:12px;
            
            } 
            .star {
                font-size:12px;
               
                transition: transform 0.2s ease;

             }
        }
`