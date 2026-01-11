import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showDmartEmp } from '../Features/DmartEmpSlice';

const DmartReduxList = () => {
    const {apiData, isLoading, isError} = useSelector((state) => {
       console.log("useSelector =", state.DmartEmpStore);
        return state.DmartEmpStore
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showDmartEmp());
    }, [dispatch]);

    console.log("showDmartEmpAllData =", apiData);
    console.log("isLoading =", isLoading);
    console.log("isError =", isError);
    return(
        <div className='container' id="student-redux-list">
        <div className='row mb-4'>
            <div className='col-12'>
                <h4 className="fw-bold text-primary d-flex align-items-center gap-2">
                    <i className="bi bi-card-checklist"></i> Dmart Employee Record
                </h4>
            </div>
        </div>
        <div className='row'>
            {isLoading && (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            )}
            
            {apiData && apiData.length > 0 && apiData.map((item) => (
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4' key={item.id}>
                    <div className="card shadow-sm border-0 rounded-4 h-100 dmartCard position-relative">
                        <div className="card-header rounded-top-4">
                            <span className="fw-semibold">Emp Id:</span> {item.empId}
                        </div>
                        <div className="card-body">
                            <h6 className="card-title text-dark">{item.empName}</h6>
                            <p className="card-text mb-1">
                                <i className="bi bi-envelope-at-fill me-2"></i> {item.empEmail}
                            </p>
                            
                            <p className="card-text mb-3">
                                <i className="bi bi-geo-alt-fill me-2"></i> {item.empCity}
                            </p>
                            
                            <Link to="#" className="btn btn-outline-primary btn-sm float-end d-flex align-items-center gap-1">
                                Show in Detail <i className="bi bi-arrow-bar-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default DmartReduxList;