import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Form from './Form'; 

import {Route, Routes } from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';
import MealPlanner from './MealPlanner';
import Type from './Type';

function Pages() {
  return (  
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} /> 
        <Route path="/type/:type" element={<Type/>} /> 
        <Route path='/form' element={<Form/>} />
        <Route path="/search/:s" element={<Searched/>} /> 
        <Route path="/recipe/:name" element={<Recipe/>} />
        <Route path="/meal-planning" element={<MealPlanner/>} />
    </Routes>    
  
  )
}

export default Pages