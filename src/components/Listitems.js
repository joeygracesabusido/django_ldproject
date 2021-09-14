import React from 'react'
import { Link } from 'react-router-dom'

const Listitems = ({note}) => {
    return (
        <Link to={`/note/${note.id}`}>
            <h1>{note.body}</h1>
        </Link>
    )
} 

export default Listitems
