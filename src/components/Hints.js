import React from 'react';




const Hints = (props) => {
  const { hint1, hint2, hint3 } = props.showState
  return(
    <div className='hints'>
      <div className='hintsButtons'>
        <p onClick={ () => props.showMethod("hint1") }>1</p>
        <p onClick={ () => props.showMethod("hint2") }>2</p>
        <p onClick={ () => props.showMethod("hint3") }>3</p>
      </div>
      <p>{ hint1 && props.hints[0] }</p>
      <p>{ hint2 && props.hints[1] }</p>
      <p>{ hint3 && props.hints[2] }</p>

    </div>
  )
}
export default Hints
