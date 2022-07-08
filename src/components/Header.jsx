import React from 'react'
import styled from 'styled-components';
import chef from '../chef.webp';

export default function 
() {
  return (
     <Card>
        <FlexCol>
           
                <Main_content>
                    <h1> Let's Start </h1>
                    <h1> Cooking With </h1>
                    <h1> Popular Recipes</h1>
                </Main_content>
               
          
            <div>
                <img src={chef}/>
            </div>
        </FlexCol>
        <Secondary_content>
                    <h6>want to learn cooking but confused how to start?</h6>
                    <h6>No need to worry again!</h6>
         </Secondary_content>
     </Card>
  )
}

const Card= styled.div`
   
    min-width: 80vw;
    background-color: rgb(235,227,206);
    color:black;
    padding: 10px;
`
const FlexCol= styled.div`
    display:flex;
    flex-direction:row;

    h1{
        font-size: 5vw;
        padding:0;
        margin:0;
        display:inline;   
    }

    img{
        width:100%;
        align-self: flex-end;
    }
    
    @media(max-width:700px){
        h1{
            
        }

`

const Main_content= styled.div`
        margin:30px;
        margin-bottom:0px;
       
        @media(max-width:700px){
            h1{
               
            }
       
`

const Secondary_content= styled.div`
        margin:0px 30px;
        margin-bottom:50px;

        h6{
            font-size: 1.7vw;
            padding:0;
            margin:0;
        
               }
        
     @media(max-width:700px){
        h6{
            font-size: 3vw;
        }
    }
`