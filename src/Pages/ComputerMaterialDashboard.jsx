import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';
import AppImages from '../Assets';

const ComputerMaterialDashboard = () => {
    
    return (
        <div id='computer-material-dashboard'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                Computer Material Dashboard  <Icon.Projector />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section id="computer-operation">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="float-start">
                                <pre className="alert-warning">To Start Json Server: <b>json-server --watch db.json --port 8000</b></pre>

                                <Link to="https://www.computronicsmultivision.com/" target='_blank'>
                                    https://www.computronicsmultivision.com/
                                </Link>
                            </div>

                            <div className="float-end">
                                <Link className="btn btn-success btn-sm" to="create">Add New +</Link>
                                &nbsp;&nbsp;
                                <Link className="btn btn-success btn-sm" to="product-list">Products List</Link>
                            </div>
                            <div className="clearfix"></div>
                            <hr className="bg-danger" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Outlet/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <img src={AppImages.ComputerParts} alt='AppImages.ComputerParts' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ComputerMaterialDashboard;