import React from "react";
import "./Ansvers.scss";
import { useContext } from "react";
import { TestContext } from "../../contexts/ContextTest";

const Ansvers = () => {
  const { ansverList, counterAnswer,  handleCounter } =
    useContext(TestContext);
  
  return (
    <div className="ansvers">
      <h2 className="ansvers__question">{ansverList[counterAnswer].question}</h2>
      <ul className="ansvers__list">
        {ansverList[counterAnswer].options.map((el, ind) => {
          return (
            <li  key={ind}>
              <button className="ansvers__btn" onClick={()=>handleCounter(ind)}> {el}</button>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Ansvers;
