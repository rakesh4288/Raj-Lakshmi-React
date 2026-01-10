import AppImages from "../Assets";
import SelectAllCheckbox from "../Components/SelectAllCheckbox";
import RowSelection from "../Components/RowSelection";
import RowSelectionOnApi from "../Components/RowSelectionOnApi";
import SimpleCheckboxObject from '../Components/SimpleCheckboxObject';
import SimpleCheckboxArray from '../Components/SimpleCheckboxArray';

const CheckboxOperationPage = () => {
    return(
        <div id="checkbox-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading"> Checkbox Operation Page  <i className="bi bi-check2-circle"></i> </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                        <RowSelection/>
                    </div>

                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                         <p>
                            <img src={AppImages.FormHandlingTwo} alt="react-form-handling" className="img-fluid img-thumbnail" />
                        </p>

                        <SimpleCheckboxObject /> <br/>

                        <hr className='bg-info' />

                        <SimpleCheckboxArray />
                    </div>
                </div>
            </section>

            <section className="lightBlueBG pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>Select All Checkbox</h5>
                            <SelectAllCheckbox />
                        </div>

                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                            <h5>Top 30 React JS Interview Questions Answers:</h5>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/U7QZfAQWkkU?si=cp9UCZwAqTxpnSq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <RowSelectionOnApi/>
            </section>
        </div>
    )
}

export default CheckboxOperationPage;