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
            x: "-25vw", duration: 2, ease: "power3.out",
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
                    y: 12,
                    duration: 0.6,
                    text: line.text,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                i === 0 ? ">" : "-=0.3"
            );
        });

        gsap.to(img_conatiner.current, { x: "25vw", y: 12, stagger: 0.15, duration: 2, ease: "power3.out" })

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
                {/* <div className="btn-absolute">
                    <div className='btn-stack'>
                        <div to={'/'}><YellowBtn className='yellow'>Contact Us</YellowBtn> </div>
                        <div to={'/'}><BlackBtn >Explore more</BlackBtn> </div>
                    </div>
                </div> */}
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

  .btn-stack{
    margin: 22px auto;
    padding: 12px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    gap:22px;
  }
  @media(max-width:1024px){
    margin-top:22px;
    
    }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius:22px;
`;

const FlexCol = styled.div`
    width:100vw;
    position:relative;
    img{
        width:40%;
        transform:scale(1);
        filter: drop-shadow(0 30px 60px rgba(74, 70, 70, 0.5));
        position:relative;
        left:35%;
    }
    .btn-absolute{
        position: absolute;
        left:30%;
        bottom:0%;
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
        font-family:"Montserrat";
        font-family:"Raleway", sans-serif;
        margin-bottom:12px;
        font-weight:600;
        // color:#6B6B6B; // 3E424B;
         letter-spacing: -0.05em;
         color:rgba(74, 70, 70, 1);
        }
        .line {
            // font-family:"Montserrat";
            opacity: 0;
            margin: 0;
            font-weight:200;
             letter-spacing: -0.02em;
        }

        .line-1 {
            font-size: 4rem;
            color:#6B6B6B;
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
            margin-left:12px;
        }
        
        
        @media(max-width:1024px){
            h1{
                font-size: 10vw;
            }
            .line-1{
                font-size: 5vw;
            }
            .line-3{
                font-size: 3vw;
            }
        }
        @media(max-width:426px){
            h1{
                font-size: 7vw;
                margin-bottom:0px;
            }
            .line-1{
                font-size: 4vw;
            }
            .line-3{
                font-size: 3vw;
            }
        }
        @media(max-width:321px){
            h1{
                font-size: 9vw;
                margin-bottom:0px;
            }
            .line-1{
                font-size: 5vw;
            }
            .line-3{
                font-size: 3vw;
            }
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

const YellowBtn = styled.div`
      // color: #6B6B6B;
      background-color:#FDD365; //F4B740
      padding:12px;
      font-size:1.3rem;
      border-radius:7px;
`

const BlackBtn = styled.div`
      color: #fff;
      background-color:#000; //F4B740
      padding:12px;
      font-size:1.3rem;
      border-radius:7px;
`