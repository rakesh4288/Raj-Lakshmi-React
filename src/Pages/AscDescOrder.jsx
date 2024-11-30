import React from 'react';
import * as Icon from 'react-bootstrap-icons';
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
                                <Icon.ArrowDown />
                                <Icon.ArrowUp />
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