import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';


const options = [
    { value: 'Current Asset', label: 'Current Asset' },
    { value: 'Non-Current Asset', label: 'Non-Current Asset' },
    { value: 'Current Liability', label: 'Current Liability' },
    { value: 'Non-Current Liability', label: 'Non-Current Liability' },
    { value: 'Equity', label: 'Equity' },
    { value: 'Income', label: 'Income' },
    { value: 'Cost OF Sale Expense', label: 'Cost OF Sale Expense' },
    { value: 'General and Adminimistrative Expense', label: 'General and Adminimistrative Expense' },
  ]

const inputStyle = {
width: '350px',
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

const selectStyle = {
    width: '50px',
    fontSize: '11px',
    display: 'inline-block'
    
    };

const Addchartofaccount = ({history}) => {

    const [showModal, setshowModal] = useState(true);
    const [selectOption, setSelectOption] = useState('');
   
    const [accountname, setAccountname] = useState('');
    const [code, setCode] = useState('');

    const manageState = () => {

        setshowModal(!setshowModal)
      };

    // const onSelect = (e) => {
    //     setSelectOption(e.target.value);
    
    // };

    const changeoption = (newOption) => {
        setSelectOption(newOption)
      }

    

    const onAccount = (e) => {
        setAccountname(e.target.value);
    
    };

    const onCode = (e) => {
        setCode(e.target.value);
    
    };

    const AddChartofAcct = async () => {
        let formfield = new FormData()

        formfield.append('trialBalance_chart', selectOption)
        formfield.append('account_name', accountname)
        formfield.append('code', code)

        await axios({
            method: 'POST',
            url: `/accountingModule/chartsofaccount-post/`,
            data: formfield 
        
        }).then ((response) => {
            console.log(response.data)
            // history.push('/')
        })
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
                        value={selectOption}
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

                    {/* <Select  options ={options}
                    data-name='trialBalance_chart' 
                    onChange={(event) => changeoption(event.target.value)}
                    // value={options.value}
                    value = {selectOption}
                    style={selectStyle} 
                    /> */}

                    <label style={labelStyle}>Account Name</label>
                    <input
                    type="input"
                    data-name='account_name'
                    className="form-control"
                      onChange={onAccount}
                      value={accountname}
                    style={inputStyle}

                    />

                    <label style={labelStyle}>Code</label>
                    <input
                    type="input"
                    data-name='code'
                    className="form-control"
                      onChange={onCode}
                      value={code}
                    style={inputStyle}

                    />
               
              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-info" onClick={AddChartofAcct} >Save</button>
                <Link to='/' className="btn btn-sm btn-danger">Close</Link>
              </div>
                </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Addchartofaccount
