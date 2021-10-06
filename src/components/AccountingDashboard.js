import React from 'react';
import { Link } from 'react-router-dom';



const h1Style = {
    
    fontSize: '25px',
    padding: '2px'
    

    };

const AccountingDashboard = () => {
    return (
        <div className="" style={{ marginTop: 70 }}>
           
           
            <Link to={`/add-chartofaccount/`} >
                <h1 style={h1Style}>Create Chart of Account</h1>
            </Link>
            

            <Link to={`/chartofaccount-list/`} >
                <h1 style={h1Style}>Chart of Account list</h1>
            </Link>

            <Link to={`/journalEntry-post/`} >
                <h1 style={h1Style}>Journal Voucher</h1>
            </Link>

            <Link to={`/journalEntry-list/`} >
                <h1 style={h1Style}>Journal Entry List</h1>
            </Link>

    

    
        </div>
    )
}

export default AccountingDashboard
