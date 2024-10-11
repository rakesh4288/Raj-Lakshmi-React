import React, {useState, useEffect} from "react";

const Characters = () => {
    const [charactersData, setCharactersData] = useState([]);
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    useEffect(() => {
        const fetchingCharacters = async () => {
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
                const data = await res.json();
                setCharactersData(data.results);
            } catch (error) {
                return error
            }
        }
        fetchingCharacters();
    }, [query]);
    console.log('fetchingCharacters =', charactersData);
    return (
        <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h3 style={{color: '#fff'}}>Grid display after fecthing record</h3>
                        </div>

                        <div className="col-md-3">
                            <div className="float-end">
                                <input type="text" className="form-control" placeholder="Search By Name.." value={query} onChange={handleChange} />
                            </div> 
                        </div>
                    </div>

                    <div className="row">
                        {
                            charactersData.map((item, index) => {
                                return (
                                    <div className="col-md-3" key={index}>
                                        <div className="card" style={{marginBottom: '20px'}}>
                                            <img src={item.image} className="card-img-top" alt={item.image} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">
                                                    Location: {item.location.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
    )
}

export default Characters;