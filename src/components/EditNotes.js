import React, {useState, useEffect} from 'react';
import axios from 'axios'

const inputStyle = {
    width: '300px',
    display: 'inline-block',
    height: '30px',
    margin: '5px'
    // margin: '0 auto'
  
  };

const labelStyle = {
width: '150px',
fontSize: '15px',
display: 'inline-block'

};

const EditNotes = ({match, history}) => {

    const [showModal, setshowModal] = useState(true);
    let [note, setNote] = useState(null);
    const [post, setPost] = useState('');
    let noteID = match.params.id

    const manageState = () => {

        setshowModal(!setshowModal)
      }

    useEffect(() => {
        getNote();
    }, [noteID])

    const onPost = (e) => {
        setPost(e.target.value);
       
    }

    let getNote = async () => {

    let response = await fetch(`/api/note/${noteID}/`)
    let data = await response.json()
    console.log(data)
    setNote(data)
    
    };

    const updateNote = async () => {
        let formfield = new FormData()

        formfield.append('body', post)

        await axios({
          method: 'PUT',
          url: `/api/note/${noteID}/update/`,
        
          data: formfield 
        }).then ((response) => {
            console.log(response.data)
            history.push('/note-list/')
        })
    };

    return (
        <>
        <div className="container" style={{ marginTop: 70 }}>
            <form>
                {manageState && (
                <div className="" id="addnewlist">

                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add Note</h4>
                        </div>

                        <div className="modal-body">

                            

                            <label style={labelStyle}>Notes</label>
                            <input
                            type="input"
                            data-name='body'
                            className="form-control"
                            required onChange={onPost}
                            //   value = {post}
                            value={note?.body}
                            style={inputStyle}

                            />
                        
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-sm btn-info" onClick={updateNote} >Update</button>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                )}
            </form>

        </div>

        
    </>
    )
}

export default EditNotes
