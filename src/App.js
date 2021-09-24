import { BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


// import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'

import NotePage from './pages/NotePage'
import Listitems from './components/Listitems';

import Createpost from './components/Createpost';

import Navbar from './components/Navbar';
import ListNote from './components/ListNote';

import EditNotes from './components/EditNotes';
import Testsearch from './components/Testseacrh';

// this is for chart of account transactions
import Addchartofaccount from './components/Addchartofaccount';
import Listchartofaccount from './components/Listchartofaccount';
import AccountingDashboard from './components/AccountingDashboard';
import EditCOF from './components/EditCOF';

// this is for Journal Entry Transaction

import JournalEntry from './components/JournalEntry';





function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
        <Route path="/" exact component={Navbar} />
        <Route path="/notelist/" component={NoteListPage}/>
        <Route path="/note-test/:id" component={NotePage}/>
        <Route path="/create-post/" component={Createpost}/>
        <Route path="/note-list/" component={ListNote}/>
        <Route path="/note-update/:id" component={EditNotes}/>
        <Route path="/test-list/" component={Testsearch}/>
        <Route path="/accountingDashboard/" component={AccountingDashboard}/>
        <Route path="/add-chartofaccount/" component={Addchartofaccount}/>
        <Route path="/chartofaccount-list/" component={Listchartofaccount}/>
        <Route path="/chartofaccount-edit/:id" component={EditCOF}/>
        <Route path="/journalEntry-post/" component={JournalEntry}/>
        
      {/* <div className="app"> */}
        
        {/* <div className="container"> */}
        {/* <Header/> */}
        
        {/* </div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
