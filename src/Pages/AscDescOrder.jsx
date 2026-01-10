import ColumnWiseSorting from '../Components/ColumnWiseSorting';

const AscDescOrder = () => {
    
    return (
        <div id='AscDescOrder'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                How to perform ascending descending order
                                <i className="bi bi-arrow-down-up"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <ColumnWiseSorting />
            </section>
        </div>
    )
}

export default AscDescOrder;