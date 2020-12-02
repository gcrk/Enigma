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
      points: 100,
      door: '00'
    }
  };

  showHint = (hint) => {
    if (hint === "hint1") {
      this.setState( { showHints: {...this.state.showHints, hint1: true} } );
      this.setState( { points: 70 } )
    } else if (hint === "hint2" && this.state.showHints.hint1) {
      this.setState( { showHints: {...this.state.showHints, hint2: true} } );
      this.setState( { points: 40 } )
    } else if (hint === "hint3" && this.state.showHints.hint2){
      this.setState( { showHints: {...this.state.showHints, hint3: true} } );
      this.setState( { points: 10 } )
    }
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
      window.alert('try again')
    }
  };

  render() {
    let imgSource = ''
    if (this.state.passed) {
      imgSource = '/Green-Light.png'
    } else {
      imgSource = '/Red-Light.png'
    }
    return(
      <div>
        <Hints
          showMethod={ this.showHint }
          showState={ this.state.showHints }
          hints={ this.state.hints }
        />
        <Infos
          infos={ this.state.infos }
        />
        <div className='enigma'>
          <h1>The appartement</h1>
          <img src ={process.env.PUBLIC_URL + imgSource} width="98" height="72" alt="status" />

          <p>Appartment { this.state.door }</p>
          <img src ={process.env.PUBLIC_URL + '/door.png'} alt="appartement door" />
          {this.state.passed && <Link to='/2'><div className='nextenigma'>NEXT</div></Link>}
          <DoorNumber
            input={ this.doorNumberRing }
            number={ this.state.door }
            test={ this.passEnigma }
          />
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
