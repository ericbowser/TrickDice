import React from 'react';
import TrickDice from "./Components/TrickDice";
import Container from "react-bootstrap/Container";
import './'
function App() {
  return (
    <Container style={{margin: '5em', padding:'2em'}}>
      
      <TrickDice />
    </Container>
  );
}

export default App;
