import styled from "styled-components";
import bg from './img/bg.webp';
import { MainLayout } from "./styles/layouts.js";
import {Orb} from "./components/orb/orb.js";

function App() {
  return (
    <AppStyled bg={bg} className='app'>
      <Orb/>
      <MainLayout>
        <h1>hello</h1>
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
