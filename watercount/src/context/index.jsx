import React, { createContext, useState } from "react";

export const context = createContext();

export const ContextProvider = (props) => {
  const [valueml, setValueMl] = useState(0);
  const [cup, setCup] = useState(0);
  const [goal, setGoal] = useState(0);
  const [cuphist, setCuphist] = useState(0);
  const [quantcuphist, setQuantcuphist] = useState(0);
  const [historicData, setHistoricData] = useState("");
  const [status, setStatus] = useState("Goal not Reached")

  return (
    <context.Provider
      value={{
        valueml,
        setValueMl,
        cup,
        setCup,
        goal,
        setGoal,
        cuphist,
        setCuphist,
        quantcuphist,
        setQuantcuphist,
        historicData, 
        setHistoricData,
        status,
        setStatus
      }}
    >
      {props.children}
    </context.Provider>
  );
};
