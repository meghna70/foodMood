import React, { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

import styled from 'styled-components'
import line from '../line.png'
import '../form.css'


export default function Form() {

  const matches = useMediaQuery('(min-width: 768px)')
 
  const [formData, useFormData] = useState({ adminNo:"", formNo:"", class:"", fname:"", mname:"", lname:"", dob:"", gender:""} )
  return (
    <div className='formConatiner'>
     <Header>
       <img src="" alt="logo"/>
       <h1>Online Enquiry and Student Admission Form </h1>
       <img src="" alt="photo"/>
     </Header>

     {/* <Container> */}
          <form>
          <FormSec>
          <FlexRow>
                <div>
                <label>Admission no:  </label>
                <input type="text"/>
                </div>
                <div>
                <label>Form no:  </label>
                <input type="text"/>
                </div>
            </FlexRow>
            <div className='first'>
               <label> Sought after class:  </label>
                <input type="text"/>
            </div>
          </FormSec>
          <FormSec>
              <FormTitle> 
                <FormHeading>
                  Personal Information 
                </FormHeading>
                <img src={line} width="100%" height="1%"/>
              </FormTitle>
              <FormBody>
                <label>Name:</label>
                <FlexRow className='names'>
                    <input type="text" placeholder=" First Name"/>
                    <input type="text" placeholder=" Middle Name"/>
                    <input type="text" placeholder=" Last Name"/>
                </FlexRow>
                <Width40>
               
                  <label className='first'>Date of Birth:  <input type="date" placeholder="DD/MM/YYYY"/> </label>
                  <label className='first'>Gender: <input/></label>
             
                </Width40>
                <div className='divbutton'>
                  <button className='button-in-body'> RESET </button>
                </div>
                
              </FormBody>
          </FormSec>

          <FormSec>
              <FormTitle> 
                <FormHeading>
                  General Information 
                </FormHeading>
                <img src={line} width="100%" height="1%"/>
              </FormTitle>
              <FormBody>
                <label>Father's Name:</label>
                <FlexRow>
                    <input type="text" placeholder=" First Name"/>
                    <input type="text" placeholder=" Middle Name"/>
                    <input type="text" placeholder=" Last Name"/>
                </FlexRow>

                <label>Mother's Name:</label>
                <FlexRow>
                    <input type="text" placeholder=" First Name"/>
                    <input type="text" placeholder=" Middle Name"/>
                    <input type="text" placeholder=" Last Name"/>
                </FlexRow>
                <FlexColumn className='address'>
                  
                    <label>Residential Address: </label>
                    <input  type="text"
                            placeholder="House No. , Apartment name, etc"/>
                    <input  type="text"
                            placeholder='Locality'/>
                </FlexColumn>
                <FlexRow>
                  <label>City: <input/></label>
                  <label>State: <input/></label>
                  <label>Pincode: <input/></label>
                </FlexRow>
                <FlexRow>
                  <Width40>
                  <label className='first'>Religion:  <input/></label>
                  <label className='first'>Nationality:  <input/></label>
                  <label className='first'>Mother Tongue:  <input/></label>
                  <label className='first'>Aadhar no.:  <input/></label>
                  </Width40> 
                  <Width40>
                  <label className='first'>Caste:  <input/></label>
                  <label className='first'>Place of birth:  <input/></label>
                  <label className='first'>Blood Group:  <input/></label>
                
                  </Width40>
                  <FlexColumn>

                  </FlexColumn>
                </FlexRow>
                <div className='divbutton'>
                  <button className='button-in-body'> RESET </button>
                </div>
                
              </FormBody>
          </FormSec>

          <FormSec>
              <FormTitle> 
                <FormHeading>
                  Contact Information
                </FormHeading>
                <img src={line} width="100%" height="1%"/>
              </FormTitle>
              <FormBody>
                <FlexColumn>
                  <div className='first' >
                    <label>Phone No.: </label>
                    <input type="text"/>
                    <input  type="text"  placeholder='XXXX XXXXXX'/>
                  </div>
                  <div className='first'>
                    <label>Email: </label>
                    <input type="email" placeholder='example@gmail.com'/>
                  </div>
                </FlexColumn>
                <div className='divbutton'>
                  <button className='button-in-body'> RESET </button>
                </div>
                
              </FormBody>
          </FormSec>
          
          <FlexRow className='buttons'>
            <button className='button1'> RESET </button>
            <button className='button2'> CANCEL </button>
            <button className='button2'> CONFIRM </button>
          </FlexRow>
         
          </form>
     {/* </Container> */}
    </div>
  )
}

const FormSec = styled.div`
     width: 90%;
`
const FlexRow = styled.div`
      display: flex;
      flex-direction: rows;
      justify-content: space-between;
      padding:10px;
      flex-wrap: wrap;
      >input{
        width: 30%;
      }
`

const FlexColumn = styled.div`
      display: flex;
      flex-direction: column;
      padding:10px;
      flex-wrap: wrap;
      
`
const Width40= styled.div`
       display: flex;
       flex-direction: column;
       width:40%;
       align-items: flex-end;
       flex-wrap: wrap;

      
`

const Header = styled.div`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
     height: 7rem;
     width:100%;
     background-color:rgb(178,204,224);
     display:flex;
     flex-direction: row;
     justify-content:space-between;
     padding:1rem;
     position:relative;

     h1 {
      position: relative;
      top:0.5rem;
      font-family: Ropa Sans;
      font-size: 3vw;
      font-weight: 400;
      line-height: 48px;
      letter-spacing: 0em;
      text-align:center;
     
      @media (max-width: 768px){
        font-size: 20px;
      } 
  }
`

// const Container= styled.div`
//      display:flex;
//      flex-direction:column;
//      align-items:center;
//      background-color:white;
//     //  border: 1px solid black;
  
//      width:100%;
//      padding: 1rem;
   
// `

const FormTitle= styled.div`
    font-size: 2rem;
    margin-top:3rem;
`

const FormBody= styled.div`
   background-color: rgb(231,240,246);   
   margin: 2px;
   padding:2rem;
   border-radius:1rem;
`
const FormHeading= styled.div`
    
    margin: 1rem 0px 0px 30px;
    
`