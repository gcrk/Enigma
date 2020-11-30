import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <Link to='/1'><img src={process.env.PUBLIC_URL + 'logo192.png'} /></Link>
  )
}

export default Home
