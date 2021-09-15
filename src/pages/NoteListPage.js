import React, {useState, useEffect} from 'react'
import Listitems from '../components/Listitems'

const NoteListPage = () => {

    let [notes,setNotes] = useState([])


    useEffect(() => {
        getNotes()
    },[])


    let getNotes = async () => {
       let response = await fetch('api/notes/')
       let data = await response.json()
       console.log('Data:', data)
       setNotes(data)

    }

    return (
        <div>
            <div className="notes-list">
                <div>
                    <h2>&#9782;</h2> 
                    <p className="notes">{notes.length}</p>
                </div>
                <div className="notes">
                    <h1> </h1>
                    {notes.map((note, index)  =>(
                        // <h3 key={index}>{note.body}</h3>
                        <Listitems key={index} note={note}>
                        </Listitems>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NoteListPage
