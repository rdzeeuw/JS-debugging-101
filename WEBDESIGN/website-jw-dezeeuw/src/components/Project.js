import React from 'react'
import { Link } from "gatsby"

export default function Project(props) {
    console.log(props)
    return (
        
            <div className="card">
                
                <h5 className="card__title">{props.title}</h5>
                <p className="card_description">{props.description}</p>
                <hr></hr>
                <Link className="card__link">Lees meer </Link>
            </div>
        
    )
}
