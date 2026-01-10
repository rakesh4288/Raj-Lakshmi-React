import AppImages from "../Assets";

const GitAndGitHub = () => {
    return(
        <div id="sample-id">
            <section className="pageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <h4 className="pageHeading"> What is Git & GitHub 
                                <i className="bi bi-alexa"></i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                        <h5>What is Git ?</h5>
                        <p>
                            Git is a distributed version control system for tracking the changes in project environment during the software development.  Git is designed for coordinating to work among with all programmers, <br/>Whatever a programmers is working a perticular project in any files that files or piece of code that can be pushed to main repo where other developers can find and update that file also.
                        </p>

                        <h6>Key Features:</h6>
                        <ul>
                            <li>Tracks the all changes in Project.</li>
                            <li>Allows collaboration between multiple developers.</li>
                            <li>Supports branching and merging (working on different features simultaneously).</li>
                            <li>Enables reverting to previous versions of code.</li>
                        </ul>

                        <h5>What is GitHub ?</h5>
                        <p>
                            GitHub is a web based Git repository hosting service platform, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. 
                        </p>
                        
                        <h6>Key Features:</h6>
                        <ul>
                            <li>Lets you store Git repositories online so others can access and collaborate.</li>
                            <li>Provides tools for issue tracking, code reviews, and project management.</li>
                            <li>Popular for open-source and team-based development.</li>
                        </ul>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th><span>S.No.</span></th>
                                    <th><span>Git</span></th>
                                    <th><span>GitHub</span></th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td><span>1.</span></td>
                                    <td><span>Git is a software.</span></td>
                                    <td><span>GitHub is a service.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>2.</span></td>
                                    <td><span>Git is a command-line tool</span></td>
                                    <td><span>GitHub is a graphical user interface</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>3.</span></td>
                                    <td><span>Git is installed locally on the system</span></td>
                                    <td><span>GitHub is hosted on the web</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>4.</span></td>
                                    <td><span>Git is maintained by linux.</span></td>
                                    <td><span>GitHub is maintained by Microsoft.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>5.</span></td>
                                    <td><span>Git is focused on code version control and code sharing.</span></td>
                                    <td><span>GitHub is focused on centralized source code hosting.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>6.</span></td>
                                    <td><span>Git is a version control system to manage source code history.&nbsp;</span><br /><span>&nbsp;</span></td>
                                    <td><span>GitHub is a hosting service for Git repositories.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>7.</span></td>
                                    <td><span>Git was first released in 2005.&nbsp;</span><br/><span>&nbsp;</span></td>
                                    <td><span>GitHub was launched in 2008.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>8.</span></td>
                                    <td><span>Git has no user management feature.&nbsp;</span><br /><span>&nbsp;</span></td>
                                    <td><span>GitHub has a built-in user management feature.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>9.</span></td>
                                    <td><span>Git is open-source licensed.</span></td>
                                    <td><span>GitHub includes a free-tier and pay-for-use tier.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>10.</span></td>
                                    <td><span>Git has minimal external tool configuration.</span></td>
                                    <td><span>GitHub has an active marketplace for tool integration.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>11.</span></td>
                                    <td><span>Git provides a Desktop interface named Git Gui.</span></td>
                                    <td><span>GitHub provides a Desktop interface named GitHub Desktop.</span></td>
                                </tr>
                                
                                <tr>
                                    <td><span>12.</span></td>
                                    <td><span>Git competes with CVS, Subversion, Mercurial, etc.</span></td>
                                    <td><span>GitHub competes with GitLab, Bit Bucket, AWS Code Commit, Azure DevOps Server, etc.</span></td>
                                </tr>
                            </tbody>
                        </table>

                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/2rCo62FkRV8?si=6Ui0cI-gvLwG-gtM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <hr className="bg-primary"/>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                        <p>
                            <img src={AppImages.GitVsGitHub} alt={AppImages.GitVsGitHub} className="img-fluid" />
                        </p>

                        <h6>Step by step guide for Git Setup:</h6>
                        <iframe width="100%" height="250" src="https://www.youtube.com/embed/8XGSv3Z-Unw?si=PTaDYX38_2gl4rYB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GitAndGitHub;