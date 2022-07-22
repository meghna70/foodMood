import React, { useState, useEffect } from 'react'
import {  Link, useParams  } from 'react-router-dom';
import styled from 'styled-components';

export default function Searched() {

  const [searched, setSearched]= useState([]);
  const params= useParams();
  
  const getSearched = async(value)=>{

    const api= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${value}`);
    const data= await api.json();
    setSearched(data.results);
    
  }

  useEffect(()=>{
    getSearched(params.s);
  
  }, [params.s]);

  return (
    <Grid>
    {searched.map((recipe) =>{
         return(
             <Card key={recipe.id} to={'/recipe/'+ recipe.id}>
              <img src={recipe.image} alt={recipe.title}/>
              <Container>
              <h4>{recipe.title}</h4>
              <h6>{recipe.summary}</h6>
              </Container>
             </Card>
            );
         })}; 
     </Grid>
  )
}


const Card = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  background-color:white;
  border-radius: 2rem;
  text-decoration: none;

  :hover{

    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    tranform:scale(1.03);
    }
    
  img{
  margin-top:1rem;
  width:90%;
  border-radius: 2rem;
 }

  a{
    text-decoration: none;
   }

   h4{
    text-align: center;
    padding:1rem;
    text-decoration: none;
   }
    
   h6{
    font-size: 10px;
   }
    
`;

const Grid = styled.div`
   display:grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-gap:3rem;
   `

const Container= styled.div`
padding: 2px 16px;
`