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

            <input type="text"
                placeholder='search by ingredient, cuisine or more..'
                place
                onChange={handleChange}
                value={search}
                name="value"
                id="value" />
            <BlackBtn onClick={handleSubmit}><FaSearch /></BlackBtn>

        </FormStyle>

    )
}

const FormStyle = styled.form`
     margin: 30px 0px 10px 0px;
     border-radius : 1rem;
     padding:12px;
     width: 80%;
    display: flex;
    justify-content:center;
    align-items:"center";
    flex-warp:"wrap";
     background-color: #ffffffff;
     border : 1px solid #d3d3d3;
    //  filter: drop-shadow(0px 10px 20px rgba(196, 185, 185, 0.4));
     input
     {
       
         width: 90%;
        font-size:1rem;
        border: none;
        border-radius : 1rem;
        outline:none;
        border: none;
        box-shadow:none;
        color: rgba(89, 88, 86, 1);
        font-family: Raleway ;
        // background-color: #fafafa;
        // background-color: #f2f2f2ff;
        //   @media (max-width: 1300px) {
        //     width: 55%;
        //     left:8%;
        // }
        //  @media (max-width: 900px) {
        //     width: 50%;
        //     left:8%;
        // }
        // @media (max-width: 400px) {
        //     width: 60%;
        //     left:12%;
        // }
     }
    
   `


const BlackBtn = styled.div`
      // color: #6B6B6B;
      align-self :end;
      background-color:#f4b740; //F4B740
      padding:9px;
      padding: 8px 16px;
      position: relative
    //   display: flex;
    //   justify-content:center;
    //   align-item:center;
      font-size:0.9rem;
      border-radius:12px;
    
      @media (max-width: 400px) {
             padding: 8px ;
            font-size:0.55rem;
        }
`

