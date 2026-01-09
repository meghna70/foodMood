import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bg1 from "../bg-1.png"
import bg2 from "../bg-2.png"
import bg5 from "../bg-5.png"
import Search from './Search';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function Category() {

    const container_ref = useRef(null);
    const img1_ref = useRef(null);
    const img2_ref = useRef(null);
    const img3_ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
        gsap.fromTo(
            img1_ref.current,
            {
                opacity: 0,
                scale: 0.9,
                y: 50,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container_ref.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true, 
                    snap: 1,  
                },
            }
        );
        gsap.fromTo(
            img2_ref.current,
            {
                opacity: 0,
                scale: 0.9,
                y: 50,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container_ref.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true, 
                    snap: 1,     
                    // markers: true,
                },
            }
        );
        gsap.fromTo(
            img3_ref.current,
            {
                opacity: 0,
                scale: 0.9,
                y: 50,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container_ref.current,
                    start: "top 80%",
                    end: "top 30%",
                    scrub: true, // 👈 keeps running in background
                    snap: 1,     // 👈 settles cleanly
                    // markers: true,
                },
            }
        );
    }, { scope: container_ref })

    return (
        <DivContainer ref={container_ref} style={{ position: "relative", padding: "20px", width: "100%", display: "flex", justifyContent: "center", }}>
            <div >
                <Img1 alt="img1" ref={img1_ref} src={bg1} ></Img1>
                <Img2 alt="img2" ref={img2_ref} src={bg2} ></Img2>
                <Img3 alt="img3" ref={img3_ref} src={bg5} ></Img3>
            </div>
            <SearchContainer>
                <p className='title' style={{ fontFamily: "Raleway", margin: "1rem 0px 0px 0px" }}> What to <span style={{ color: "orange" }}>Cook</span>?</p>
                <p className='subtitle' style={{ margin: "12px 0px 26px 0px", color: "gray" }}>Find recipes based on your mood, ingredients or cravings.</p>
              <SearchWrapper>
              <Search />
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
                    <CategoryLink to={'/cuisine/indian'}>
                        {/* <h5><GiChopsticks /></h5> */}
                        Indian
                    </CategoryLink>

                    <CategoryLink to={'/cuisine/italian'}>
                        {/* <h5><GiChopsticks /></h5> */}
                        Italian
                    </CategoryLink>

                    <CategoryLink to={'/type/dessert'}>
                        {/* <h5><GiChopsticks /></h5> */}
                        Dessert
                    </CategoryLink>

                    <CategoryLink to={'/type/snack'}>
                        {/* <h5><GiChopsticks /></h5> */}
                        Snack
                    </CategoryLink>

                    <CategoryLink to={'/type/appetizer'}>
                        {/* <h5><GiChopsticks /></h5> */}
                        Appetizer
                    </CategoryLink>


                </List>
                </SearchWrapper>
            </SearchContainer>
        </DivContainer>
    )
}

const DivContainer = styled.div`
   margin: 234px 0px;
   margin-top: 234px;
   .title{
        // font-size: 5vw;
         font-size:44px;
    }
    .subtitle{
        font-size:auto;
    }
    @media(max-width:1024px){
            .title{
                font-size: 44px;
            }
        }
    @media(max-width:800px){
     margin-top: 25%;

        .title{
           font-size: 44px;
        }
        .subtitle{
            font-size:13px;
        }
    }
    @media(max-width:435px){
     margin-top: 25%;
       .title{
           font-size: 30px;
        }
        .subtitle{
            font-size:13px;
            text-align:center;
        }
    }
`
const SearchWrapper = styled.div`
        width: 100%; 
        display: flex; 
        background-color:white;
        border-radius:12px;
        justify-content: center; 
        align-items: center; 
        flex-direction: column;
`
const SearchContainer = styled.div`
        z-index: 3;
        width: 60%; 
        border-radius: 15px; 
           display: flex; 
        
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
        // box-shadow: 0px 0px 20px rgba(225, 201, 223,0.3) }};
        
         @media(max-width:800px){
            width: 90%; 
    }

`
const Img1 = styled.img`
    position:absolute;
    left:-18%;
    bottom:15px;
    z-index:-2;
    filter: drop-shadow(0 30px 20px rgba(231, 178, 178, 0.5));
    @media(max-width:800px){
        width:250px;
        left:-20%;
         bottom:28%;
    }
     @media(max-width:600px){
        width:250px;
        left:-20%;
        bottom:28%;
    }
    @media(max-width:500px){
        width:250px;
        bottom:28%;
        filter: blur(0.4px);
    }
`

const Img2 = styled.img`
    position:absolute;
    right:0%;
    bottom:5px;
    z-index:-2;
    filter: drop-shadow(0 30px 20px rgba(231, 178, 178, 0.5));
    // filter: blur(1.3px);
    @media(max-width:600px){
        width:200px;
        right:0%;
    }
    @media(max-width:500px){
        width:200px;
        filter: blur(0.6px);
    }
`

const Img3 = styled.img`
    position:absolute;
    left:-12%;
    bottom:-100%;
    z-index:-2;
    filter: drop-shadow(0 30px 20px rgba(231, 178, 178, 0.5)) ;
    // blur(2px);
    @media(max-width:800px){
        width:250px;
        left:-20%;
         bottom:-28%;
    }
    @media(max-width:600px){
        width:350px;
        left:-40%;
        bottom:-38%;
    }
    @media(max-width:500px){
        width:300px;
        left:-30%;
        bottom:-40%;
        filter: blur(1px);
    }
`

const List = styled.div`
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: 30px;
      flex-wrap: wrap;
      background-color:white;
      gap:10px;
      width:70%;
`
const CategoryLink = styled(NavLink)`
      padding: 8px 16px;
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
