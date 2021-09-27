import { eventListeners } from '@popperjs/core';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import DeleteIcon from '@shapla/react-delete-icon';


const mdalStyle = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '60%',
    transform: 'translate(-40%, -10%)',
  },
 
};

 const modal_content = {
  width: '750px'
 
};

const modalbody = {
  padding: '10px',
  border_top: '1px solid rgba(227, 250, 227, 0.918)',
  background_color: '#fefefe'
 
};

const inputStyle = {
    width: '250px',
    display: 'inline-block',
    height: '30px',
    margin: '5px'
    // margin: '0 auto'
    
    };

const footerInputStyle = {
  width: '80px',
  display: 'inline-block',
  height: '30px',
  // margin: '5px'
  margin: '0 auto',
  fontSize: '12px',
  
  };

const labelStyle = {
    width: '120px',
    fontSize: '15px',
    display: 'inline-block'
    
    };
    
const selectStyle = {
    width: '220px',
    height: '30px',
    fontSize: '12px',
    display: 'inline-block'
    
    };

const JournalEntry = () => {

    const [showModal, setshowModal] = useState(true);
    const [selectOption, setSelectOption] = useState('Current Asset');

    const [charlist, setCharlist] = useState([]);

    const [items, setItems] = React.useState([]);


    const [ inputfields, setInputfields] = useState([
      {debit:"", credit:""}
    ]);


    // React.useEffect(() => {
    //   async function getCharacters() {
    //     const response = await fetch(`/accountingModule/chartsofaccount-list/`);
    //     const body = await response.json();
    //     setItems(body.results.map(({ name }) => ({ label: name, value: name })));
    //   }
    //   getCharacters();
    // }, []);
  

    const manageState = () => {
        setshowModal(!setshowModal)
      };
    
    const handleChangeInput =(index, event)=> {
        // console.log(index,event.target.name)
        const values = [...inputfields];
        values [index][event.target.name] = event.target.value;
        setInputfields(values);
    };

    const handleAddFields = () => {
      setInputfields([...inputfields, {debit: '', credit: ''}])
    };

    const handleRemoveFields = (index) => {
        const values = [...inputfields];
        values.splice(index, 1);
        setInputfields(values);
    }



    const changeoption = (newOption) => {
    setSelectOption(newOption)
    }


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
    };

    return (
        <>
        <div style={{ marginTop: 70 }}>
            
        </div>

        {manageState && (
        <div className="" id="addnewlist">

          <div className="modal-dialog" >
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" >Add Chart of Account</h4>
              </div>

               <div className="modal-body"  >
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
                { inputfields.map((inputfields, index) => (
                  <div key={index}>
                    
                    <select style={selectStyle}>
                        // onChange={(event) => changeoption(event.target.value)}
                        // value={selectOption}
                        {charlist.map((data) => (
                          <option title={data}>{data}</option>
                        ))}
                        
                        {/* <option value="General">General</option>
                        <option value="Payment">Payment</option>
                        <option value="Receipts">Receipts</option>
                        <option value="Sales">Sales</option>
                        <option value="Purchases">Purchases</option> */}
                       
                        
                      </select>


                    <input type="text"
                    name="debit" 
                    placeholder="Debit"
                    value = {inputfields.debit}
                    onChange={event => handleChangeInput(index, event)}
                    style={footerInputStyle}/>

              
                    <input type="text"
                    name="credit" 
                    placeholder="Credit"
                    value = {inputfields.credit}
                    onChange={event => handleChangeInput(index, event)}
                    style={footerInputStyle}/>


                    <button className="btn btn-sm btn-secondary" 
                    onClick={()=> handleAddFields()}
                    >Add</button>

                    <button className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFields(index)}
                    >Del</button>

                  </div>

                  

                ))}
                
                {/* <select style={inputStyle}
                    onChange={(event) => changeoption(event.target.value)}
                    value={selectOption}
                    >
                    <option value="General">General</option>
                    <option value="Payment">Payment</option>
                    <option value="Receipts">Receipts</option>
                    <option value="Sales">Sales</option>
                    <option value="Purchases">Purchases</option>
                    
                    
                    </select> */}

                {/* <input
                    type="input"
                    className="form-control"
                    // onChange={onAccount}
                    // value={accountname}
                    style={footerInputStyle} */}

                

                   

               
               

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


