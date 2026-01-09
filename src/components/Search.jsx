import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    function handleChange(event) {
        setSearch(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        navigate('/search/' + search);
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            <FaSearch />
            <input type="text"
                placeholder='search by ingredient, cuisine or more..'
                place
                onChange={handleChange}
                value={search}
                name="value"
                id="value" />
            <BlackBtn onClick={handleSubmit}>Find Recipes</BlackBtn>

        </FormStyle>

    )
}

const FormStyle = styled.form`
     margin: 30px 0px 10px 0px;
     border-radius : 1rem;
     position: relative;
     width: 80%;
    
     background-color: #f2f2f2ff;
    //  filter: drop-shadow(0px 10px 20px rgba(196, 185, 185, 0.4));
     input
     {
        width: clamp(70%, 40%, 20%);
        position:absolute;
        left:6%;
        font-size:1rem;
        border: none;
        border-radius : 1rem;
        outline:none;
        border: none;
        box-shadow:none;
        color: rgba(89, 88, 86, 1);
        font-family: Raleway ;
        // background-color: #fafafa;
        background-color: #f2f2f2ff;
          @media (max-width: 1300px) {
            width: 55%;
            left:8%;
        }
         @media (max-width: 900px) {
            width: 50%;
            left:8%;
        }
        @media (max-width: 400px) {
            width: 50%;
            left:12%;
        }
     }
     svg{
         position:absolute;
         top:50%;
         left:0%;
         transform: translate(100%, -50%);
         color: black;
     }

    
   `


const BlackBtn = styled.div`
      // color: #6B6B6B;
      align-self :end;
      background-color:#f4b740; //F4B740
      padding:9px;
      padding: 8px 16px;
      font-size:0.9rem;
      border-radius:12px;
      @media (max-width: 400px) {
             padding: 8px ;
            font-size:0.55rem;
        }
`

