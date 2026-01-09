import React from 'react'
// import banner from "  ../banner.png"
import styled from 'styled-components';
import img3 from "../3.png"
import img4 from "../4.png"
import { Link } from 'react-router-dom';
function MealPlanning() {
    return (
        <div style={{position:"relative", margin:"20vh 0px", width: "100%", display: "flex", justifyContent: "center" }}>
          
                <Img style={{ width: "90%" }} src={img3} alt={"banner"} />
                <TextContainer >
                    <Link to={'/meal-planning'}>
                        Generate Meal Plan
                    </Link>
                </TextContainer>
           
        </div>
    )
}

export default MealPlanning


const TextContainer = styled.div`
  cursor: pointer;
  position: absolute;
  left: 15%;
  bottom: 20%;
  font-size: 1.5rem;

  a {
    text-decoration: none;
    padding: 8px 14px;
    background: linear-gradient(
      90deg,
      rgba(233, 238, 240, 1) 0%,
      rgba(240, 226, 122, 1) 100%
    );
    border-radius: 12px;
    border: 1px solid white;
    color: black;
    display: inline-block;
  }

  a:hover {
    transform: scale(1.05);
    transition: 0.2s ease;
  }
  @media(max-width: 1024px){
    font-size: 1rem;

    a{
      padding: 3px 5px ;
      border-radius: 6px;
    }
    }
  @media(max-width: 700px){
    font-size: 0.8rem;

    a{
      padding: 3px  ;
      border-radius: 6px;
    }
    }
`;


const Img = styled.img`
  object-fit: contain;
  border-radius:22px;
`;