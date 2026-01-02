import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function Category() {
  return (
    <div style ={{margin:"56px 0px", padding:"20px", width:"100%", display:"flex", justifyContent:"center"}}>
      <div style={{width:"80%", borderRadius:"15px", backgroundColor:"white",  display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", boxShadow: "0px 0px 20px rgba(225, 201, 223,0.3)"}}>
      <p style={{fontSize:"36px" , fontFamily:"Fredoka", margin:"1rem 0px"}}> What to <span style={{ color:"orange"}}>Cook</span>?</p>
      <List>
        {/* <Slink to={'/cuisine/italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink  to={'/cuisine/american'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink  to={'/cuisine/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink  to={'/cuisine/korean'}>
            <GiChopsticks/>
            <h4>Korean</h4>
        </Slink> */}
        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>

        <CategoryLink  to={'/cuisine/indian'}>
            <h5><GiChopsticks/></h5>
            Indian
        </CategoryLink>


      </List>
</div>
    </div>
  )
}

const List = styled.div`
      display: flex;
      justify-content: center;
      margin: 1rem 0rem;
      flex-wrap: wrap;
      background-color:white;
      gap:10px 30px;
      width:70%;
`
const CategoryLink = styled(NavLink)`
      padding: 8px 10px;
       text-decoration:none;
       border-radius: 22px;
       display: flex;
       justify-content:center;
       align-items: center;
      //  box-shadow: 0px 0px 20px rgba(153, 151, 151,0.6);
       background-color: #F2F2F2;
       border: 1px solid #f9f9f9;

      h5{
      padding: 0px;
      margin:0px;
      
      color: orange;
      font-weight:800;
      }

      &:hover{
        background: linear-gradient( to right, #FACB80, #F69770 );
        color: white;
        background-color: black;
       
        h4{
            color: rgb(249, 249, 249);
        }
    
`
const Slink = styled(NavLink)`
     text-decoration:none;
     height:5rem;
     width:5rem;
     display: flex;
     justify-content:center;
     align-items: center;
     border-radius:50%;
     margin:0.2rem 1rem;
     box-shadow: 0px 0px 20px rgba(153, 151, 151,0.6);
     background-color: rgb(249, 249, 249);
     font-size: 90%;
     color:#F69770;
     box-shadow: 0px 0px 5px rgba(5, 5, 5,0.6);
     
     @media (max-width: 768px) {
        margin:1rem;
        height:5rem;
        width:5rem;
        padding:3px;
       
      }
      h4{
        color:#F69770;
      }
      &.active{
        background: linear-gradient( to right, #FACB80, #F69770 );
        color: rgb(249, 249, 249);
       
        h4{
            color: rgb(249, 249, 249);
           
        }
      }
      `