import React, { Component } from 'react';
import Hints from '../components/Hints.js';
import Infos from '../components/Infos.js';
import {Link} from 'react-router-dom';

class Enigma1 extends Component {
  constructor() {
    super();
    this.state = {
      passed: false,
      hints: ["Maybe you should read the Hitchhiker's Guide to the Galaxy", "Agent Mulder have the same appartment number", "Ok, The Answer to the Ultimate Question of Life, The Universe, and Everything is: 42"],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: "You managed to enter the building of your uncle. You now have to find his appartement. There is no name at the front door and you don't know his appartement number but you remember that he used to say that it is the answer to the ultimate question of life, or the universe... Not sure",
      points: 100,
      door: 0
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

  doorNumberRing = (num) => {
    if (this.state.door + num >= 0 && this.state.door + num <= 99) {
      this.setState( { door: this.state.door + num })
    }

  };

  passEnigma = () => {
    if (this.state.door === 42) {
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
      <div className='container'>
        <Hints
          showMethod={ this.showHint }
          showState={ this.state.showHints }
          hints={ this.state.hints }
        />

        <div className='enigma'>
        {this.state.passed && <Link to='/2' className='nextenigma'><div>NEXT</div></Link>}

          <h1>The appartement</h1>
          <div className='status'>
            <div>Status:</div>
            <img src ={process.env.PUBLIC_URL + imgSource} width="68" height="52" alt="status" />
          </div>
          <Door
            input={ this.doorNumberRing }
            doorNumber={ this.state.door }
            test={ this.passEnigma }
          />




        </div>
        <Infos
          infos={ this.state.infos }
        />
      </div>
    )
  }
}

const Door = ( props ) => {
  return (
    <div>
      <div className="door">
        <div className="doornumber"><span>{Math.floor(props.doorNumber /10)}</span><span>{props.doorNumber % 10}</span></div>
        <img src ={process.env.PUBLIC_URL + '/door.png'} alt="appartement door" />
      </div>
      <div>
        <img onClick={ () => props.input(10) } src={process.env.PUBLIC_URL + "arrow-up.svg"} width="30px" alt='up 10'/>
        <img onClick={ () => props.input(-10) } src={process.env.PUBLIC_URL + "arrow-down.svg"} width="30px" alt='up 10'/>
        <img onClick={ () => props.input(1) } src={process.env.PUBLIC_URL + "arrow-up.svg"} width="30px" alt='up 10'/>
        <img onClick={ () => props.input(-1) } src={process.env.PUBLIC_URL + "arrow-down.svg"} width="30px" alt='up 10'/>
      </div>
      <div>
        <button className="doorbutton" onClick={ props.test } >Ring</button>
      </div>
    </div>
  )
}
export default Enigma1;
