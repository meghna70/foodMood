import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'
import logo from "../Logo.png"
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { TextPlugin } from 'gsap/all'
import gsap from "gsap";

export default function NavBar() {

   gsap.registerPlugin(TextPlugin);
   const logo_container = useRef(null);
   const contact_container = useRef(null);
   const matches = useMediaQuery('(min-width: 768px)')

   useGSAP(() => {
      gsap.from(logo_container.current, { opacity: 0, x: -20, duration: 1 })
      gsap.from(contact_container.current, { opacity: 0, x: -20, duration: 1 })

   }, {})


   return (

      <NavContainer>

         <Card ref={logo_container} to={'/'}>
            <img src={logo} alt={"logo"} />
            <h1>FoodMood</h1></Card>
         {/* <Search/> */}
         <div ref={contact_container}>
            {matches ?
               <Card to={'/'}><BlackBtn>Contact Us</BlackBtn> </Card>
               : <div></div>}
         </div>
      </NavContainer>

   )
}

const NavContainer = styled.div`
       
        width:100%;
        max-width:100vw;
        height:55px;
        padding: 12px 0px;
      //   background-color: #FF5252; //crimson
      //   background-color: #FDD365;
        display: flex;
        font-family: sans-serif;
        font-weight: 600;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
`
const Card = styled(Link)`
  
  text-decoration: none;
  display : flex;
  flex-direction: row;
  margin:0px 20px;
  align-items:center;
  font-family:"Raleway", sans-serif;
  img{
  margin-left: 20px;
//   width:90%;
  border-radius: 2rem;
 }
   h1{
     padding: 0px 12px;
     font-size: 1.5rem;
     font-family:"Raleway", sans-serif;
   }
  a{
    text-decoration: none;
   }

   h4{
    text-align: center;
    padding:1rem;
    text-decoration: none;
   }
`

const BlackBtn = styled.div`
      // color: #6B6B6B;
      background-color:#f4b740; //F4B740
      padding:9px;
      padding: 8px 16px;
      font-size:0.9rem;
      border-radius:12px;
`