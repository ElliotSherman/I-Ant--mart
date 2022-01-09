import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='Navbar navbar navbar-light d-flex flex-md-column navbar-expand-md'>
            <div>
                <a className="me-5 pe-3 navbar-brand d-block" href="#">Logo</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='me-5 navbar-nav d-flex flex-md-column'>
                    <li>
                        <a className='nav-link'>Link</a>
                    </li>
                    <li>
                        <a className='nav-link'>Link</a>
                    </li>
                    <li>
                        <a className='nav-link'>Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
