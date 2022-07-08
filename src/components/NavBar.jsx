import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'

export default function NavBar() {
    const matches = useMediaQuery('(min-width: 768px)')
  return (
   
     <NavContainer>
        <Card to={'/'}><h1>FoodMood</h1></Card>
        <Search/>
        <div>
            {matches? 
            <Card to={'/'}> Contact Us</Card>
            : <div></div>}
        </div>
     </NavContainer>
  )
}

const NavContainer= styled.div`
        height: 6.3rem;
        width:80%;
        padding: 0% 10%;
        background-color: crimson;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
`
const Card = styled(Link)`
  
  text-decoration: none;

  img{
  margin-top: 2rem;
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
`