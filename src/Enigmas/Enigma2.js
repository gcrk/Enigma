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
      hints: [`What value "null" in real life but is not "Null" in programming?`, `Ok so I need to get rid of all the "0" here`, `Is that a "O" or a "0" on the thing that I'm pointing?`],
      showHints: {hint1: false, hint2: false, hint3: false},
      infos: `There is no common lock on the door. Only this weird keypad that remind me something I know, but it seems that it was an eternity ago. There is a message that says: "some think it's null but my program says it's not, try to get rid of all of them to find the solution"`,
      points: 100,
      buttons: { tl:"X", tm: "0", tr: "X", ml: "0", mm: "X", mr: "0", bl: "X", bm: "0", br:"X" },
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
    if ( this.state.buttons[key] === 'X' ) {
      this.setState( { buttons: { ...this.state.buttons, [key]: '0' } } )
    } else {
      this.setState( { buttons: { ...this.state.buttons, [key]: 'X' } } )
    }
  }

  handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

  passEnigma = () => {
    const { tl, tm, tr, ml, mm, mr, bl, bm, br } = this.state.buttons
    if (tl==='0' && tm==='X' && tr==='0' && ml==='X' && mm==='X' && mr==='X' && bl==='X' && bm==='0' && br==='X' ) {
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
      <div className='container'>

        <Hints
          showMethod={ this.showHint }
          showState={ this.state.showHints }
          hints={ this.state.hints }
        />

        <div className='enigma'>
          <h1>The B<span
            onMouseEnter={this.handleBoxToggle}
            onMouseOut={this.handleBoxToggle}
            >0</span>ARD</h1>
          <div className='status'>
            <div>Status:</div>
            <img src ={process.env.PUBLIC_URL + imgSource} width="68" height="52" alt="status" />
          </div>

          <Board
            button={ this.state.buttons }
            swap={ this.buttonSwap }
          />

          <div
            className={`${this.state.showBox ? "enigma2show" : "enigma2hide"}`}
          >
            <div className="wrapper">
              <div>0X0</div>
              <div>XXX</div>
              <div>X0X</div>
            </div>
          </div>

          <button
            onClick={ this.passEnigma }
            className='validEnigma'
            >ENTER
          </button>
          {this.state.passed && <Link to='/3' className='nextenigma'><div>NEXT</div></Link>}
        </div>
        <Infos
          infos={ this.state.infos }
        />
      </div>
    )
  }
}


export default Enigma2;
