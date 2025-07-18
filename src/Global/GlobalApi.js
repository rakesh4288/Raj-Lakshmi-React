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
// https://medium.com/@ys.yogendra22/dummy-rest-apis-ready-to-use-34c29ba61224
// https://myfakeapi.com/api/cars/
// https://reqres.in/api/users

export const postUserData = async({formValue}) => {
    const postUrl = 'https://dummy.restapiexample.com/api/v1/create'
    try{
        const response = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formValue.name,
                age: formValue.age,
                salary: formValue.salary,
                email: formValue.email
            })
        });
        const data = await response.json();
        console.log('postUserData success =', data);
        return data;
    }
    catch(error) {
        console.log('postUserData Error =', error);
    }
}