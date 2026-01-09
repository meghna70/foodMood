// import React, { useState } from 'react';
// import { useMediaQuery } from 'usehooks-ts';

// import styled from 'styled-components'
// import line from '../line.png'
// import '../form.css'
// import { useEffect } from 'react';


// export default function Form() {

//   const matches = useMediaQuery('(min-width: 768px)')
 
//   const [formData, setFormData] = useState({ adminNo:"", formNo:"", class:"" } )
//   const [personalData, setPersonalData]= useState({ fname:"", mname:"", lname:"", date:"", gender:""})
//   const [generalData, setGeneralData]= useState({ father:{
//                                                         fname:"",
//                                                         mname:"",
//                                                         lname:""
//                                                     },
//                                                   mother:{
//                                                         fname:"",
//                                                         mname:"",
//                                                         lname:""
//                                                   },
//                                                   Address :{
//                                                         line1:"",
//                                                         line2:""
//                                                   },
//                                                   City:"",
//                                                   State:"",
//                                                   Pincode:"",
//                                                   Religion:"",
//                                                   Caste:"",
//                                                   Nationality:"",
//                                                   Mother_tongue:"",
//                                                   Ano:"",
//                                                   POB:"",
//                                                   Bg:""
//                                                   })

//   function handleSubmit(event){
//     event.preventDefault();
//     console.log("submit")
   
// }

//   function handleChange(event){
//       setFormData(prevFormData=>{
//         console.log(formData)
//         return{
//           ...prevFormData,
//           [event.target.name]:event.target.value
//         }
//       })
//   }

//   function handlePersonalChange(event){
//     setPersonalData(prevFormData=>{
//       console.log(personalData)
//       return{
//         ...prevFormData,
//         [event.target.name]:event.target.value
//       }
//     })
// }

// function handleGeneralChange(event){
//   setGeneralData(prevFormData=>{
//     console.log(generalData)
//     return{
//       ...prevFormData,
//       [event.target.name]:event.target.value
//     }
//   })
// }

// //DOES NOT WORK
// function handlePersonalReset(event){
//   setPersonalData(prevFormData=>{
//     console.log(personalData)
//     return{
//       ...prevFormData,
//       [event.target.name]:""
//     }
//   })
// }



//   return (
//     <div className='formConatiner'>
//      <Header>
//        <img src="" alt="logo"/>
//        <h1>Online Enquiry and Student Admission Form </h1>
//        <img src="" alt="photo"/>
//      </Header>

//      {/* <Container> */}
//           <form onSubmit={handleSubmit}>
//           <FormSec>
//           <FlexRow>
//                 <div>
//                 <label>Admission no:  </label>
//                 <input type="text" name='adminNo' id ="adminNo" onChange={handleChange} value={formData.adminNo}/>
//                 </div>
//                 <div>
//                 <label>Form no:  </label>
//                 <input type="text" name='formNo' id="formNo" onChange={handleChange} value={formData.formNo}/>
//                 </div>
//             </FlexRow>
//             <div className='first'>
//                <label> Sought after class:  </label>
//                 <input type="text" name='class' id="class" onChange={handleChange} value={formData.class}/>
//             </div>
//           </FormSec>
//           <FormSec>
          
//               <FormTitle> 
//                 <FormHeading>
//                   Personal Information 
//                 </FormHeading>
//                 <img src={line} width="100%" height="1%"/>
//               </FormTitle>
//               <FormBody>
//                 <label>Name:</label>
//                 <FlexRow className='names'>
//                     <input type="text" placeholder=" First Name" name='fname' onChange={handlePersonalChange} value={personalData.fname}/>
//                     <input type="text" placeholder=" Middle Name" name='mname' onChange={handlePersonalChange} value={personalData.mname}/>
//                     <input type="text" placeholder=" Last Name" name='lname' onChange={handlePersonalChange} value={personalData.lname}/>
//                 </FlexRow>
//                 <Width40>
               
