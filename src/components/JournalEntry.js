import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const inputStyle = {
    width: '250px',
    display: 'inline-block',
    height: '30px',
    margin: '5px'
    // margin: '0 auto'
    
    };

const labelStyle = {
    width: '120px',
    fontSize: '15px',
    display: 'inline-block'
    
    };
    
const selectStyle = {
    width: '50px',
    fontSize: '11px',
    display: 'inline-block'
    
    };

const JournalEntry = () => {

    const [showModal, setshowModal] = useState(true);
    const [selectOption, setSelectOption] = useState('Current Asset');

    const manageState = () => {
        setshowModal(!setshowModal)
      };
    

    const changeoption = (newOption) => {
    setSelectOption(newOption)
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
                    <label style={labelStyle}>Date</label>
                            <input
                            type="date"
                            className="form-control"
                            // onChange={onAccount}
                            // value={accountname}
                            style={inputStyle}

                            />
                    <label style={labelStyle}>Journal Type</label>
                    <select style={inputStyle}
                        onChange={(event) => changeoption(event.target.value)}
                        value={selectOption}
                        >
                        <option value="General">General</option>
                        <option value="Payment">Payment</option>
                        <option value="Receipts">Receipts</option>
                        <option value="Sales">Sales</option>
                        <option value="Purchases">Purchases</option>
                       
                        
                        </select>

                    <label style={labelStyle}>Reference</label>
                        <input
                        type="input"
                        className="form-control"
                        // onChange={onAccount}
                        // value={accountname}
                        style={inputStyle}

                        />

                    <label style={labelStyle}>Check No</label>
                        <input
                        type="input"
                        className="form-control"
                        // onChange={onAccount}
                        // value={accountname}
                        style={inputStyle}

                        />
                     <label style={labelStyle}>Journal Memo</label>
                        <textarea 
                        name="Text1" cols="33" rows="3"
                        
                        >

                        </textarea>

                    
               
              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-info"  >Save</button>
                <Link to='/accountingDashboard/' className="btn btn-sm btn-danger">Close</Link>
              </div>
                </div>
                </div>
            </div>
        )}
        </>
    )
}

export default JournalEntry
