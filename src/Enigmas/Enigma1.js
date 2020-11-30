import React, { Component } from 'react';
import Hints from '../components/Hints.js';
import Infos from '../components/Infos.js';
import {Link} from 'react-router-dom';

class Enigma1 extends Component {
  constructor() {
    super();
    this.state = {
      passed: false,
      hints: ["Maybe you should read the Hitchhiker Guide to the Galaxy", "Agent Mulder have the same appartment number", "Ok, if you need the last hint you could probably divide 84 by 2"],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: "You are in front of the building of your uncle. You have to ring his appartement. There is no name at the front door but you remember that his appartement number is the answer to the question of the universe or something like that.",
      door: '00'
    }
  };

  showHint = (hint) => {
    this.setState( { showHints: hint } )
  }

  doorNumberRing = (event) => {
    this.setState( {
      door: event.target.value
    })
  };

  passEnigma = () => {
    if (this.state.door === '42') {
      this.setState( {
        passed: true
      })
      console.log('passed')
    } else {
      console.log('try again')
    }
  };

  render() {
    let imgSource = ''
    let link = '/1'
    if (this.state.passed) {
      imgSource = '/Green-Light.png'
      link = '/2'
    } else {
      imgSource = '/Red-Light.png'
    }
    return(
      <div>
        <Hints showMethod={ this.showHint } showState={ this.state.showHints } hints={ this.state.hints }/>
        <Infos infos={ this.state.infos }/>
        <div className='enigma'>
          <h1>The appartement</h1>
          <img src ={process.env.PUBLIC_URL + imgSource} width="98" height="72" />

          <p>Appartment { this.state.door }</p>
          <Link to={link}><img src ={process.env.PUBLIC_URL + '/door.png'} /></Link>
          <DoorNumber input={ this.doorNumberRing } number={ this.state.door } test={ this.passEnigma } />
        </div>
      </div>
    )
  }
}

const DoorNumber = ( props ) => {
  return (
    <div>
      <input type='text' onChange={ props.input } />
      <button onClick={ props.test } >Ring</button>
    </div>

  )

}
export default Enigma1;
