import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ListNote = ({history}) => {

    const [electBegBal, setElectBegBal] = useState([]);

    useEffect(() => {
        loadBegList();
    }, []);


    const loadBegList = async () => {
        try {
            let  response  = await fetch(`/api/notes/`)
            let data = await response.json()

            if (data) {
                setElectBegBal(data)
                console.log(data)

            }
            console.log(data)
        } catch (err) {
            console.log(err);

        }
    }

    const renderHeader = () => {
        let headerElement = ['id', 'notes', 'action']

        return headerElement.map((key, index) => {
            return <th className='text-center' key={index}>{key.toUpperCase()}</th>
        })
    }

    const removeData = async (id) => {
        await axios.delete(`/api/note/${id}/delete`).then(response =>{
            const del = electBegBal.filter((el => el.id !== id))
            setElectBegBal(del)
        })
        alert('Data has been deleted')
        // history.push('/')

    }

    const renderBody = () => {
        return electBegBal && electBegBal.map(({ id, body }) => {
            return (
                <tr key={id}>

                    <td>{id}</td>
                    <td>{body}</td>
                    
                    <td className='opration'>
                        {/* <Link to={'/edit/' + props.owners_detail._id} className="btn btn-sm btn-primary">Edit</Link> */}
                        <Link to={'/note-update/'+(id)}  className="btn btn-sm btn-primary">Edit</Link>
                        <button className='btn btn-sm btn-danger' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="container" style={{ marginTop: 40 }}>
            <>
                <h1 id='title'>Post</h1>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </>
            {/* {electBegBal.map((val) => {
                return <h1>
                    OwnersName: {val.owners_name} | Beg. Balance: {val.e_begging_balance}
                </h1>
            })} */}

        </div>
    )
}

export default ListNote