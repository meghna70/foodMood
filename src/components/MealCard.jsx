import React from 'react'
import { FaClock, FaHeart, FaPaperPlane, FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function MealCard(props) {
    return (
        <Card style={{}}>
            <div style={{ display: "flex", padding: "12px", border: "1px solid #d3d3d3", borderWidth: "0px 0px 1px 0px" }}>
                 <div> {props.calorie}kCal </div> <Divider />
                 <div> {props.protein}g Protein</div> <Divider />
                 <div> {props.fat}g Fat</div> <Divider />
                 <div> {props.carbohydrate}g Carbohydrates</div> 
            </div>
            <div style={{ display: "flex" }}>
               
                    <ImgContainer src={props.rimg} alt={"Chili con Carne with Nachos Chips"} />
              

                <DetailsContainer>
                    <p>{props.title}</p>
                    <TagContainer>
                        {props.vegan ? <div className='vegan'> <span> 🌱 Vegan</span></div> : props?.vegetarian ? <div className='vegetarian'><span> 🥬 Vegetarian</span> </div> : <div className='nonveg'><span> 🥩 Non-vegetarian</span></div>}
                        {props.cuisine && <div style={{}}> <span>{props.cuisine}</span></div>}
                    </TagContainer>
                    <DetailTag >
                        <span><FaClock /> <span style={{ color: "black", fontWeight: 300 }}>{props.readyInMinutes} mins</span></span>
                        <span><FaRegUser /> <span style={{ color: "black", fontWeight: 300 }}> Serves {props.servings} </span></span>
                        <span><FaHeart /> <span style={{ color: "black", fontWeight: 300 }}>{props.aggregateLikes}</span></span>
                    </DetailTag>
                    <LinkBtn>
                        <div>See Complete Recipe</div>
                        <Link to={'/recipe/' + props.id}>
                            <PlaneBtn>
                                <FaPaperPlane />
                            </PlaneBtn>
                        </Link>
                    </LinkBtn>

                </DetailsContainer>
            </div>



        </Card>
    )
}

export default MealCard

const Divider = styled.div`
    height: 24px;
    width:1px;
    margin: 0px 12px;
    background-color:#d3d3d3;

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
      padding :0px 5px;
      gap:12px;
      div{
    
       padding : 5px 10px;
       border-radius: 20px;
       background-color: #f2f1f1ff;
      }
       .vegan{
       background-color: #a8ff78;
       color: white
       }
       .vegetarian{
       background-color: #59C173;
       color: white
       }
       .nonveg{
       background-color: #FF416C;
       color: white
       }
      .detailTag{
       
      }
      @media (max-width: 768px) {
        font-size: 0.8em;
      }

`


const DetailsContainer = styled.div`
        padding: 12px;
        width:60%;
`
const ImgContainer = styled.img`
        width:30%;
        margin:12px;
        margin-top:5px;
        border: 1px solid #d3d3d3;
        object-fit:cover;
        border-radius:15px;
        // box-shadow: 0 4px 8px 0 rgba(136, 136, 136, 0.2);
        
        

        @media (max-width: 630px) {
          font-size:1em;
          border-radius:0.5rem;
        }
       

`

const Card = styled.div`
       font-family: Montserrat;
       border-radius:0px 12px 12px 12px;  
       overflow:hidden;
       position: relative;
       box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
       height:auto;
       width:60%;
       background-color:#fff;
       display : flex;
       flex-direction: column;
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

      
       p{
        margin:15px 0px;
        font-weight:400;
        font-size:26px;

        @media (max-width: 1024px) {
            font-size:1em;
            
        }
       }
  `

const LinkBtn = styled.div`
    display: flex;
    justify-content : space-between;
    align-items : center;
    margin: 5px 0px;
    padding: 5px 10px;
    border-radius : 25px;
    background-color: black;
    color:white;
    width: auto;
    font-size: 11px;
    max-width:40%;

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