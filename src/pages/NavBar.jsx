import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'usehooks-ts'

export default function NavBar() {
    const matches = useMediaQuery('(min-width: 768px)')
  return (
   
     <NavContainer>
        <h1>FoodMood</h1>
        <Search/>
        <div>
            {matches? 
            <Link to={'/'}> Contact Us</Link>
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
`