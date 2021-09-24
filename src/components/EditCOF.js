import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
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

const EditCOF = ({match, history}) => {

    const [showModal, setshowModal] = useState(true);
    const [selectOption, setSelectOption] = useState('');
    let [list, setList] = useState([]);
    const [post, setPost] = useState('');

    const [tbchart, setTbchart] = useState('');
    const [actname, setActname] = useState('');
    const [code, setCode] = useState('');

    

    let noteID = match.params.id

    const manageState = () => {

        setshowModal(!setshowModal)
      }

    const changeoption = (newOption) => {
        setTbchart(newOption)
    }


    let getCOA = async () => {

        let response = await fetch(`/accountingModule/coa/${noteID}`)
        let data = await response.json()
        console.log(data)
        setTbchart(data.trialBalance_chart)
        setActname(data.account_name)
        setCode(data.code)
       
    
    };

    useEffect(() => {
        getCOA();
    }, [])

    // const onPost = (e) => {
    //     setPost(e.target.value);
       
    // }

    

    // const updateCOA = async () => {
    //     fetch(`/accountingModule/coa-update/${noteID}`, {
    //         method: "PUT",
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         trialBalance_chart:JSON.stringify(list.trialBalance_chart),
    //         account_name:JSON.stringify(list.account_name),
    //         code:JSON.stringify(list.code)
            
    //     })
    //     console.log(list)
    // };

    const updateCOA = async () => {
        
        let formfield = new FormData()

        formfield.append('trialBalance_chart', tbchart)
        formfield.append('account_name', actname)
        formfield.append('code', code)

        await axios({
          method: 'PUT',
          url: `/accountingModule/coa-update/${noteID}`,
          data: formfield 
        }).then (response => {
            console.log(response.data)
            // history.push('/note-list/')
        })
    };

    let handleSubmit = () => {
        updateCOA()
        history.push('/chartofaccount-list/')
    }


    return (
        <>
        <div style={{ marginTop: 70 }}>
            
        </div>

        {manageState && (
        <div className="" id="addnewlist">

          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add Chart of Account</h4>
              </div>

               <div className="modal-body">
                    <label style={labelStyle}>Chart of Account</label>
                    <select style={inputStyle}
                        onChange={(event) => changeoption(event.target.value)}
                        value={tbchart}
                        >
                        <option value="Current Asset">Current Asset</option>
                        <option value="Non-Current Asset">Non-Current Asset</option>
                        <option value="Current Liability">Current Liability</option>
                        <option value="Non-Current Liability">Non-Current Liability</option>
                        <option value="Equity">Equity</option>
                        <option value="Income">Income</option>
                        <option value="Cost OF Sale Expense">Cost OF Sale Expense</option>
                        <option value="General and Adminimistrative Expense">General and Adminimistrative Expense</option>

                        
                        </select>

                  

                    <label style={labelStyle}>Account Name</label>
                    <input
                    type="input"
                    data-name='account_name'
                    className="form-control"
                    onChange={(e) => setActname(e.target.value)}
                    value={actname}
                    style={inputStyle}

                    />

                    <label style={labelStyle}>Code</label>
                    <input
                    type="input"
                    data-name='code'
                    className="form-control"
                    onChange= {(e) => setCode(e.target.value)}
                      value={code}
                    style={inputStyle}

                    />
               
              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-info" onClick={handleSubmit} >Update</button>
                <Link to='/accountingDashboard/' className="btn btn-sm btn-danger">Close</Link>
              </div>
                </div>
                </div>
            </div>
        )}
        </>
    )
}

export default EditCOF