//                   <label className='first'>Date of Birth:  
//                   <input type="date" placeholder="DD/MM/YYYY" id="date" name="date" onChange={handlePersonalChange} value={personalData.date} /> </label>
//                   <label className='first'>Gender: 
//                   <select  id="gender" name="gender" onChange={handlePersonalChange} value={personalData.date}>
//                       <option value="">--choose--</option>
//                       <option value="male">Male</option>
//                       <option value="female">Female</option>
//                       <option value="others">others</option>
//                     </select></label>
             
//                 </Width40>
//                 <div className='divbutton'>
//                   <button type="button" className='button-in-body' onClick={handlePersonalReset}> RESET </button>
//                 </div>
                
//               </FormBody>
             
//           </FormSec>
        
//           <FormSec>
//               <FormTitle> 
//                 <FormHeading>
//                   General Information 
//                 </FormHeading>
//                 <img src={line} width="100%" height="1%"/>
//               </FormTitle>
//               <FormBody>
//                 <label>Father's Name:</label>
//                 <FlexRow>
//                     <input type="text" placeholder=" First Name" id="father.fname" name="father.fname" onClick={ handleGeneralChange} value={ generalData.father.fname }/>
//                     <input type="text" placeholder=" Middle Name" id="father.mname" name="father.mname" onClick={ handleGeneralChange} value={ generalData.father.mname }/>
//                     <input type="text" placeholder=" Last Name" id="father.lname" name="father.lname" onClick={ handleGeneralChange} value={ generalData.father.lname }/>
//                 </FlexRow>

//                 <label>Mother's Name:</label>
//                 <FlexRow>
//                     <input type="text" placeholder=" First Name" id="mother.fname" name="mother.fname" onClick={ handleGeneralChange} value={ generalData.mother.fname }/>
//                     <input type="text" placeholder=" Middle Name" id="mother.mname" name="mother.mname" onClick={ handleGeneralChange} value={ generalData.mother.mname }/>
//                     <input type="text" placeholder=" Last Name" id="mother.lname" name="mother.lname" onClick={ handleGeneralChange} value={ generalData.mother.lname }/>
//                 </FlexRow>
//                 <FlexColumn className='address'>
                  
//                     <label>Residential Address: </label>
//                     <input  type="text"
//                             placeholder="House No. , Apartment name, etc"
//                             id="line1" name="line1" 
//                             onClick={ handleGeneralChange} 
//                             value={ generalData.Address.line1 }/>
//                     <input  type="text"
//                             placeholder='Locality'
//                             id="line2" name="line2" 
//                             onClick={ handleGeneralChange} 
//                             value={ generalData.Address.line2 }/>
                            
//                 </FlexColumn>
//                 <FlexRow>
//                   <label>City: <input type="text"   id="City" name="City" onClick={ handleGeneralChange} value={ generalData.City }/></label>
//                   <label>State: <input type="text"  id="State" name="State" onClick={ handleGeneralChange} value={ generalData.State}/></label>
//                   <label>Pincode: <input type="text" id="Pincode" name="Pincode" onClick={ handleGeneralChange} value={ generalData.Pincode }/></label>
//                 </FlexRow>
//                 <FlexRow>
//                   <Width40>
//                   <label className='first'>Religion:  <input type="text"   id="Religion" name="Religion" onClick={ handleGeneralChange} value={ generalData.Religion }/></label>
//                   <label className='first'>Nationality:  <input type="text"   id="Nationality" name="Nationality" onClick={ handleGeneralChange} value={ generalData.Nationality }/></label>
//                   <label className='first'>Mother Tongue:  <input type="text"   id="Mother_tongue" name="Mother_tongue" onClick={ handleGeneralChange} value={ generalData.Mother_tongue }/></label>
//                   <label className='first'>Aadhar no.:  <input type="text"   id="Ano" name="Ano" onClick={ handleGeneralChange} value={ generalData.Ano }/></label>
//                   </Width40> 
//                   <Width40>
//                   <label className='first'>Caste:  <input type="text"   id="Caste" name="Caste" onClick={ handleGeneralChange} value={ generalData.Caste }/></label>
//                   <label className='first'>Place of birth:  <input type="text"   id="POB" name="POB" onClick={ handleGeneralChange} value={ generalData.POB }/></label>
//                   <label className='first'>Blood Group:  <input type="text"   id="Bg" name="Bg" onClick={ handleGeneralChange} value={ generalData.Bg }/></label>
                
