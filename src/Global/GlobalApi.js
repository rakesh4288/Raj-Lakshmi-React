export const fetchingDummyInfo = async() => {
    // const url = 'https://dummyjson.com/products';
    const url = 'https://dummyjson.com/users';
    try{
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }
    catch (error) {
        return error
    }
}