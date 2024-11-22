import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const ComputerMaterialList = () => {
    const [computerData, setComputerData] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchComputerData = async () => {
            const url = "http://localhost:8000/computerProducts";
            setIsLoading(true);
            try {
                const res = await fetch(url);
                const response = await res.json();
                console.log('fetchComputerData Success =', response);
                setComputerData(response);
                setIsLoading(false);
            }
            catch (error) {
                console.log('fetchComputerData Error =', error);
                setIsLoading(false);
            }
        }

        fetchComputerData();
    }, []);

    const handleDelete = (e) => {
        console.log('handleDelete =', e);
    }

    const showMoreShowLess = () => {
        setShowMore(!showMore);
    }
    return (
        <section id='computer-material-list'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h5>Computer Material List <Icon.List /></h5>
                            {isLoading && (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            )}
                            <table className="table table-striped">
                                <thead>
                                    <tr className="bg-dark text-white">
                                        <td>SL No</td>
                                        <td>Name</td>
                                        <td>Brand</td>
                                        <td>Category</td>
                                        <td>Price</td>
                                        <td>Description</td>
                                        <td>Image</td>
                                        <td align="right">Action</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        computerData &&
                                        computerData.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.brand}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.price}</td>
                                                    <td>
                                                        {
                                                            showMore ? item.description : `${item.description.substring(0,30)}...`
                                                        }
                                                        <span className='text-success' style={{cursor: 'pointer'}} onClick={showMoreShowLess}>{ showMore ? " Show Less" : "Show More"}</span>
                                                    </td>
                                                    <td>
                                                        <img src={'http://localhost:8000/images/' + item.imageFileName} alt='computers images' className='img-fluid' width="100px" height="100px" />
                                                    </td>
                                                    <td align="right">
                                                        <Link className="btn" to={'/computer-material-dashboard/products/edit/' + item.id}> <Icon.Pencil /> </Link>
                                                        <button className="btn" onClick={() => { handleDelete(item.id) }}> <Icon.Trash /> </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ComputerMaterialList;