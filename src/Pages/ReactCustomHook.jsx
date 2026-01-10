import useCount from '../Global/useCount';
import AppImages from '../Assets';
const ReactCustomHook = () => {
    const {count, handleAdd, handleSub, handleReset } = useCount(0);
    return (
        <div id='react-custom-hook'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h1 className="pageHeading">
                                How to create Custom Hook  <i className="bi bi-circle"></i>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>This is simple Counter Scenario</h6>
                            <button className='btn btn-info btn-sm' onClick={handleAdd}>Addition +</button>
                            &nbsp;
                            <button className='btn btn-danger btn-sm' onClick={handleSub}>Substraction -</button>
                            &nbsp;
                            <button className='btn btn-success btn-sm' onClick={handleReset}>Reset By 0</button>
                            <p>
                                Current Value: <b>{count}</b>
                            </p>

                            <h6>Steps to create a custom hooks:</h6>
                            <ul>
                                <li>Firstly create the whatever business logic you wanted to create in Main Component.</li>
                                <li>Cut the all exact portion and paste inside the one another file name anything by using <b>use</b> word </li>
                                <li>Finally import that hook file inside main component and call that hook and pass the necessary argument which they require for manipulating in hook file.</li>
                                <li>refer the below screenshot:</li>
                            </ul>

                            <hr className='bg-dark'/>

                            <h6>This is How we are callin in main component:</h6>

                            <p>
                                <img src={AppImages.useCount_img_2} alt='use Count 2' className='img-fluid' />
                            </p>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>This is a custom hook for Count </h6>
                            <p>
                                <img src={AppImages.useCount_img_1} alt='use Count 1' className='img-fluid' />
                            </p>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ReactCustomHook;