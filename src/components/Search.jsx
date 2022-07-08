import styled from 'styled-components';
import { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

export default function Search() {

    const [search, setSearch]= useState("");
   
    const navigate=useNavigate();

    function handleChange(event){
        setSearch(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        navigate('/search/'+ search);
    }

  return (
     <FormStyle onSubmit={handleSubmit}>
        <FaSearch/>
        <input type="text"
               placeholder='search by ingredient, cuisine or more..'
               onChange={handleChange} 
               value={search} 
               name="value" 
               id="value"/>
             
     </FormStyle>
   
  )
}

const FormStyle = styled.form`
     margin-top: 30px;
     border-radius : 1rem;
     position: relative;
     left:2%;
     bottom: 10%;
     width: 40%;

     input
     {
        width: 93%;
        font-size:1rem;
        border: none;
        border-radius : 1rem;
        outline:none;
        border: none;
        box-shadow:none;
        color: rgba(255, 71, 99,1);
        font-family: Fredoka ;
     }
     svg{
         position:absolute;
         top:50%;
         left:0%;
         transform: translate(100%, -50%);
         color: black;
     }
   `