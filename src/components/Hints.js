import React from 'react';
import background from './notepad.png'

const Hints = (props) => {
  const { hint1, hint2, hint3 } = props.showState
  return(
    <div className='hints' style={{backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

      <div className='hints-container'>
        <div className='box-title' >HINTS</div>
        <div className='hintsButtons'>
          <p onClick={ () => props.showMethod("hint1") }>1</p>
          <p onClick={ () => props.showMethod("hint2") }>2</p>
          <p onClick={ () => props.showMethod("hint3") }>3</p>
        </div>
        <p>{ hint1 && props.hints[0] }</p>
        <p>{ hint2 && props.hints[1] }</p>
        <p>{ hint3 && props.hints[2] }</p>
      </div>
    </div>
  )
}
export default Hints
