import React from 'react'
import { Link } from "react-router-dom"

import dogName from './db.json'

function Dogs() {
  return (
    <div>
      <h1>Dog List</h1>
      <div>
        {dogName.dogs.map((dog, index) => (
            <div key={index}>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                {/* <h1>{dog.name}</h1> */}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Dogs
