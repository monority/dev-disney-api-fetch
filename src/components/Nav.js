import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import  logo from '../assets/img/logo.png'

const Nav = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <Link to={`/`}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                </div>
            </nav></>
    )
}

export default Nav