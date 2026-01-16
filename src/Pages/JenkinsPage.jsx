import React from "react";
import AppImages from "../Assets";

const JenkinsPage = () => {
    return (
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> Learning Jenkins CI/CD Pipelines </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h6>
                            Jenkins is a free, open-source tool that helps developers automate the process of building, testing, and deploying the code. It is written in Java and runs on the Java platform. By using Jenkins, we can make a continuous integration of the projects(jobs) or end-to-end automation.
                        </h6>

                        <h6>
                            Jenkins helps developers automatically run tasks whenever there is a change in the code, such as:
                        </h6>

                        <ul>
                            <li>Building the application</li>
                            <li>Running tests</li>
                            <li>Checking code quality</li>
                            <li>Deploying to servers</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <h5>Why is Jenkins used?</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-info">
                            <h6>1. Continuous Integration (CI)</h6>
                            <p>Whenever a developer pushes their code to a repository in a Git or Bitbucket or version controlling system.</p>
                            <ul>
                                <li>Jenkins pulls the latest code</li>
                                <li>Builds it</li>
                                <li>Runs automated tests</li>
                                <li>Reports failures immediately</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-warning">
                            <h6>2. Continuous Delivery / Deployment (CD)</h6>
                            <p>Jenkins can do following task also:</p>
                            <ul>
                                <li>Jenkins can deploy the application to QA, staging, or production</li>
                                <li>It can Work with Docker, Kubernetes, AWS, Azure, etc.</li>
                                <li>Ensures faster and reliable releases.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-danger">
                            <h6>3. Automation of Repetitive Tasks</h6>
                            <p>Jenkins can automate:</p>
                            <ul>
                                <li>Build processes</li>
                                <li>Test execution</li>
                                <li>Code linting</li>
                                <li>Saves time and reduces human the errors.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="alert alert-success">
                            <h6>4. Integration with Many Tools</h6>
                            <p>Jenkins integrates easily with:</p>
                            <ul>
                                <li><b>Version control:</b> Git, GitHub, Bitbucket</li>
                                <li><b>Build tools:</b> Maven, Gradle, npm</li>
                                <li><b>Testing tools:</b> JUnit, Jest, Selenium</li>
                                <li><b>DevOps tools:</b> Docker, Kubernetes, Ansible</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="bg-danger" />

                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h5>How Jenkins Works (Simple Flow)</h5>
                        <ul>
                            <li>Developer pushes code to Git</li>
                            <li>then Jenkins detects the changes</li>
                            <li>and Jenkins runs a pipeline</li>
                            <li>Pipeline stages like:
                                <ul>
                                    <li>Build Stage</li>
                                    <li>Test Stage</li>
                                    <li>Deploy Stage</li>
                                </ul>
                            </li>
                            <li>Finally Jenkins sends success/failure notifications</li>
                        </ul>

                        <h5>When Should You Use Jenkins?</h5>
                        <ul>
                            <li>Faster feedback on code changes</li>
                            <li>Automated testing & deployment</li>
                            <li>Reliable CI/CD pipelines</li>
                            <li>Better collaboration between teams</li>
                        </ul>

                        <iframe width="100%" height="350" src="https://www.youtube.com/embed/bWcWbMtMK24?si=XPR2HIOBhwjEITUy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <h6>Here is simple pipelines snapshot:</h6>
                        <p>
                            <img src={AppImages.Jenkins_1} alt={AppImages.Jenkins_1} className="img-fluid img-thumbnail" />
                        </p>
                    </div>
                </div>
            </section>

            <section className="lightGrayBg p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <h6>How to Auto Trigger Jenkins Jobs using GitHub Webhooks</h6>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/eGSK0oxYrS8?si=tiwqlketKxtLMMY8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default JenkinsPage;