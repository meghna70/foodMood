import Pages from './pages/Pages';
import styled from "styled-components";
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';


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