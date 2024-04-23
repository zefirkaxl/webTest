import React from 'react'

import './Games.scss'
import Game from './Game'
const gameList = ['game1','game2','game3','game4','game5']
const Games = (props)=>{
  return (
<div className='game'>
  <aside className='game__aside'>
    {gameList.map(item=>{
      return(
        <button className='game__button' key={item}>{item}</button>
      )
    })}
  </aside>
  <main className='game__main'>
    <Game/>

  </main>
</div>
  )
}

export default Games