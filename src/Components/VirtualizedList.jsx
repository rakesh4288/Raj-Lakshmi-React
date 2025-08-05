import { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";

const VirtualizedList = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const fetchingUserData = async() => {
            // const response = await fetch(DummyProductApi);
            // const res = await response.json();
            // console.log('fetchingUserData =', res.products);
            // console.log('fetchingUserData Length =', res.products.length);
            // setApirData(res.products);

            const response = await fetch('https://jsonplaceholder.typicode.com/comments');
            const res = await response.json();
            console.log('fetchingUserData =', res);
            console.log('fetchingUserData Length =', res.length);
            setApiData(res);
        }
        fetchingUserData();
    }, []);
    return (
        <div style={{height: '500px'}}>
            <FixedSizeList
                itemCount={apiData.length}
                itemSize={120}
                width={'100%'}
                height={400}
            >
                {({index, style}) => {
                    return(
                        <div style={style}>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <td style={{width: '50px'}}>Id</td>
                                        <td style={{width: '250px'}}>Title</td>
                                        <td style={{width: '250px'}}>Email</td>
                                        <td>Body</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td style={{width: '50px'}}>{apiData[index].id}</td>
                                        <td style={{width: '250px'}}>{apiData[index].name}</td>
                                        <td style={{width: '250px'}}>{apiData[index].email}</td>
                                        <td>{apiData[index].body}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }}
            </FixedSizeList>
        </div>
    )
}

export default VirtualizedList;