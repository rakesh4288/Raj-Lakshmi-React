import React from "react";
import * as Icon from 'react-bootstrap-icons';
import VirtualizedList from "../Components/VirtualizedList";

const DataVirtualizationPage = () => {
    return (
        <div id="data-birtualization-page">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="pageHeading">
                                How to handle Data virtualization in react  <Icon.DatabaseFillSlash />
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <p>
                            Data virtualization in React typically refers to the technique of rendering only the visible portion of a large dataset to improve performance, especially in cases like long lists or tables. Instead of rendering thousands of items all at once, only the items in or near the viewport are rendered — making the UI faster and more memory-efficient.
                        </p>

                        <h6>When to Use Data Virtualization</h6>
                        <ul>
                            <li>You're displaying a large list (100s or 1000s of rows).</li>
                            <li>Rendering all elements at once causes UI lag or slow initial load.</li>
                            <li>Scrolling performance becomes choppy or unresponsive.</li>
                        </ul>

                        <h6>Here we have Virtualized List, the unlimited data is coming while moving scroll down</h6>
                        <VirtualizedList/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DataVirtualizationPage;