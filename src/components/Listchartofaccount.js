import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Listchartofaccount = () => {

    const [charlist, setCharlist] = useState([]);
    
    const [test, setTest] = useState('');

    useEffect(() => {
        loadChartofAccountList();
    }, []);

    const loadChartofAccountList = async () => {
        try {
            // let  response  = await fetch(`/api/notes/`)
            let  response  = await fetch(`/accountingModule/chartsofaccount-list/`)
            let data = await response.json()

            if (data) {
                setCharlist(data)
                console.log(data)

            }
            console.log(data)
        } catch (err) {
            // console.log(err);

        }
    }

    const renderHeader = () => {
        let headerElement = ['id', 'code','chart of account','account name', 'action']

        return headerElement.map((key, index) => {
            return <th className='text-center' key={index}>{key.toUpperCase()}</th>
        })
    }

    const removeData = async (id) => {
        await axios.delete(`/accountingModule/chartsofaccount-delete/${id}`).then(response =>{
            const del = charlist.filter((el => el.id !== id))
            setCharlist(del)
        })
        alert('Data has been deleted')
        // history.push('/')

    }
    

    const renderBody = () => {
        return charlist && charlist.map(({ id, code, trialBalance_chart, account_name }) => {
            return (
                <tr key={id}>

                    <td>{id}</td>
                    <td>{code}</td>
                    <td>{trialBalance_chart}</td>
                    <td>{account_name}</td>
                    
                    <td className='opration'>
                        {/* <Link to={'/edit/' + props.owners_detail._id} className="btn btn-sm btn-primary">Edit</Link> */}
                        <Link to={'/chartofaccount-edit/'+(id)}  className="btn btn-sm btn-primary">Edit</Link>
                        <button className='btn btn-sm btn-danger' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="container" style={{ marginTop: 40 }}>
            <>
                <h1 id='title'>Chart of Account</h1>
                
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>{renderHeader()}</tr>
                    </thead>
                    <tbody>
                        {renderBody()}
                    </tbody>
                </table>
            </>
           

        </div>
    )
    
}

export default Listchartofaccount
