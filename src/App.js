import Pages from './pages/Pages';
import styled from "styled-components";
import Category from './components/Category';
import Search from './components/Search';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Form from './pages/Form';

function App() {
  return (
   
    <div>
        
        <BrowserRouter>
        <NavBar/>
        <AppW>
        
        <Pages/>
      </AppW>
      </BrowserRouter>
    </div>
   
  );
}

export default App;

const AppW= styled.div`
      margin: 0% 40px;

      
      @media (max-width: 600px) {
        margin: 0% 10px;
      }
`