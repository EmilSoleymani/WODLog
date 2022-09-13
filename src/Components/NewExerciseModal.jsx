import React, { useRef } from "react";
import ReactDom from "react-dom";

const NewExerciseModal = ({ setShowModal }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="new-exercise-container" ref={modalRef} onClick={closeModal}>
      <div className="new-exercise-modal-container">
        <h2 className="new-exercise-modal-title">New Exercise</h2>
        
        <input type="text" className="new-exercise-modal-name" placeholder="Name"/>
        
        <div className="new-exercise-modal-btn-container">
            <button onClick={() => setShowModal(false)} className="new-exercise-modal-close-btn">Cancel</button>
            <button onClick={() => setShowModal(false)} className="new-exercise-modal-submit-btn">Submit</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default NewExerciseModal