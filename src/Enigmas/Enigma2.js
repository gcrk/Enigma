import React, { Component } from 'react';
import Hints from '../components/Hints.js';
import Infos from '../components/Infos.js';
import {Link} from 'react-router-dom';


const Board = (props) => {
  const { tl, tm, tr, ml, mm, mr, bl, bm, br } = props.button
  return(
    <div className='board'>
      <div className="board-row">
        <button onClick={ () => props.swap('tl') }>{tl}</button>
        <button onClick={ () => props.swap('tm') }>{tm}</button>
        <button onClick={ () => props.swap('tr') }>{tr}</button>
      </div>
      <div className="board-row">
        <button onClick={ () => props.swap('ml') }>{ml}</button>
        <button onClick={ () => props.swap('mm') }>{mm}</button>
        <button onClick={ () => props.swap('mr') }>{mr}</button>
      </div>
      <div className="board-row">
        <button onClick={ () => props.swap('bl') }>{bl}</button>
        <button onClick={ () => props.swap('bm') }>{bm}</button>
        <button onClick={ () => props.swap('br') }>{br}</button>
      </div>

    </div>
  )
}


class Enigma2 extends Component {
  constructor() {
    super();
    this.state = {
      passed: false,
      hints: ["Maybe you should read the Hitchhiker Guide to the Galaxy", "Agent Mulder have the same appartment number", "Ok, if you need the last hint you could probably divide 84 by 2"],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: "You are in front of the building of your uncle. You have to ring his appartement. There is no name at the front door but you remember that his appartement number is the answer to the question of the universe or something like that.",
      points: 100,
      buttons: { tl:"x", tm: "o", tr: "x", ml: "o", mm: "x", mr: "o", bl: "x", bm: "o", br:"x" },
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
  buttonSwap = (key) => {
    if ( this.state.buttons[key] === 'x' ) {
      this.setState( { buttons: { ...this.state.buttons, [key]: 'o' } } )
    } else {
      this.setState( { buttons: { ...this.state.buttons, [key]: 'x' } } )
    }
  }

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

  passEnigma = () => {
    const { tl, tm, tr, ml, mm, mr, bl, bm, br } = this.state.buttons
    if (tl==='o' && tm==='x' && tr==='o' && ml==='x' && mm==='x' && mr==='x' && bl==='x' && bm==='o' && br==='x' ) {
      this.setState( { passed: true } )
    } else {
      console.log('lose')
    }
  }

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
          <h1>The B<span
            onMouseEnter={this.handleBoxToggle}
            onMouseOut={this.handleBoxToggle}
            >0</span>ARD</h1>
          <img src={process.env.PUBLIC_URL + imgSource} width="98" height="72" alt="status" />

          <Board
            button={ this.state.buttons }
            swap={ this.buttonSwap }
          />

          <div
            className={`${this.state.showBox ? "enigma2show" : "enigma2hide"}`}
          >
            <div className="wrapper">
              <div>oxo</div>
              <div>xxx</div>
              <div>xox</div>
            </div>
          </div>
          { this.state.passed && <Link to='/3'><div className='nextenigma'>NEXT</div></Link> }
          <button
            onClick={ this.passEnigma }
            className='validEnigma'
            >ENTER
          </button>
        </div>
      </div>
    )
  }
}


export default Enigma2;
