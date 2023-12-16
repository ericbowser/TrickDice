import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import RollDice from "./RollDice";
import {Alert} from "react-bootstrap";
import five from '../assets/dice-six-faces-five_39565.png';
import three from '../assets/dice-six-faces-three_39562.png';
import six from '../assets/dice-six-faces-six_39563.png';
import two from '../assets/dice-six-faces-two_38562.png';
import one from '../assets/dice-six-faces-one_39564.png';
import four from '../assets/dice-six-faces-four_38563.png';

function TrickDice(){
  const [numRolls, setNumRolls] = useState(1);
  const [favoredFace, setFavoredFace] = useState(1);
  const [favoredFactor, setFavoredFactor] = useState(1);
  
  useEffect(() => {
  }, [numRolls]);
  
  useEffect(() => {
  }, [favoredFace]);
  
  useEffect(() => {
  }, [favoredFactor]);
  
    function Roll(event) {
      event.preventDefault();
      const roll = event.target[0].value;
      const favored = event.target[1].value;
      const factor = event.target[2].value;
      if (roll > 0 && factor > 0 && favored > 0) {
        setFavoredFace(favored);
        setFavoredFactor(factor);
        setNumRolls(roll)
      }
      // const roll = RollDice(numRolls, favoredDice);
    }
    
    function Clear() {
      setFavoredFace(undefined);
      setFavoredFactor(undefined);
      setNumRolls(undefined)
    }
    
      const riggedProps = {numRolls, favoredFactor, favoredFace};
      return (
        <Container>
          <div style={{margin: '100px'}}>
            <img src={one} alt={'one'} style={{width:'3em'}}/>
            <img src={two} alt={'two'} style={{width:'3em'}}/>
            <img src={three} alt={'three'} style={{width:'3em'}}/>
            <img src={four} alt={'four'} style={{width:'3em'}}/>
            <img src={five} alt={'five'} style={{width:'3em'}}/>
            <img src={six} alt={'six'} style={{width:'3em'}}/>
          </div>
          <Form onSubmit={Roll}>
            <Form.Group >
              <Form.Label>Number of Time to Roll</Form.Label>
              <Form.Control type="Dice Roll" placeholder="Enter Roll Times" />
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>Pick the Favored Face:</Form.Label>
              <Form.Select aria-label="Favored Dice">
                <option value={1} key={"1"}>1</option>
                <option value={2} key={"2"}>2</option>
                <option value={3} key={"3"}>3</option>
                <option value={4} key={"4"}>4</option>
                <option value={5} key={"5"}>5</option>
                <option value={6} key={"6"}>6</option>
              </Form.Select>
            </Form.Group>
            <br/>
            <Form.Group>
              <Form.Label>Factor for each Die:</Form.Label>
              <Form.Select aria-label="Factor">
                <option value={1} key={1}>1</option>
                <option value={2} key={2}>2</option>
                <option value={3} key={3}>3</option>
                <option value={4} key={4}>4</option>
                <option value={5} key={5}>5</option>
              </Form.Select>
            
            </Form.Group>
            <br/>
            <br/>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="outline-primary" onClick={() => Clear()} style={{margin: '7px'}}>
              Clear
            </Button>
          </Form>
          {numRolls && favoredFace && favoredFactor &&
            (
              <Alert style={{marginTop: '50px'}}>
                <RollDice props={riggedProps} />
              </Alert>
            )
          }
        </Container>
       
    )
}

export default TrickDice;