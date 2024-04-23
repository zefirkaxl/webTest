import { createContext, useState } from "react";

export const GameContext = createContext({

})


export const GameContextProvider = ({children})=>{
const [cards,setCards]=useState({})
  const ctxValue = {

  }
  return(
    <GameContextProvider.Provider value={ctxValue}>
      {children}
    </GameContextProvider.Provider>
  )
}