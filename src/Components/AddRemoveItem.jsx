import React, { useRef, useState } from 'react';

const AddRemoveItem = () => {
    const [mainItems, setMainItems] = useState([]);
    const [itemValue, setItemValue] = useState();
    const inputRef = useRef();
    const [copyItem, setCopyItem] = useState([]);
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const currentValue = e.target.value;
        setItemValue(currentValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (itemValue === '') {
            console.log('Please add anything');
        } else {
            // console.log('Now Okay');
            setMainItems(prev => {
                return [...prev, itemValue];
            });

            setCopyItem(prev => {
                return [...prev, itemValue];
            });
            inputRef.current.value = "";
        }
    }

    // console.log('copyItem =', copyItem);
    // console.log('mainItems =', mainItems);

    const handleFilter = (e) => {
        const searchValue = e.target.value;
        console.log('handleFilter =', searchValue);
        if (searchValue.length > 0) {
            let tempItems = [];
            tempItems = copyItem.filter((item) => {
                return item.toLowerCase().includes(searchValue)
            });
            console.log('tempItems =', tempItems);
            setMainItems(tempItems);
        } else {
            setMainItems(copyItem);
        }
        setQuery(searchValue);
    }

    const handleDelete = (index) => {
        console.log('index =', index);
        if (window.confirm("Are you sure want to delete ?")) {
            console.log('Yes inside Deleted');
            // console.log('copyItem =', copyItem);
            // const fruits = ["mango","apple","pine","berry"]; 
            // const removed = fruits.splice(2, 1); // Mutates fruits and returns array of removed items
            // console.log('fruits', fruits); // ["mango","apple","berry"]
            // console.log('removed', removed); // ["pine"]

            // const result = copyItem.splice(index, 1);
            // console.log('handleDelete result =', result);
            // console.log('handleDelete copyItem =', copyItem);

            // setDeleteItem(copyItem);
            // setCopyItem(copyItem.splice(index, 1));
            // setMainItems(copyItem);

            const removeElement = (array, element) => {
                const index = array.indexOf(element);
                if (index !== -1) array.splice(index, 1);
                return array;
            }

            // const number = [8,4,7,3,67,37,2,5];
            // const remove = 5;
            const result = removeElement(copyItem, index)
            console.log("Remove Element =", removeElement(copyItem, index));
            setCopyItem(result);
            setMainItems(result);
        } else {
            console.log('Not Deleted');
        }
    }
    // console.log('copyItem =', copyItem);
    return (
        <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <form className='alert alert-info' onSubmit={handleSubmit}>
                    <h6>Add Your To Do Operations:</h6>
                    <div className='mb-3'>
                        <label htmlFor="anything" className="form-label">Add Anything:</label>
                        <input type='text' className='form-control' id='anything' ref={inputRef} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <button type='submit' className='btn btn-dark btn-sm'>Add Item</button>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="item-search" className="form-label">Search Item:</label>
                        <input type='text' className='form-control' id='item-search' name='query' value={query} onChange={handleFilter} />
                    </div>
                </form>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                <div className='alert alert-secondary'>
                    <h6> Here To Do List:</h6>
                    {mainItems.length === 0 ? (
                        <div className='text-danger'> No Any List Present </div>
                    ) : (
                        <>
                            {mainItems.map((item, index) => {
                                return (
                                    <div key={index + 1} className='alert alert-info' style={{ marginBottom: '10px' }}>
                                        <div className='float-start'>{item}</div>
                                        <div className='float-end' style={{ cursor: 'pointer' }} onClick={() => handleDelete(item)}>
                                            <i className="bi bi-trash"></i>
                                        </div>
                                        <div className='clearfix'></div>
                                    </div>
                                )
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddRemoveItem;