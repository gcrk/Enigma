import React from 'react';
import { Link } from 'react-router-dom';
import paper from './paper.png'

const Home = () => {
  return(

    <div className='home-letter' style={{backgroundImage: `url(${paper})`, backgroundSize: 'cover' }}>
      <div className='home-letter-text' >
        <p>
          Hello.</p>
        <p>
          This game has been developed by</p>
        <p>
          Guillaume Canneton</p>
        <p>
          You can find my other project here:</p>
        <Link to='https://github.com/gcrk' className='home-letter-play'>MY GITHUB</Link>
        <p>
          New Enigmas are coming...</p>
      </div>

    </div>

  )
}

export default Home
