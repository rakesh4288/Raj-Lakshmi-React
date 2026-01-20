import { useEffect, useState } from "react";

const ProductDashboard = () => {
    const [productData, setProductData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [copyProductData, setCopyProductData] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const url = "https://dummyjson.com/products";
    const FetchingProduct = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const result = await response.json();
            if (result?.products.length > 0) {
                setProductData(result?.products);
                setCopyProductData(result?.products);
                setIsLoading(false);
            } else {
                setProductData([]);
                setIsLoading(false)
            }
        }
        catch (err) {
            console.log('FetchingProduct API ERROR =', err);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        FetchingProduct();
    }, []);

    // Handling Add to Cart
    const handleAddToCart = (id) => {
        setCartCount(cartCount + 1);
        const updatedProductList = productData.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    stock: item.stock - 1
                }
            }
            return item;
        });
        setProductData(updatedProductList);
    }

    // Branding Filter
    const uniqueBrand = [...new Set(copyProductData.map((item) => item.brand))];
    // console.log('uniqueBrand =', uniqueBrand);
    const handleBrand = (e) => {
        const selectedBrand = e.target.value;
        // console.log('selectedBrand =', selectedBrand);
        if (selectedBrand === '' || selectedBrand === null || selectedBrand === undefined) {
            setProductData(copyProductData);
        } else {
            const updatedBrand = copyProductData.filter((item) => item.brand === selectedBrand);
            // console.log('updatedBrand =', updatedBrand);
            setProductData(updatedBrand);
        }
    }
    // console.log('productData =', productData);

    const handleTitleFilter = (e) => {
        const searchInput = e.target.value;
        if(searchInput === '') {
            // setProductData(copyProductData);
            FetchingProduct();
        } else {
            const filteredTitle = copyProductData.filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase()));
            console.log('filteredTitle =', filteredTitle);
            setProductData(filteredTitle);
        }
    }

    return (
        <div id="product-dashboard">
            <section id="page-header" className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading float-start"> Product Dashboard </h4>
                            <button className="btn btn-warning btn-sm float-end">Cart Count: {cartCount}</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="filter-segment" className="mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                                <div id="filter-brand">
                                    <label>Filter By Brand</label>
                                    <select id="brand-filter" className="form-select" onChange={handleBrand}>
                                        <option value="">Select Brand</option>
                                        {uniqueBrand.map((item, index) => {
                                            return (
                                                <option key={index + 1} value={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>

                                <div id="filter-title">
                                    <label>Filter By Title</label>
                                    <input type="search" placeholder="Search By Title" className="form-control" onChange={handleTitleFilter} />
                                </div>

                                <div>
                                    <label>Filter By Title</label>
                                    <input type="search" placeholder="Search By Title" className="form-control" />
                                </div>

                                <div>
                                    <label>Filter By Title</label>
                                    <input type="search" placeholder="Search By Title" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <section id="product-listing" className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        {productData && productData.length > 0 ? (
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <td>SNO</td>
                                        <td>Title</td>
                                        <td>category</td>
                                        <td>Price</td>
                                        <td>Stock</td>
                                        <td>Brand</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    {productData.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.category}</td>
                                                <td>{item.price}</td>
                                                <td>{item.stock}</td>
                                                <td>{item.brand}</td>
                                                <td>
                                                    <button className="btn btn-success btn-sm" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <div className="text-danger"> NO Product is available </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDashboard;