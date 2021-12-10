// Write your Character component here
import React from 'react';
import styled from 'styled-components';

function Character(props) {
    const characterSpecs = props.props;
    const newList = characterSpecs.map((i) => {
      return (
        <Div>
          <h4>Name: {i.name}</h4>
          <h5>Check out my stats</h5>
          <p>Gender: {i.gender}</p>
          <p>Height: {i.height}</p>
          <p>Mass: {i.mass}</p>
          <p>BirthYear: {i.birth_year}</p>
          <p>Eye Color: {i.eye_color}</p>
          <p>Hair Color: {i.hair_color}</p>
          <p>Skin Color: {i.skin_color}</p>
          <p>Movies: {i.films}</p>
        </Div>
      );
    });
    return newList;
  }
  
  export default Character;
  
  const Div = styled.div`
    height: 100%;
    color: #ffff;
    padding: 3px;
    border: 1px solid #b0a9a5;
    border-radius: 8px;
  `;