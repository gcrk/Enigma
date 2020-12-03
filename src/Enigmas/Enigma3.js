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
      <button className='resetbutton' onClick={ () => props.reset() }>Reset</button>
    </div>
  )
}


class Enigma3 extends Component {
  constructor() {
    super();
    this.state = {
      passed: false,
      hints: ["Ok not that easy. Is it possible to press all the buttons at the same time?", "There is probably an easy way to do that, maybe in 4 moves", "Ok, try 2 - 6 - 8 - 5"],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: "Ok now there is another padlock, I knew the previous one was to easy, not so many combinations. For this one I suppose I have to turn on each button, That's seems an easy one...",
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
    const newSet = {};
    for (let key of keys){
      newSet[key] = !this.state.buttons[key]
    }
    const result = { a: true, b: true, c: true, d: true, e: true, f: true, g: true, h: true, i: true, j: true }
    const passed = ( JSON.stringify({...this.state.buttons, ...newSet }) === JSON.stringify(result) )
    this.setState( { passed: passed, buttons: { ...this.state.buttons, ...newSet } } )

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

    return(
      <div className='container'>
        <Hints
          showMethod={ this.showHint }
          showState={ this.state.showHints }
          hints={ this.state.hints }
        />

        <div className='enigma'>
          <h1>The Switchers</h1>
          <div className='status'>
            <div>Status:</div>
            <img src ={process.env.PUBLIC_URL + imgSource} width="68" height="52" alt="status" />
          </div>

          <Switches
            button={ this.state.buttons }
            swap={ this.buttonSwap }
            reset={ this.buttonReset }
          />


          {this.state.passed && <Link to='/4' className='nextenigma'><div>NEXT</div></Link>}

        </div>
        <Infos
          infos={ this.state.infos }
        />
      </div>
    )
  }
}


export default Enigma3;
