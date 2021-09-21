import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

    

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid ">
                    <Link className="navbar-brand" to="/">Billing Project</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">Link
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-post/">Create Post</Link>
                            </li>
                            <li className="nav-dropdown">
                                <Link className="nav-link" to="/note-list/">Notes List</Link>
                            </li>
                            <li className="nav-dropdown">
                                <Link className="nav-link" to="/test-list/">Test List</Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
    )
}

export default Navbar
