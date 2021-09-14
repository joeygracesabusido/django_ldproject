import React, { useState, useEffect} from 'react'

const NotePage = ({ match }) => {
    let noteID = match.params.id
    let [note, setNote] = useState(null);
    
    useEffect(() => {
        getNote()
    },[noteID])



    let getNote = async () => {

        let response = await fetch(`/api/note/${noteID}/`)
        let data = await response.json()
        console.log(data)
        setNote(data)
   
        
        
    }

    return (
        <div>
            
            <p>{note?.body}</p>
        </div> 
    )
}

export default NotePage