//                   </Width40>
//                   <FlexColumn>

//                   </FlexColumn>
//                 </FlexRow>
//                 <div className='divbutton'>
//                   <button className='button-in-body'> RESET </button>
//                 </div>
                
//               </FormBody>
//           </FormSec>

//           <FormSec>
//               <FormTitle> 
//                 <FormHeading>
//                   Contact Information
//                 </FormHeading>
//                 <img src={line} width="100%" height="1%"/>
//               </FormTitle>
//               <FormBody>
//                 <FlexColumn>
//                   <div className='first' >
//                     <label>Phone No.: </label>
//                     <input type="text"/>
//                     <input  type="text"  placeholder='XXXX XXXXXX'/>
//                   </div>
//                   <div className='first'>
//                     <label>Email: </label>
//                     <input type="email" placeholder='example@gmail.com'/>
//                   </div>
//                 </FlexColumn>
//                 <div className='divbutton'>
//                   <button className='button-in-body'> RESET </button>
//                 </div>
                
//               </FormBody>
//           </FormSec>
          
//           <FlexRow className='buttons'>
//             <button type="button" className='button1'> RESET </button>
//             <button type="button" className='button2'> CANCEL </button>
//             <button type="submit" className='button2'> CONFIRM </button>
//           </FlexRow>
         
//           </form>
//      {/* </Container> */}
//     </div>
//   )
// }

// const FormSec = styled.div`
//      width: 90%;
// `
// const FlexRow = styled.div`
//       display: flex;
//       flex-direction: rows;
//       justify-content: space-between;
//       padding:10px;
//       flex-wrap: wrap;
//       >input{
//         width: 30%;
//       }
     
// `

// const FlexColumn = styled.div`
//       display: flex;
//       flex-direction: column;
//       padding:10px;
//       flex-wrap: wrap;
      
// `
// const Width40= styled.div`
//        display: flex;
//        flex-direction: column;
//        width:40%;
//        align-items: flex-end;
//        flex-wrap: wrap;

      
// `

// const Header = styled.div`
//     border-top-left-radius: 25px;
//     border-top-right-radius: 25px;
//      height: 7rem;
//      width:100%;
//      background-color:rgb(178,204,224);
//      display:flex;
//      flex-direction: row;
//      justify-content:space-between;
//      padding:1rem;
//      position:relative;

//      h1 {
//       position: relative;
//       top:0.5rem;
//       font-family: Ropa Sans;
//       font-size: 3vw;
//       font-weight: 400;
//       line-height: 48px;
//       letter-spacing: 0em;
//       text-align:center;
     
//       @media (max-width: 768px){
//         font-size: 20px;
//       } 
//   }
// `

// // const Container= styled.div`
// //      display:flex;
// //      flex-direction:column;
// //      align-items:center;
// //      background-color:white;
// //     //  border: 1px solid black;
  
// //      width:100%;
// //      padding: 1rem;
   
// // `

// const FormTitle= styled.div`
//     font-size: 2rem;
//     margin-top:3rem;
// `

// const FormBody= styled.div`
//    background-color: rgb(231,240,246);   
//    margin: 2px;
//    padding:2rem;
//    border-radius:1rem;
// `
// const FormHeading= styled.div`
    
//     margin: 1rem 0px 0px 30px;
    
// `