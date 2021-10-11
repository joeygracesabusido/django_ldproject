// import { eventListeners } from '@popperjs/core';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



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

const JournalEntry = ({history},{props}) => {

    const [showModal, setshowModal] = useState(true);
    const [selectOption, setSelectOption] = useState('');

    const [charlist, setCharlist] = useState([]);

    const [date, setDate] = React.useState('');
    // const [journal_r, setJournal_r] = React.useState('');
    const [reference_r, setReference_r] = React.useState('');
    const [check_no_ref_r, setCheck_no_ref_r] = React.useState('');
    const [journalMemo_r, setJournalMemo_r] = React.useState('');
    const [account_name_r, setAccount_name_r] = React.useState('');
    const [debit_r, setDebit_r] = React.useState('');
    const [credit_r, setCredit_r] = React.useState('');


    const [selectList, setSelectList] = useState([])

    const [selectList2, setSelectList2] = useState([])

    // const [req, setReq] = useState({
    //   account_name:""
    // })


    const [ inputfields, setInputfields] = useState([
      {debit:'', credit:'',account_name:''}
    
    ]);

    // const [ inputfields, setInputfields] = useState('');


  
    useEffect(() =>{
      loadChartofAccountList()
    },[])

    const manageState = () => {
        setshowModal(!setshowModal)
      };
    
      // Magulo data structure mo haha
    const handleChangeInput =(index, event)=> {
      const values = [...inputfields];
      // console.log(values[index][event.target.name])
      values[index][event.target.name] = event.target.value;
      setInputfields(values);
      // console.log(values)
        
    };

    const handleAddFields = () => {
      setInputfields([...inputfields, {debit: '', credit: '', account_name: ''}])
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
              // setCharlist(data.map(data => {
              //   console.log(data.account_name)
              // }))
              // console.log(data[0].account_name)

          }
          // data.map( data => {
          //   console.log(data.account_name)
          // })
          // console.log(data[0])
      } catch (err) {
          console.log(err);

      }
    };

    const JournalEntry = async () => {
      let formfield = new FormData()

      formfield.append('transdate', date)
      formfield.append('journal', selectOption)
      formfield.append('reference', reference_r)
      formfield.append('check_no_ref', check_no_ref_r)
      formfield.append('journalMemo', journalMemo_r)
      formfield.append('account_name', inputfields)
      formfield.append('accounts', inputfields) // ito nalang isubmit mo
      
      formfield.append('debit', debit_r)
      formfield.append('credit', credit_r)
     
      await axios({
          method: 'POST',
          url: `/accountingModule/journal-post2/`,
          data: formfield 
      
      }).then ((response) => {
          // console.log(response.data)
         console.log(response.data)
        //  history.push('/journalEntry-list/')
        // console.log(inputfields.account_name)
      })
    };

    const onDate = (e) => {
      setDate(e.target.value);

    };

    // const onJournal = (e) => {
    //   setJournal_r(e.target.value);

    // };

    const onReference = (e) => {
      setReference_r(e.target.value);

    };

    const onCheckRef = (e) => {
      setCheck_no_ref_r(e.target.value);

    };

    const onJournalmemo = (e) => {
      setJournalMemo_r(e.target.value);

    };

    // const onAccountName = (e) => {
    //   setAccount_name_r(e.target.value);

    // };

    const onDebit = (e) => {
      setDebit_r(e.target.value);

    };

    const onCredit = (e) => {
      setCredit_r(e.target.value);

    };

    const handleSubmit = (e) => {
      e. preventDefault();
      // console.log('Inputfields', inputfields)
    
      var data = inputfields.filter(inputfield => inputfield.account_name === "Revolving Fund")
      if (data !== inputfields.account_name) {
        console.log(data)
      }else{
        console.log("Data has no match")
      }
      

      
      

      // items = [{id: 1, text: 'test words'}, {id: 2, text: 'another test'}];
      // var data = items.filter(item => item.text === 'test words')
      // console.log(data); 
    };

    const changeoption2 = (newOption) => {
      setSelectList(newOption)
      }

    const handleChange = (e) => {
      
      setCharlist({ charlist: e.target.value });
    };


    const onPost = (e) => {
      setAccount_name_r(e.target.value);
     
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
                <h4 className="modal-title" >Journal Entry</h4>
              </div>

               <div className="modal-body"  >
                    <label style={labelStyle}>Date</label>
                            <input
                            type="date"
                            className="form-control"
                            name="transdate"
                            onChange={onDate}
                            value={date}
                            style={inputStyle}

                            />
                    <label style={labelStyle}>Journal Type</label>

                     
                      <select style={inputStyle}
                        name="journal"
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
                        name="reference"
                        type="input"
                        className="form-control"
                        onChange={onReference}
                        value={reference_r}
                        style={inputStyle}

                        />

                    <label style={labelStyle}>Check No</label>
                        <input
                        name="check_no_ref"
                        type="input"
                        className="form-control"
                        onChange={onCheckRef}
                        value={check_no_ref_r}
                        style={inputStyle}

                        />
                     <label style={labelStyle}>Journal Memo</label>
                        <textarea 
                        name="Text1" cols="33" rows="3"
                        onChange={onJournalmemo}
                        value={journalMemo_r}
                        >

                        </textarea>

              </div>
              <div className="modal-footer">
                { inputfields.map((inputfields, index) => (
                  <div key={index}>
                    
                    <select style={selectStyle}
                        name="account_name"
                        // type="number"
                        // onChange={onPost}
                        // value = {account_name_r}

                        // onChange={(event) => changeoption2(event.target.value)}
                        // value = {selectList}

                        value = {inputfields.account_name}
                        onChange={event => handleChangeInput(index, event)}
                        >
                        
                        {charlist.map((data) => (
                          <option value={data.value}>{data.account_name}</option>
                        ))}


                        {/* {charlist.map((data) => (
                          <option value={data.value}>{data.id}</option>
                        ))} */}

                      </select>

                    


                    <input type="number"
                   
                    name="debit" 
                    placeholder="Debit"
                    // value = {debit_r}
                    // onChange = {onDebit}
                    value = {inputfields.debit}
                    onChange={event => handleChangeInput(index, event)}
                    
                    style={footerInputStyle}/>

              
                    <input type="number"
                    name="credit" 
                    placeholder="Credit"
                    // value = {credit_r}
                    // onChange = {onCredit}
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
                
               
               

              </div>

              <div className="modal-footer">
                <button className="btn btn-sm btn-info" onClick={handleSubmit} >Save</button>
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

// pag click ng save ang value ng account name undefined
