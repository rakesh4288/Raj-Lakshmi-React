import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isServerError, setIsServerError] = useState(null);

    // useEffect(() => {
    //     setIsLoading(true);
    //     const fetchingApiData = () => {
    //         fetch(url)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log("pokemonData Api Data 1 =", data);
    //             setApiData(data);
    //             setIsLoading(false)
    //         })
    //         .catch((error) => {
    //             setIsServerError(error);
    //             setIsLoading(false)
    //         })
    //     }

    //     fetchingApiData();
    // }, [url]);

    useEffect(() => {
        const fetchingApiData = async() => {
            setIsLoading(true);
            try{
                const res = await fetch(url);
                const response = await res.json();
                setApiData(response);
                setIsLoading(false);
            }
            catch (error){
                setIsServerError(error);
                setIsLoading(false)
            }
        }

        fetchingApiData()
    }, [url]);

    return {apiData, isLoading, isServerError}
}

export default useFetch;