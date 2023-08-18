import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom'

export const Button = ({ className, action, sourcename , name, alt }) => {
    return (
        <div className="wrapper">
            <Link to ={`/company/${name}`} >       
             <img className={className} src={sourcename} alt={alt} onClick={action}/> 
            </Link>

        </div>
    )
}
