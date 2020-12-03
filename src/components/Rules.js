import React from 'react';
import paper from './paper.png'

const Home = () => {
  return(

    <div className='home-letter' style={{backgroundImage: `url(${paper})`, backgroundSize: 'cover' }}>
      <div className='home-letter-text' >
        <p>
          Rules</p>
        <p>
          Very simple:</p>
        <p>
          Go to an enigma.</p>
        <p>
          Resolve it!!!</p>
      </div>
    </div>

  )
}

export default Home
