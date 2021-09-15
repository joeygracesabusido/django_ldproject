import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap'


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

const Createpost = ({history}) => {

    const [showModal, setshowModal] = useState(true);
    const [post, setPost] = useState('');

    let [note, setNote] = useState(null);

    // useEffect(() =>{
    //     setPost()
    // })

    const manageState = () => {

        setshowModal(!setshowModal)
      }

    const onPost = (e) => {
        setPost(e.target.value);
       
    }

    const createNote = async () => {
        let formfield = new FormData()

        formfield.append('body', post)

        await axios({
          method: 'POST',
          url: `/api/notes-post/`,
          data: formfield 
        }).then ((response) => {
            console.log(response.data)
            history.push('/')
        })
       


        // fetch(`api/notes-post/`,{
        //     method: "POST",
        //     body: JSON.stringify(note)
        // })
        // console.log(body)
        // const data = {post};

        // await axios({
        //   method: 'POST',
        //   url: `/api/notes-post/`,
        //   data,
        //   'body': JSON.stringify(data)
        // });
        // console.log(data)
    }


    return (
        // <div>
            
        //     <Modal isOpen = {showModal}>
        //     <ModalHeader>Add Note</ModalHeader>
        //     <ModalBody>
        //         <label style={labelStyle}>Notes</label>
        //             <input
        //             type="input"
        //             name="body"
        //             className="form-control"
        //             onChange={onPost}
        //             value={post}
        //             style={inputStyle}

        //             />
                    
        //     </ModalBody>
        //     <ModalHeader>
        //         <button className="btn btn-sm btn-info" onClick={createNote}>Save</button>
        //         <Button onclick={manageState} >CLOSE</Button>
        //     </ModalHeader>
        //     </Modal>
        // </div>

        <>
        <div style={{ marginTop: 70 }}>


        </div>

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
                  onChange={onPost}
                  value={post}
                  style={inputStyle}

                />
               
              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-info" onClick={createNote}>Save</button>
                <Link to='/' className="btn btn-sm btn-danger">Close</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    )
}

export default Createpost
