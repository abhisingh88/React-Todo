import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Todos List",
    // if any title is not passed then this will be rendered
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    // by this we are atricting proptype of any value if not given properly then it will show a error msg
    searchBar: PropTypes.bool.isRequired,       //for making this value a must// to solve this a defult value or a passed value should be their
}