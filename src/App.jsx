import { useState } from 'react'
import ReactDOM from 'react-dom/client'

import './App.css'
import Navbar from './Navbar' 
import Hero from './Hero'
import Cards from './Cards'
import Data from './Data'

function App() {
  const alCards=Data.map(d=>{
      return (
        <Cards 
              key={d.id}
              {...d}
          />
        )
  })
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="all-cards">
          {alCards}
      </div>
    </div>
  )
}

export default App
