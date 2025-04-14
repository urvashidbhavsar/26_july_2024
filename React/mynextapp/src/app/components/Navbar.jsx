import React from 'react'

const Navbar = () => {
    let allmenu = [
        { path: "/", pathname: "Home" },
        { path: "/about", pathname: "About" },
        { path: "/contact", pathname: "Contact" },
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h2>Navbar</h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            {
                                allmenu.map(item =>
                                    <li key={item.path}>
                                        <a href={item.path}>{item.pathname}</a>
                                    </li>
                                )
                            }
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
