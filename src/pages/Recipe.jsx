
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";
import {FaStar, FaUtensils} from 'react-icons/fa';
import {BiDish} from 'react-icons/bi';
import { useMediaQuery } from 'usehooks-ts';
import '@splidejs/react-splide/css';

export default function Recipe() {

    const [detail, setDetail]= useState({});
    const matches= useMediaQuery('(max-width: 600px)');
    const [instructions, setInstructions]= useState([]);

    const [active, setActive]= useState("instructions");

    // const getDetail= async()=>{
    //     const api = await fetch (`https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    //     const detailData = await api.json();
    //     localStorage.setItem("detail", JSON.stringify(detailData))
    //     setDetail(detailData);
    //     console.log(detailData);
    //     setInstructions(detailData?.extendedIngredients);
    //     console.log(instructions);
    //   }
      const { name } = useParams();

      useEffect(() => {
        async function fetchDetail() {
          const api = await fetch(
            `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
          );
          const detailData = await api.json();
          localStorage.setItem("detail", JSON.stringify(detailData));
          setDetail(detailData);
          setInstructions(detailData.extendedIngredients || []);
        }

        if (name) fetchDetail();
      }, [name]);


  return (  
      <FlexCol>
      <GlobalStyle/>
        <ImageDetails>
          <img alt='name' src={detail.image}/>
          {matches? <div></div>:
          <h1>{detail.title}</h1>}
          <Gradient/>
       </ImageDetails>
       <RecipeDetails>
         <h1>{detail.title}</h1>
         <FlexRow>
         <h3><FaStar/> Likes: {detail.aggregateLikes}</h3>
         <h3><BiDish/> Time : {detail.cookingMinutes+ detail.preparationMinutes + detail.readyInMinutes}  min</h3>
         <h3><FaUtensils/> Serving : {detail.servings}</h3>
         </FlexRow>
        <FlexRow>
         <button className={active==="ingredients"? "active":""}  onClick={()=>setActive("ingredients") }> Ingredients </button>
         <button className={active==="instructions"? "active":""} onClick={()=>setActive("instructions") }> Instructions </button>
        </FlexRow>
         
        {active==="ingredients"? 
              <ul>
              {instructions.map((recipe) =>{
                      return(
                        <li  key={recipe.id}>{recipe.original}</li>
                      );
              })}
         </ul>  
              :
          <div>
                <h4>Summary: </h4>
                <div dangerouslySetInnerHTML={{__html: detail.summary}}>
                </div> 
                <h4>Instruction:</h4>
                <div dangerouslySetInnerHTML={{__html: detail.instructions}}></div>
          </div>
          }
         </RecipeDetails>
      </FlexCol>
  
  )
}

 const GlobalStyle = createGlobalStyle`
     
  `

const FlexCol= styled.div`
    display:flex;
    margin: 80px 0px;
    margin-bottom:50px;
    background: linear-gradient( #FACB80, white);
    background:#FBD8B0;
    background-color:#fef5ed;
     background: linear-gradient( #ebceb5ff, white);
    @media(max-width: 600px){
      flex-direction:column;
      align-items: center;
    }
`

const FlexRow= styled.div`
    display:flex;
    align-items: flex-end;

    button{
      width: 30%;
      height: 40px;
      border-radius: 2rem;
      border: 1px solid #B52B40;
      background-color:  rgba(255,255,255, 0.3);
      font-family: Fredoka ;
      margin: 20px 40px;
      cursor:pointer;

      &.active{
        background-color: crimson;
         
      }
      @media (max-width:600px){
        width: 40%;
        margin: 20px 10px;

      }
    }
`

const ImageDetails= styled.div`
  width: 30vw;
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
  bottom:50%;
  transform:translate(-50%,30%);
  color:white;
  width:40%;
  height:40%;
  margin: 1rem;
  font-weight:600;
   

  }

  @media(max-width: 600px) {
    width: 100%;
    height: 10rem;
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
color:black;
        padding: 2rem 2rem;
      
        h1{
          padding: 0 2rem;
          color: black;
        }

        h3{
          display:flex;
          align-items: center;
          padding: 0 2rem; 
          font-size:15px;
          margin:0;
          @media (max-width:600px){
            padding: 0 0.4rem; 
    
          }
        }
        
        svg{
          margin:2px;
          font-size:15px;
        }
@media(max-width:600px){
        width: 80%;
      }
`

// const Card = styled.div`
     
      
//        height:5rem;
//        width:5rem;
//        background-color:yellow;
      
//        `
// const Stylesplide = styled(SplideSlide)`
//       width: 70%;
// `
      
