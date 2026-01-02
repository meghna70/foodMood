import React from 'react'
import styled from 'styled-components';
import chef from '../chef.webp';
import ramen from '../ramen.png'
import banner from '../banner.png'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

export default function
    () {
    gsap.registerPlugin(TextPlugin);
    const font_container = useRef(null);
    const img_conatiner = useRef(null);

    const lines = [
        { text: `Explore <span> Culinary </span> Insights`, className: "line-1" },
        // { text: "", className: "line-2" },
        { text: "Beyond the recipe", className: "line-3" }
    ];


    const tl = gsap.timeline();
    useGSAP(() => {
        tl.to(font_container.current, {
            x: "-25vw", duration: 2, ease: "power3.out"
            //  text: {
            //     value: "Exploring New Recipes",

            // },
        });
        // tl.to(".line", {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.8,
        //     stagger: 0.15,
        //     ease: "power3.out",
        // });
        lines.forEach((line, i) => {
            tl.to(
                `.${line.className}`,
                {
                    opacity: 1,
                    y:12,
                    duration: 0.6,
                    text: line.text,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                i === 0 ? ">" : "-=0.3"
            );
        });

        gsap.to(img_conatiner.current, { x: "25vw", y:12, stagger: 0.15, duration: 2, ease: "power3.out" })

    }, { scope: font_container })


    return (
        <Card>
            {/* <Img src={banner} alt={"banner"} /> */}
            <FlexCol>
                <Main_content ref={font_container}>
                    <h1>FoodMood</h1>
                    {lines.map((l, i) => (
                        <p key={i} className={`line ${l.className}`} />
                    ))}
                </Main_content>
                <div >
                    <img ref={img_conatiner} src={ramen} />
                </div>
            </FlexCol>
            {/* <Secondary_content>
                    <h6>want to learn cooking but confused how to start?</h6>
                    <h6>No need to worry again!</h6>
         </Secondary_content>  */}

        </Card>
    )
}

const Card = styled.div` 
  width: 100%;
  margin: 22px auto;
  margin-top:100px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius:22px;
`;

const FlexCol = styled.div`
   
    // background-color:yellow;
    width:100vw;
    // flex-direction:row;
    position:relative;
    // h1{ position:absolute;
    //     left:0%;
    //     top:30%;
    //     font-size:70px;
    //     padding:0;
    //     margin:0;
    //     display:inline;   
    // }

    img{
        width:40%;
        transform:scale(1);
        // align-self: flex-end;
         position:relative;
         left:35%;
    }
    
    @media(max-width:700px){
        h1{
            
        }

`

const Main_content = styled.div`
        position:absolute;
        left:30%;
        top:0%;
        font-size:50px;
        padding:0;
        margin:0;
        display:inline;  
        font-weight: 600; 
        h1{
        margin-bottom:12px;}
        .line {
            opacity: 0;
            margin: 0;
        }

        .line-1 {
            font-size: 4rem;
            span{
                color:#ffbd59;
            }
        }

        .line-2 {
            font-size: 2.5rem;
            color: #777;
        }

        .line-3 {
            font-size: 1.4rem;
            letter-spacing: 0.1em;
            color:#706236;
        }
       
`;

const Secondary_content = styled.div`
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