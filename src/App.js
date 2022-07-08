import Pages from './pages/Pages';
import styled from "styled-components";
import Category from './components/Category';
import Search from './components/Search';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './pages/NavBar';

function App() {
  return (
   
      <AppW>
        <BrowserRouter>
        <NavBar/>
        <Search/>
        <Category/>
        <Pages/>
        </BrowserRouter>
      </AppW>
   
   
  );
}

export default App;

const AppW= styled.div`
      margin: 0% 10%;

      
      @media (max-width: 600px) {
        margin: 0% 10px;
      }
`