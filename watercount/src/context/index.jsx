import React, { createContext, useState } from 'react';

export const context = createContext();

export const ContextProvider = props => {

  const [valueml, setValueMl] = useState(0)
  const [cup, setCup] = useState(0) 
  const [goal, setGoal] = useState(0)

  return (
    <context.Provider
        value={{
          valueml, 
          setValueMl,
          cup,
          setCup,
          goal,
          setGoal
        }}
        >
        {props.children}
    </context.Provider>
  )
}