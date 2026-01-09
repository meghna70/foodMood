import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Link, useParams  } from 'react-router-dom';

export default function Type() {

  const [type, setType]= useState([]);
  const params= useParams();

  const getType = async(name)=>{
      
      //const check= localStorage.getItem("cuisine");

      // if(check){
      //   setCuisine(JSON.parse(check));
      // }

//else{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${name}&number=15`)
        const recipes = await data.json();
        //localStorage.setItem("cuisine", JSON.stringify(recipes.results));
        setType(recipes.results);
     // }
    
      };

  useEffect(()=>{
    getType(params.type);
  
  }, [params.type]);

  return (
  
     <Grid>
        {type.map((recipe) =>{
             return(
                 <Card key={recipe.id} to={'/recipe/'+ recipe.id}>
                  <img src={recipe.image} alt={recipe.title}/>
                  <Container>
                  <h4>{recipe.title}</h4>
                  </Container>
                 </Card>
                );
        })}

     </Grid>
   

  )
}

// const GlobalStyle = createGlobalStyle`
// body{
//   font-family: 'Fredoka', sans-serif;
// }
// p{
//   font-family: 'Fredoka', sans-serif;
// }
// `

const Card = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  background-color:white;
  border-radius: 2rem;
  text-decoration:none;

  img{
  margin-top: 1rem;
  width:90%;
  border-radius: 2rem;
 }

  a{
     text-decoration:none;
   }

   h4{
    text-decoration: none;
    text-align: center;
    padding:1rem;
   }
   :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

    transform: scale(1.03);
  }

  @media (max-width:600px){
    width:80vw;
  }
`;

const Grid = styled.div`
   display:grid;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
   grid-gap:3rem;
   @media (max-width:600px){
    grid-gap:2rem;
    justify-items: center;
  }
   `

const Container= styled.div`
padding: 2px 16px;
`