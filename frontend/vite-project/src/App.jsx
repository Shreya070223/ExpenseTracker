import React,{useState} from 'react'
import styled from "styled-components";
import bg from './img/bg.webp';
import { MainLayout } from "./styles/layouts.jsx";
import { Orb} from "./components/orb/orb.jsx";
import Nevigation from "./components/notification/Nevigation.jsx";

function App() {
  
  const [active,setActive]=useState(1);

  return (
    <AppStyled bg={bg} className='app'>
      <Orb />
      <MainLayout>
        <Nevigation action={active} setActive={setActive}/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default App;
