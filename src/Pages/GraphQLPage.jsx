import React from "react";
import AppImages from "../Assets";

const GraphQLPage = () => {
    return (
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> Learning GraphQL </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h5>What is GraphQL ?</h5>
                        <h6>
                            GraphQL is an open-source query language for APIs and a server-side runtime. It provides a strongly-typed schema to define relationships between data, making APIs more flexible and predictable, and this is not tied with a specific database.
                        </h6>

                        <h6>
                            Actually it works with your existing code and data, making it easier to evolve APIs over time.
                        </h6>

                        <h6>
                            GraphQL is providing the exact data which you need. I mean whatever client is requesting so only that piece of data GraphQL is responding, Hence GraphQL performace is more high and much predictable. Because you know you will not get unnecessary data.
                        </h6>
                    </div>
                </div>

                <hr className="bg-primary" />

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>Why GraphQL? </h5>
                        <p>Actually traditional REST APIs have always a problems like this:</p>
                        <ul>
                            <li>Over-fetching → REST API always providing more data than required</li>
                            <li>Under-fetching → needing multiple API calls for related data</li>
                            <li>Multiple endpoints for same resources</li>
                        </ul>
                        <h6>GraphQL solves this by giving the client control over the data shape.</h6>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <p>
                            <img src={AppImages.GraphQL_4} alt={AppImages.GraphQL_4} className="img-fluid" />
                        </p>
                    </div>
                </div>

                <hr className="bg-danger" />

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h5>Key Concepts of GraphQL </h5>
                        <h6>
                            <b>(1) - Single Endpoint: </b> GraphQL is providing a single endpoint for all the resources and data. <br />
                            <i>POST /graphql</i>
                        </h6>

                        <h6>
                            (2) - Query Exactly What You Need: You need to specify the fields in the query, then only GraphQL will return with exact data
                        </h6>

                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>
                                Here is your query: <br />
                                <img src={AppImages.GraphQL_1} alt={AppImages.GraphQL_1} className="img-fluid" />
                            </p>

                            <p>
                                Here is your response: <br />
                                <img src={AppImages.GraphQL_2} alt={AppImages.GraphQL_2} className="img-fluid" />
                            </p>
                        </div>

                        <h6>(3) - Strongly Typed Schema: GraphQL APIs are defined by a schema.</h6>
                        <p>
                            This acts as a contract between frontend and backend. <br />
                            <img src={AppImages.GraphQL_3} alt={AppImages.GraphQL_3} className="img-fluid" />
                        </p>
                    </div>
                </div>

                <hr className="bg-success" />

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>GraphQL vs REST (Quick Comparison) </h5>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Feature</th>
                                    <th scope="col">REST</th>
                                    <th scope="col">GraphQL</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Endpoints</td>
                                    <td>Multiple endpoints</td>
                                    <td>Single endpoints</td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>Data Fetching</td>
                                    <td>Fixed response</td>
                                    <td>Client-defined</td>
                                </tr>

                                <tr>
                                    <th scope="row">3</th>
                                    <td>Over-fetching</td>
                                    <td>Common</td>
                                    <td>Avoided</td>
                                </tr>

                                <tr>
                                    <th scope="row">4</th>
                                    <td>Versioning</td>
                                    <td>v1, v2, v3</td>
                                    <td>No versioning only schema evolves</td>
                                </tr>
                            </tbody>
                        </table>

                        <h5>When NOT to Use GraphQL</h5>
                        <ul>
                            <li>If you very simple CRUD APIs so no need to use the GraphQL</li>
                            <li>File uploads/download-heavy APIs</li>
                            <li>When caching via HTTP is critical (REST is simpler)</li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-info">
                            <h6>Where GraphQL Is Commonly Used</h6>
                            <ul>
                                <li>React / Angular / Vue apps</li>
                                <li>Mobile apps (reduce network calls)</li>
                                <li>Complex UIs with multiple data needs</li>
                                <li>Microservices aggregation layer</li>
                            </ul>

                            <h6>Popular tools:</h6>
                            <ul>
                                <li>Apollo Client / Server</li>
                                <li>Relay</li>
                                <li>Hasura</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GraphQLPage;