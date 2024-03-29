import React from 'react'
import { useParams } from 'react-router-dom';

import dogData from './db.json'


function DogDetails() {

    const { name } = useParams();
    const dog = dogData.dogs.find(d => d.name === name);

  return (
    <div>
      {dog ? (
        <div>
            <h1>{dog.name}</h1>
            <p>Age: {dog.age}</p>
            {dog.facts.map((fact, index) => (
                <p key={index}>{fact}</p>
            ))}
        </div>
      ) : (
        <p>Dog Not Found</p>
      )}
    </div>
  )
}

export default DogDetails
