import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { deleteStudent } from "../features/StudentContactSlice";
// useSelector provides the access of reducer from where we can fetch the data
import { useNavigate } from "react-router-dom";

const ReduxCrudPage = () => {
    const studentData = useSelector((state) => state.StudentRecord);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log('studentData ReduxCrudPage =', studentData);

    const handleUpdate = (id) => {
        console.log('handleUpdate =', id);
        navigate(`/edit-student/${id}`);
    }

    const handleDelete = (id) => {
        // console.log('handleDelete =', id);
        if (window.confirm('Are you sure want to delete ?') === true) {
            console.log('Yes I wanted to delete this record');
            dispatch(deleteStudent({
                id: id
            }));
        }
    }
    return (
        <div>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Crud Operation with React Redux Toolkit 
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="redux-crud">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <Link to="/redux-create-new-contact" className="btn btn-info btn-sm"> Add New Contact </Link>
                            <h6>Student Record:</h6>
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <td>Id</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Phone</td>
                                        <td>City</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                    
                                <tbody>
                                    {
                                        studentData.map((student, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{student.id}</td>
                                                    <td>{student.studentName}</td>
                                                    <td>{student.studentEmail}</td>
                                                    <td>{student.studentPhone}</td>
                                                    <td>{student.city}</td>
                                                    <td align="center">
                                                        <button className="btn btn-info btn-sm">
                                                            <Icon.Pencil onClick={() => handleUpdate(student.id)} />
                                                        </button>
                                                        &nbsp;
                                                        <button className="btn btn-danger btn-sm">
                                                            <Icon.Trash onClick={() => handleDelete(student.id)}/>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h5>Best video for Crud Operation using React Redux Toolkit:</h5>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/DOkSU3yg4vQ?si=IIlp9pUyfpKzrV0o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="lightGreenBG">
                                <h6>Steps for configure Redux:</h6>
                                <ul>
                                    <li>Step 1: Firstly we need to create the store</li>
                                    <li>Step 2: Wrap the react app by using provider and add the store attribute and assign the store configuration in index.js file</li>
                                    <li>Step 3: Create the feature slice, This is the actual file where you need to create feature about common States</li>
                                    <li>
                                        Step 4: Register the slice feature with store.js file., This file needs all the slice registration
                                    </li>
                                    <li>
                                        Step 5: Later you can use the useSelector() hook for getting the latest data from the store
                                        </li>
                                    <li>
                                        Step 5: And if you wanted to update the state then you need to use the useDispatch() hook to pass the action to the reducer, and reducer will take your action and payload and perform the opertion based on your request
                                    </li>
                                </ul>

                                <h6>
                                    Best tutorial for Setup: <Link href="https://whataboutcoding.com/redux-toolkit-tutorial/" target="_target">https://whataboutcoding.com/redux-toolkit-tutorial/</Link> 
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReduxCrudPage;