import { useEffect } from 'react';


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
                    <h5 className="modal-title" id="exampleModalCenterTitle">Whats is useSelector in React Redux ? <i className="bi bi-book-half"></i></h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                    <p>
                        The <b>useSelector()</b> hook is primarily used for extracting the data from Redux store within the functional component. <b>useSelector()</b> takes a selector function as an argument. This function receiving the entire Redux store state and returning the specefic piece of data that the component needs.
                    </p>

                    <p className='text-danger'>
                        When the states are changing inside the Redux store, so the useSelector automatically re-renders, ensuring that it always displays the most up-to-date information.
                    </p>
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