import AppImages from "../Assets";

const MircoFrontEndPage = () => {
    return (
        <div id='micro-front-end'>
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> What is Mirco Front End Architecture in React</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>Micro Front End Architecture is simply dividing a monolithic application into smaller modules.  </h6>
                        <h6>Smaller modules means that it will have a separate code base and separate git repo</h6>

                        <h5>Let's first understand what is the meaning of Monolithic Architecture ?</h5>
                        <h6>
                            Monolithic Architecture means everything is written in one place, I mean end to end code base is kept at place. You can say this is the monolithic architecture.
                        </h6>

                        <h6 className="text-danger"> What is the disadvantages of Monolithic Architecture ? </h6>
                        <ul>
                            <li>
                                I would say by keeping everything is one place it can take more time to build the project why because while building activity - all code base will go through the building process.
                            </li>
                            <li>
                                If any set of component or any internal modules failed somehow so whole application performances can be impact. Because end to end code is written in single chain.
                            </li>
                        </ul>

                        <h6>So this was the few disadvantages for Monolithic Architecture.</h6>

                        <hr />

                        <h5>Now let's focus on the Micro Front End Architecture</h5>
                        <h6>
                            So first of all - Micro Front End Architecture is not any technologies it is just a concept to handle the large application. If you have a huge traffic on your application or let's suppose you have many features so you what you can do you can keep expensive features in a separate code base, so finally you can use that this is the Mirco Front End Architecture.
                        </h6>

                        <h6>Let's try to understand by an example: So in any e-commerce application where you can see multiple features modules are present like - Product Listing, Full Details about the Product, Cart module, Navigations, Sliders, carousels etc.</h6>

                        <h6>So for handling this type of scenario you can go with Micro Front End Architecture and regarding this what you need to do ? you need to establish the different different code base with git repo, where each repo will handle a single responsibilities.</h6>

                        <h6>And trust me by using this approach your application performace will increase.</h6>

                        <hr className="bg-warning"/>

                        <h5>Finally Let's talk about the Benefits of Micro-Frontends:</h5>
                        
                        <h6>
                            <b>1. Independent Development:</b> Different teams can work on different parts of the application simultaneously without interfering with each other.
                        </h6>

                        <h6>
                            <b>2. Easy Deployment and building:</b> Deployment is easy
                        </h6>
                        
                        <h6>
                            <b>3. Scalability:</b> Different parts of the frontend can be scaled independently based on need.
                        </h6>
                        
                        <h6>
                            <b>4. Improved Maintainability:</b> Smaller, well-defined codebases are easier to maintain and understand.
                        </h6>
                        
                        <h6>
                            <b>5. Faster Releases:</b> Independent deployment means that changes in one part of the application can be released without requiring a full deployment of the entire frontend.
                        </h6>

                        <p>
                            <img src={AppImages.MonolithicVSMicroFrontArchitecture} alt={AppImages.MonolithicVSMicroFrontArchitecture} className="img-fluid" />
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/Qswwngfb9zE?si=J-HxlFKSxPImx0Jz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/FGAcmMufzVU?si=M0wZA7ebkHk0ugqg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MircoFrontEndPage;