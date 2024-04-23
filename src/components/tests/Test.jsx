import Modal from "../Modal";
import ResultTestModal from "./ResultTestModal";
import "./Test.scss";
const laungeList = ["HTML", "CSS", "JS", "React"];
import { TestContext } from "../contexts/ContextTest";
import { useContext } from "react";
import Ansvers from "./ansvers/Ansvers";

const Test = (props) => {
  const { language, setLanguage,ansverList } = useContext(TestContext);

  const changeLanguage = (item) => {
    setLanguage((language) => item);
  };
  
  return (
    <div className="test">
      <aside className="test__aside">
        {laungeList.map((item) => {
          return (
            <button
              onClick={() => changeLanguage(item)}
              className="test__button"
              key={item}
            >
              {item}
            </button>
          );
        })}
      </aside>
      <main className="test__main">
        {language ? <Ansvers key={language}  /> : <p className="test__no-question">Виберіть категорію</p>}

        <Modal>
          <ResultTestModal />
        </Modal>
      </main>
    </div>
  );
};

export default Test;
