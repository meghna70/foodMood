import { editableInputTypes } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import {FaStar, FaUtensils} from 'react-icons/fa';
import {BiDish} from 'react-icons/bi';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

export default function Recipe() {

    const [detail, setDetail]= useState({});
    const [instructions, setInstructions]= useState([]);

    const [active, setActive]= useState("instructions");

    const param = useParams();

    const getDetail= async()=>{
        const api = await fetch (`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await api.json();
        localStorage.setItem("detail", JSON.stringify(detailData))
        setDetail(detailData);
        console.log(detailData);
        setInstructions(detailData.extendedIngredients);
        console.log(instructions);
      }

      // const [section, setSection]= useState({students:["pengu", "tingu"],
      //                                        section:"" });
      //  const getSection = async()=>{
      //   const api = await fetch (`secret_api`);
      //   const detailData = await api.json();
      //   setSection(
      //        {section: detailData.section})
      //   }
            
         

    useEffect(()=>{
          getDetail();
    }, [param.name]);

  return (  
      <FlexCol>
      <GlobalStyle/>
        <ImageDetails>
          <img src={detail.image}/>
          <h1>{detail.title}</h1>
          <Gradient/>
       </ImageDetails>
       <RecipeDetails>
         <h1>{detail.title}</h1>
         <FlexRow>
         <h3><FaStar/> Likes: {detail.aggregateLikes * 123}</h3>
         <h3><BiDish/> Time : {detail.cookingMinutes+ detail.preparationMinutes + detail.readyInMinutes}  min</h3>
         <h3><FaUtensils/> Serving : {detail.servings}</h3>
         </FlexRow>
        
           
         <ul>
              {instructions.map((recipe) =>{
                      
                      return(
                       
                        <li  key={recipe.id}>{recipe.original}</li>
                          
                       
                      );
              })}
         </ul>    
        
         </RecipeDetails>
      </FlexCol>
  
  )
}

 const GlobalStyle = createGlobalStyle`
     
  `

const FlexCol= styled.div`
    display:flex;
    margin: 80px 0px;
    margin-bottom:0px;
    background: linear-gradient( #FACB80, white);
`

const FlexRow= styled.div`
    display:flex;
    align-items: flex-end;
`

const ImageDetails= styled.div`
  width: 30vw;
  height: 100vh;
  position:relative; 
  box-shadow: 0 4px 20px 10px rgba(0,0,0,0.2);
  
  img {
    width:100%;
    height:100%;
    object-fit:cover;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  h1{
  position:absolute;
  z-index:10;
  left:30%;
  bottom:20%;
  transform:translate(-50%,30%);
  color:white;
  width:40%;
  height:40%;
  margin: 1rem;
  font-weight:600;
  }
  
`

const Gradient = styled.div`
        z-index:3;
        position:absolute;
        height:100%;
        width:100%;
        transform:translate(0%,-100%);
        background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

const RecipeDetails= styled.div`
display:flex;
flex-direction: column;
width: 50vw;
        padding: 0rem 2rem;
      
        h1{
          padding: 0 2rem;
          color: black;
        }

        h3{
          display:flex;
          align-items: center;
          padding: 0 2rem; 
          margin:0;
        }
        
        svg{
          margin:2px;
        }
       
`

const Card = styled.div`
     
      
       height:5rem;
       width:5rem;
       background-color:yellow;
      
       `
const Stylesplide = styled(SplideSlide)`
      width: 70%;
`
      