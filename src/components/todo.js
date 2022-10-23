import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const clicked = () => console.log("clicked");

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const changed = () => {
    setModalIsOpen(true);
  };

  // using props in an even handler
  const display = () => console.log(props.test);

  return (
    <div className="card">
      <h2>{props.text}</h2>
      {/* executes as js. can have any single line expression but no block statement like if */}
      <h2>{4 + 4}</h2>
      <div className="actions">
        <button className="btn" onClick={clicked}>
          DELETE
        </button>
        <button className="btn" onClick={display}>
          DISPLAY
        </button>
        <button className="btn" onClick={changed}>
          Changed
        </button>
      </div>
      {modalIsOpen ? <Modal /> : null}
      {modalIsOpen ? <Backdrop /> : null}
    </div>
  );
};

export default Todo;
