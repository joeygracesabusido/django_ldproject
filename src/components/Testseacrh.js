import axios from 'axios';
import React, {useState, useEffect} from 'react';

const inputStyle = {
    width: '300px',
    display: 'inline-block',
    height: '30px',
    margin: '5px'
    // margin: '0 auto'
  
  };

const Testseacrh = () => {

    const [post, setPost] = useState('');
   
    const [list, setList] = useState([]);

    const [searchBody, setSearchBody] = useState('');

    const [electBegBal, setElectBegBal] = useState([]);

    
    useEffect(() => {
        loadBegList();
    }, []);


    const loadBegList = async () => {
        try {
            // let  response  = await fetch(`/api/notes/`)
            let  response  = await fetch(`/api/notes/`)
            let data = await response.json()

            if (data) {
                setElectBegBal(data)
                console.log(data)

            }
            console.log(data)
        } catch (err) {
            // console.log(err);

        }
    }





    const loadList = async () => {
        try {
            // let  response  = await fetch(`/api/notes/`)
            let  response  = await fetch(`/api/search/${searchBody}`)
            let data = await response.json()

            if (data) {
                setList(data)
                console.log(data)

            }
            console.log(data)
        } catch (err) {
            // console.log(err);

        }
    }

    // useEffect(() => {
    //     loadList()
    // },[]);

    // const renderHeader = () => {
    //     let headerElement = ['id', 'notes']

    //     return headerElement.map((key, index) => {
    //         return <th className='text-center' key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    

    const renderBody = () => {
        return list && list.map(({ id, body }) => {
            return (
               
                <ul key ={id}>
                    <li>
                      Trans ID: {id} | Post : {body}
                    </li>
                </ul>
            )
        })
    }

    const renderBody2 = () => {
        return electBegBal && electBegBal.map(({ id, body }) => {
            return (
               
                <ul key ={id}>
                    <li>
                      Trans ID: {id} | Post : {body}
                    </li>
                </ul>
            )
        })
    }



    return (
        <div className="container" style={{ marginTop: 70 }}>
            <div className="container">
                        <input
                        type="input"
                        data-name='body'
                        className="form-control"
                        placeholder="Search Notes"
                        onChange={(e) => setSearchBody(e.target.value)}
                        
                        value={searchBody}
                        style={inputStyle}

                        

                        />
                        <button className="btn btn-sm btn-info" onClick={loadList}>Search</button>
             
            </div>
            
            <div>
                {renderBody2()}
            </div>
            <div>
                <h1>
                    {renderBody()}
                </h1>
            </div>


               
            
            
        </div>
    )
}

export default Testseacrh
