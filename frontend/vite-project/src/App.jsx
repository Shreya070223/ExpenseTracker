import React,{useMemo, useState} from 'react'
import styled from "styled-components";
import bg from './img/bg.webp';
import { MainLayout } from "./styles/layouts.jsx";
import { Orb} from "./components/orb/orb.jsx";
import Nevigation from "./components/notification/Nevigation.jsx";

function App() {
  
  const [active,setActive]=useState(1);

  const orbMemo=useMemo(()=>{
         return <Orb/>
  },[])

  return (
    <AppStyled bg={bg} className='app'>
      {orbMemo}
      <MainLayout>
        <Nevigation action={active} setActive={setActive}/>
        <main>
         <h1>hellow</h1>
        </main>
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
  main{
  flex:1;
  background:rgba(252,246,249,0.78);
  border:3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius:32px;
  overflow:auto;
  overflow-x:hidden;
  &::-webkit-scrollbar{
  width:0;
  }
  }
`;

export default App;
