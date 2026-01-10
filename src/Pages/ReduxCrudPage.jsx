import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; 
import { deleteStudent } from "../Features/StudentContactSlice";
// useSelector provides the access of reducer from where we can fetch the data
import { useNavigate } from "react-router-dom";
import ReduxConfiguration from "../Components/ReduxConfiguration";

const ReduxCrudPage = () => {
    const studentData = useSelector((state) => state.StudentStore);
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
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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
                                    {studentData.map((student, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{student.id}</td>
                                                <td>{student.studentName}</td>
                                                <td>{student.studentEmail}</td>
                                                <td>{student.studentPhone}</td>
                                                <td>{student.city}</td>
                                                <td align="center">
                                                    <button className="btn btn-info btn-sm">
                                                        <i className="bi bi-pencil-square" onClick={() => handleUpdate(student.id)}></i>
                                                    </button>
                                                    &nbsp;
                                                    <button className="btn btn-danger btn-sm">
                                                        <i className="bi bi-trash" onClick={() => handleDelete(student.id)}></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
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
                            <ReduxConfiguration />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReduxCrudPage;