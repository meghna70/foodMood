import React from 'react'
import { Link } from "react-router-dom";
import { FaPaperPlane, FaRegUser } from 'react-icons/fa';
import { FaClock } from "react-icons/fa";
// import { FaPerson } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import recp from "../recp.jpg"
import styled from 'styled-components';
function RecipeCard(props) {
  return (
    <Card style={{
      borderRadius:
        props?.borderradius == 2
          ? "0px 0px 2rem 2rem"
          : "2rem",
    }}>

      <p>{props.title}</p>
      <ImgContainer >
        <img src={props.rimg} alt={"Chili con Carne with Nachos Chips"} />
        {
          props.veryHealthy && <span> 🌱 Healthy</span>
        }
      </ImgContainer>
      <DetailTag >
        <span><FaClock /> <span style={{ color: "black", fontWeight: 600 }}>{props.readyInMinutes} mins</span></span>
        <span><FaRegUser /> <span style={{ color: "black", fontWeight: 600 }}> Serves {props.servings} </span></span>
        <span><FaHeart /> <span style={{ color: "black", fontWeight: 600 }}>{props.aggregateLikes}</span></span>
      </DetailTag>
      <TagContainer>

        <div>
          {props.vegan ? <span> 🌱 Vegan</span> : props?.vegetarian ? <span> 🥬 Veg</span> : <span> 🥩 Non-veg</span>}
        </div>

        {props.cuisine && <div style={{}}> <span>{props.cuisine}</span></div>}

      </TagContainer>
      <LinkBtn>
        <div>See Complete Recipe</div>

        <Link to={'/recipe/' + props.id}>
          <PlaneBtn>
            <FaPaperPlane />
          </PlaneBtn>
        </Link>


      </LinkBtn>

    </Card>
  )
}

const Card = styled.div`

       border-width:1px;
       overflow:hidden;
       position: relative;
       padding: 0px 20px;
       height:auto;
       width:280px;
       background-color:white;
       display : flex;
       flex-direction: column;
       align-items: center;

       @media (max-width: 1024px) {
        padding: 10px;
        height:auto;
        width:auto;
      }
       @media (max-width: 900px) {
        
      }
      @media (max-width: 768px) {
      
      }

      @media (max-width: 600px) {
      
      }

      @media (max-width: 600px) {
       
      }

       img{
        width:100%;
        height:60%;
        object-fit:cover;
        border-radius:15px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        
        

        @media (max-width: 630px) {
          font-size:1em;
          border-radius:0.5rem;
        }
       }

       p{
        margin:15px 0px;
        font-weight:600;
        font-size:26px;
        height : 90px;

        @media (max-width: 1024px) {
            font-size:1em;
            height : 40px;
        }
       }
  `
const ImgContainer = styled.div`
      position:relative;
      object-fit:cover;
      span{
        left:0;
         background-color:rgba(189, 189, 189, 0.4);
        padding:5px;
        border-radius:12px;
        position:absolute;
      }
`
const DetailTag = styled.div`
      width:100%;
      padding : 12px 5px 5px 5px;
      display: flex;
      gap:12px;
      color: green;

`
const TagContainer = styled.div`
      display : flex;
      // flex-direction: column;
      width:100%;
      padding :0px 5px;

      // background-color: #ffe5e5ff;
      div{
      font-family: Poppins;
       padding : 5px 10px;
       border-radius: 20px;
       background-color: #f2f1f1ff;
      }
      .detailTag{
       
      }
      @media (max-width: 768px) {
        font-size: 0.8em;
      }

`
const LinkBtn = styled.div`
    display: flex;
    justify-content : space-between;
    align-items : center;
    margin: 15px 0px;
    padding:10px 15px;
    border-radius : 25px;
    background-color: black;
    color:white;
    width: 90%;

    background-repeat: no-repeat;
  background-position: -360px, 0px, -100px 0;
  
  background-image: -webkit-linear-gradient(
    top left,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 42%,
    rgba(255, 255, 255, 0.0) 50%
  );
  background-image: -moz-linear-gradient(
    0 0,
     rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 42%,
    rgba(255, 255, 255, 0.0) 50%
  );    
  background-image: -o-linear-gradient(
    0 0,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 42%,
    rgba(255, 255, 255, 0.0) 50%
  );
  background-image: linear-gradient(
    0 0,
     rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 37%,
    rgba(255, 255, 255, 0.8) 42%,
    rgba(255, 255, 255, 0.0) 50%
  );
  
  -moz-background-size: 250% 250%, 100% 100%;
       background-size: 250% 250%, 100% 100%;
  
  -webkit-transition: background-position 0s ease;
     -moz-transition: background-position 0s ease;       
       -o-transition: background-position 0s ease;
          transition: background-position 0s ease;
    &:hover{
     background-position: 0 0, 0 0;
  
  -webkit-transition-duration: 0.5s;
     -moz-transition-duration: 0.5s;
          transition-duration: 0.5s;
    }

    
    @media (max-width: 768px) {
        padding:5px 15px;
    }
    
          
    div{
      display: flex;
      @media (max-width: 768px) {
        font-size: 0.8em;
      }
    }
`
const PlaneBtn = styled.div`
       padding : 5px;
       background-color: white;
       color:black;
       border-radius:100px;
`
export default RecipeCard