import {useState} from "react";
const BasicImageUploadPage = () => {
    const [image, setImage] = useState('');
    const handleInput = (e) => {
        console.log('handleInput =', e.target.files[0]);
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit =', image.name);

        // Call the API
        // const formData = new FormData();
        // formData.append("image", image);
        // fetch('url', {
        //     method: 'POST',
        //     headers: {'Content-Type' : 'application/json'},
        //     body: formData
        // })
        // .then((res) => {
        //     console.log('response', res.json());
        // })
        // .then((data) => {
        //     console.log('response', data)
        // })
        // .error((error) => {
        //     console.log('response', error)
        // })
    }
    return(
        <div id="image-upload">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Basic File Upload Functionlity <i className="bi bi-upload"></i> </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/cOHRCtHkCS0?si=7_kNqHKMDZQgQyXb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <label>Please upload any image:</label> <br /> <br />
                            <input type="file" onChange={handleInput} /> <br /><br />
                            <button className="btn btn-dark btn-sm">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default BasicImageUploadPage;