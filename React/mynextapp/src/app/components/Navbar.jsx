import React from 'react'

const Navbar = () => {
    let allmenu = [
        { path: "/", pathname: "Home" },
        { path: "/about", pathname: "About" },
        { path: "/contact", pathname: "Contact" },
    ]
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary-subtle">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <h2>Navbar</h2>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            {
                                allmenu.map(item =>
                                    <li key={item.path}>
                                        <a href={item.path}>{item.pathname}</a>
                                    </li>
                                )
                            }
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
