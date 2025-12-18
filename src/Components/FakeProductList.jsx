import { useSelector, useDispatch } from "react-redux";
import { FetchingProductDetails } from "../Features/FakeProductSlice";

const FakeProduct = () => {
    const gitUserData = useSelector((state) => {
        console.log('FakeProductStore 1 =', state.FakeProductStore);
        return state.FakeProductStore;
    });
    
    const dispatch = useDispatch();

    const handleFakeProduct = () => {
        dispatch(FetchingProductDetails());
    }
    return (
        <div id="git-user-redux">
            <br/>
            <button className='btn btn-dark btn-sm' onClick={handleFakeProduct}>
                Fetch Fake Products
            </button> <br/><br/>
            
            {gitUserData.isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {gitUserData?.apiData.length === 0 || gitUserData.isError 
                || gitUserData?.apiData === null ? (
                    <div className='alert alert-danger' style={{textAlign: 'center'}}>
                        No Products available or API failing
                    </div>
                ): (
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Count</th>
                            <th>Price</th>
                            <th>image</th>
                        </tr>
                    </thead>

                    <tbody>
                        {gitUserData?.apiData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td>{item.rating.rate}</td>
                                        <td>{item.rating.count}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} alt={item.image} className="img-fluid" />
                                        </td>
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
                )
            }
        </div>
    )
}

export default FakeProduct;