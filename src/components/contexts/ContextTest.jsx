import { createContext, useEffect, useState } from "react";
import {
  questionsHTML,
  questionCSS,
  questionJS,
  questionsREACT,
} from "../question";
export const TestContext = createContext();

const TestContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("");
  const [ansverList, setAnsverList] = useState(questionsHTML);
  const [counterAnswer, setCounterAnswer] = useState(0);
const [userResponses,setUserResponses] = useState([])
  useEffect(() => {
    switch (language) {
      case "HTML":
        setAnsverList(questionsHTML);
        break;
      case "CSS":
        setAnsverList(questionCSS);
        break;
      case "JS":
        setAnsverList(questionJS);
        break;
      case "React":
        setAnsverList(questionsREACT);
        break;
      default:
        break;
    }
  }, [language]);
  console.log(userResponses)
  useEffect(() => {
    setCounterAnswer((counterAnswer => counterAnswer = 0));
  }, [language]);
const handleUserAnswer=(ind)=>{
  setUserResponses((responses) => [
    ...responses,
    { [ansverList[counterAnswer].question]: ind },
  ]);
}

const handleCounter = (ind) => {
  setCounterAnswer((answer) => answer + 1);
  handleUserAnswer(ind)
};

  const ctrValue = {
    language,
    setLanguage,
    ansverList,
    counterAnswer,
    handleCounter: handleCounter,
  };
  return (
    <TestContext.Provider value={ctrValue}>{children}</TestContext.Provider>
  );
};
export default TestContextProvider;
