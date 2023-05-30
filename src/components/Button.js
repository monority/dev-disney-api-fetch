import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom'

export const Button = ({ className, action, sourcename , name }) => {
    return (
        <div className="wrapper">
            <Link to ={`/company/${name}`} >       
             <img className={className} src={sourcename} onClick={action}/> 
            </Link>

        </div>
    )
}
