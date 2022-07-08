import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles,GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

export default function Category() {
  return (
     <List>
        <Slink to={'/cuisine/italian'}>
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
        </Slink>
        <Slink  to={'/cuisine/indian'}>
            <GiChopsticks/>
            <h4>Indian</h4>
        </Slink>
        <Slink  to={'/cuisine/greek'}>
            <GiChopsticks/>
            <h4>Greek</h4>
        </Slink>
     </List>
  )
}

const List = styled.div`
      display: flex;
      justify-content: center;
      margin: 1rem 0rem;
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