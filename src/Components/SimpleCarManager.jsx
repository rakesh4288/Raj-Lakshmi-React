import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import * as Icon from 'react-bootstrap-icons';
const SimpleCarManager = () => {
    const initialFormValues = {
        carName: '',
        carColor: ''
    }
    const [formValues, setFormValues] = useState(initialFormValues);
    const [carList, setCarList] = useState([]);
    const [copyCarList, setCopyCarList] = useState();
    const [formError, setFormError] = useState({});
    const [modalShow, setModalShow] = useState({
        popup: false,
        carManager: {
            newCar: false,
            deleteCar: false
        }
    });

    const handleChange = (e) => {
       const {name, value} = e.target;
       setFormValues({
        ...formValues,
        [name]: value
       });
    }

    // console.log('setFormValues =', formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = formValidation();
        console.log('isFormValid =', isFormValid);
        if(isFormValid) {
           //  console.log('Now we can submit form !!');
            setCarList([
                ...carList,
                {
                    id: nanoid(),
                    carName: formValues.carName,
                    carColor: formValues.carColor
                }
            ]);

            setCopyCarList([
                ...carList,
                {
                    id: nanoid(),
                    carName: formValues.carName,
                    carColor: formValues.carColor
                }
            ]);

            setFormValues({
                carName: '',
                carColor: ''
            })

            setModalShow({
                popup: true,
                carManager: {
                    newCar: true,
                    deleteCar: false
                }
            });
            
        } else {
            console.log('Not Able to Submit !!');
        }
    }

    const formValidation = () => {
        let errros = {}
        if(formValues.carName === ''){
            errros.carName = 'Please Enter Car Name !'
        }

        if(formValues.carColor === ''){
            errros.carColor = 'Please Enter Color Name !'
        }

        setFormError({...errros});
       const errorsKeys = Object.keys(errros);
       // console.log('errorsKeys =', errorsKeys);
        if(errorsKeys.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    const handleDelete = (id) => {
        console.log('handleDelete =', id);
        if(window.confirm("Are you want to delete ?")){
            console.log('handleDelete YES');
            let tempArray = [];
            tempArray= copyCarList.filter((item) => item.id!== id);
            console.log('tempArray =', tempArray);
            setCarList(tempArray);
            setModalShow({
                popup: true,
                carManager: {
                    newCar: false,
                    deleteCar: true
                }
            });
        }
    }

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        console.log('searchValue =', searchValue);
        let tempArray = []; 
        tempArray = copyCarList.filter((item) => item.carName?.toLowerCase().includes(searchValue.toLowerCase()));
        console.log('handleSearch =', tempArray);
        setCarList(tempArray);
    }

    const handleModalClose = () => {
        setModalShow({popup: false});
    }
    console.log('carList =', carList);

    return (
        <div id="simple-task-manager" className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <form className='alert alert-success' onSubmit={handleSubmit}>
                    <h6>Add Your New Car:</h6>
                    <div className='mb-3'>
                        <label htmlFor="car-name" className="form-label">Car Name:</label>
                        <input type='text' className='form-control' id='car-name' name="carName" value={formValues.carName} onChange={handleChange} />
                        { formError && (<div className="text-danger"> {formError.carName} </div>)}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="car-color" className="form-label">Car Color:</label>
                        <input type='text' className='form-control' id='car-color' name="carColor" value={formValues.carColor} onChange={handleChange} />
                        { formError && (<div className="text-danger"> {formError.carColor} </div>)}
                    </div>

                    <button type='submit' className='btn btn-primary btn-sm'>Add Car <Icon.CarFront/></button>
                </form>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="clearfix">
                    <div className="float-start">
                        <h6>Car List Here</h6> 
                    </div>

                    <div className="float-end">
                        <input type="text" placeholder="Search By Car Name" onChange={handleSearch} />
                    </div>
                </div>

                {
                    carList.length === 0 ? (<div className="text-danger">No Car Found !, Please Add New Car</div>) : (
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td>SNO</td>
                                    <td>Name</td>
                                    <td>Color</td>
                                    <td>Action</td>
                                </tr>
                                {
                                    carList.map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.carName}</td>
                                                <td>{item.carColor}</td>
                                                <td style={{cursor: 'pointer', textAlign: 'center'}}
                                                >
                                                    <Icon.Trash onClick={() => handleDelete(item.id)}/>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            
            {
                modalShow.popup && (
                    <div id="modalBackdrop" className="modalBackDrop">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Car Manager <Icon.CarFront /></h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
                            </div>
                            <div className="modal-body">
                                {
                                  modalShow?.carManager?.newCar === true ? (
                                    <h6>New Car Added Successfully !!</h6>
                                  ) : null
                                }

                                {
                                  modalShow?.carManager?.deleteCar && (
                                    <h6> Car Deleted !!</h6>
                                  )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-sm" onClick={handleModalClose}>OK</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SimpleCarManager;