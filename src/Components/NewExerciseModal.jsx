import React, { useRef } from "react";
import { useState } from "react";
import ReactDom from "react-dom";

const NewExerciseModal = ({ setShowModal, addExercise }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();

  const [name, setName] = useState("")

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const onSubmit = () => {
      if(name.length === 0){
        /* TODO: Better error message */
        alert("Please enter a name for the workout.")
        return
      }
      /* TODO: Check for name uniqueness */
      addExercise({name: name})
      setShowModal(false)
  }

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="new-exercise-container" ref={modalRef} onClick={closeModal}>
      <div className="new-exercise-modal-container">
        <h2 className="new-exercise-modal-title">New Exercise</h2>
        
        <input type="text" className="new-exercise-modal-name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
        
        <div className="new-exercise-modal-btn-container">
            <button onClick={() => setShowModal(false)} className="new-exercise-modal-close-btn">Cancel</button>
            <button onClick={() => onSubmit()} className="new-exercise-modal-submit-btn">Submit</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default NewExerciseModal