import React, { Component } from 'react';
import Hints from '../components/Hints.js';
import Infos from '../components/Infos.js';
import {Link} from 'react-router-dom';


const Switches = (props) => {
  const { a, b, c, d, e, f, g, h, i, j } = props.button
  return(
    <div className='switches'>
      <div>
        <img onClick={ () => props.swap('b', 'c') } src={process.env.PUBLIC_URL + `${ a ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ a ? 'light on' : 'light off'}`} width="50px" height="50px" />
      </div>
      <div>
        <img onClick={ () => props.swap('a', 'c', 'd', 'e') } src={process.env.PUBLIC_URL + `${ b ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ b ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('a', 'b', 'e', 'f') } src={process.env.PUBLIC_URL + `${ c ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ c ? 'light on' : 'light off'}`} width="50px" height="50px" />
      </div>
        <img onClick={ () => props.swap('b', 'e', 'g', 'h') } src={process.env.PUBLIC_URL + `${ d ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ d ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('b', 'c', 'd', 'f', 'h', 'i') } src={process.env.PUBLIC_URL + `${ e ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ e ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('c', 'e', 'i', 'j') } src={process.env.PUBLIC_URL + `${ f ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ f ? 'light on' : 'light off'}`} width="50px" height="50px" />
      <div>
        <img onClick={ () => props.swap('d', 'h') } src={process.env.PUBLIC_URL + `${ g ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ g ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('d', 'e', 'g', 'i') } src={process.env.PUBLIC_URL + `${ h ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ h ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('e', 'f', 'h', 'j') } src={process.env.PUBLIC_URL + `${ i ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ i ? 'light on' : 'light off'}`} width="50px" height="50px" />
        <img onClick={ () => props.swap('f', 'i') } src={process.env.PUBLIC_URL + `${ j ? 'button-blue.png' : 'button-off.png'}`} alt={process.env.PUBLIC_URL + `${ j ? 'light on' : 'light off'}`} width="50px" height="50px" />
      </div>
      <button onClick={ () => props.reset() }>Reset</button>
    </div>
  )
}


class Enigma3 extends Component {
  constructor() {
    super();
    this.state = {
      passed: false,
      hints: ["Maybe you should read the Hitchhiker Guide to the Galaxy", "Agent Mulder have the same appartment number", "Ok, if you need the last hint you could probably divide 84 by 2"],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: "You are in front of the building of your uncle. You have to ring his appartement. There is no name at the front door but you remember that his appartement number is the answer to the question of the universe or something like that.",
      points: 100,
      buttons: { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false },
      showBox: false
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
  buttonSwap = (...keys) => {
    // for (let key of keys){
    //   this.setState( { buttons: { ...this.state.buttons, [key]: !this.state.buttons[key] } } )
    // }

    const newSet = {};
    for (let key of keys){
      newSet[key] = !this.state.buttons[key]
    }
    this.setState( { buttons: { ...this.state.buttons, ...newSet } } )
  }
  buttonReset = () => {
    this.setState( { buttons: { a: false, b: false, c: false, d: false, e: false, f: false, g: false, h: false, i: false, j: false } })
  }


  render() {
    let imgSource = ''
    if (this.state.passed) {
      imgSource = '/Green-Light.png'
    } else {
      imgSource = '/Red-Light.png'
    }
    const result = { a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true }
    if ( JSON.stringify(this.state.buttons) === JSON.stringify(result) ) {
      console.log('passed')
      // this.setState( { passed: true } )
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
          <h1>The Swithers</h1>
          <img src={process.env.PUBLIC_URL + imgSource} width="98" height="72" alt="status" />

          <Switches
            button={ this.state.buttons }
            swap={ this.buttonSwap }
            reset={ this.buttonReset }
          />


          { this.state.passed && <Link to='/2'><div className='nextenigma'>NEXT</div></Link> }

        </div>
      </div>
    )
  }
}


export default Enigma3;
