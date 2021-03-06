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
          I know it's been a long time but I need to see you as fast as possible.</p>
        <p>
          Can you come at my appartement? I'm still living at the same place. I need to show you something but please don't tell anyone.</p>
        <p>
          Your beloved uncle...</p>
      </div>
      <Link to='/1' className='home-letter-play'>PLAY !!!</Link>
    </div>

  )
}

export default Home
