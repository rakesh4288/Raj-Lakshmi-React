import React, {Suspense, useState} from 'react';
import { Link } from 'react-router-dom';
import AppImages from '../Assets';
// import SimpleLazy from '../Components/SimpleLazy';
const TouristPlaces = React.lazy(() => import('../Components/SimpleLazy'));

const LazyLoadingPage = () => {
    const [showTourist, setShowTourist] = useState(false);
    const Spinner = () => {
        return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    const handleTourist = () => {
        setShowTourist(!showTourist);
    }
    return (
        <div id='lazy-loading-page'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h1 className="pageHeading"> What is the Lazy Loading in React 
                                <i className="bi bi-laptop"></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mb-4'>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>
                            Lazy loading is a technique that allows you to load the components, modules, or assets asynchronously, Lazy loading is improving the loading time of your application. It can be achieved by using the built-in <b>React.lazy() method</b> and <b>Suspense component.</b>
                        </h6>
                        
                        <pre className='alert alert-info'>
                            <span>Implement Lazy Loding with React.Lazy method <br/>
                                import  Suspense, lazy  from "react";</span>
                                <br/>
                                <span>const MyComponent = React.lazy(() =&gt; import('./MyComponent'));</span> 
                            <br/>
                            <Link to="https://www.geeksforgeeks.org/lazy-loading-in-react-and-how-to-implement-it/"     target="_blank">Best Tutorial</Link>
                        </pre>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Approach</h5>
                        <p>To implement the lazy loading in react Please follow the steps given below:</p>
                        <ul>
                            <li>
                                Firstly, Recognize the component that you wanted to Lazy Load. These are mostly Large or some complex component which is not necessary to load all while rendering.
                            </li>

                            <li>
                                Import the <b>lazy()</b> and <b>Suspense</b> from the React package
                            </li>

                            <li>
                                Wrap the lazy-loaded component in a <b>Suspense component</b>, which will display a <b>fallback</b> UI while the component is being loaded.
                            </li>

                            <li>
                                <b>Suspense component</b> is providing the best user experience. Let's suppose your component is taking time to load so that any loader or some best message you can provide there.
                            </li>

                            <li>
                                So regarding this we can use the <b>fallback</b> attribute and inside this attribute you can pass the loader component or loader message.
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h6>How to wrap the Suspens Component:</h6>
                        <p>
                            <img src={AppImages.Lazy_Loading_Suspense} alt='Lazy Loading Suspens' className='img-fluid' />
                        </p>
                    </div>
                </div>
            </section>

            <hr className='bg-success'/>

            <section className='container pb-4'>
                <div className='row'>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h3>Trying Simple Lazy Loading</h3>
                        <button className='btn btn-info btn-sm' onClick={handleTourist}>Click to Show Tourist Places</button>
                        <br/><br/>
                    </div>
                </div>
                {
                    showTourist && (
                        <Suspense fallback={Spinner()}>
                            <TouristPlaces/>
                        </Suspense>
                    ) 
                }
            </section>

            <section className='container'>
                <div className='row'>
                    <div className="col-xl-6 col-lg-16 col-md-6 col-sm-12">
                        <h5>Best Tutorial:</h5>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/yV0WxfgAGg0?si=Y3ousoNGSFe-i1S1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LazyLoadingPage;