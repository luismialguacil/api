import React from "react";
import ModalContainer from "./Modal-style";

const Modal = ({
  id,
  title,
  location,
  gender,
  status,
  origin,
  image,
  species,
}) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <ModalContainer className="modal-dialog modal-dialog-centered ">
        <div className="modal-content container">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col">
                <img src={image} alt={title} />
              </div>
              <div className="col info">
                <span>Gender: {gender}</span>
                <span>Race: {species}</span>
                <span>Status: {status}</span>
                <span>Origin: {origin}</span>
                <span>Current location: {location}</span>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
};

export default Modal;
