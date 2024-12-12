import React, { useEffect } from 'react';
import * as Icon from 'react-bootstrap-icons';

const RajLakshmiModal = ({handleClose}) => {
    // Closing the Modal while clicking on Esc x
    useEffect(() => {
        // Component Did Mount
        function onKeyDown(event) {
            if(event.keyCode === 27) {
                handleClose();
            }
        }

        document.addEventListener("keydown", onKeyDown);

        // Component Did Mount Update
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    })
    return (
        <div id="modalBackdrop" className="modalBackDrop">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalCenterTitle">React Redux Popup <Icon.BookHalf /></h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                    <p>
                        React Redux is a state management library for React applications. Redux is simply helps to manage the state of your application
                    </p>

                    <p>In other words it is used to manage the data of the application.</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={handleClose}>Close</button>
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleClose}>Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
};

export default RajLakshmiModal;