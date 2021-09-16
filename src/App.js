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


import Createpost from './components/Createpost';

import Navbar from './components/Navbar';
import ListNote from './components/ListNote';



function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
        <Route path="/" exact component={Navbar} />
        <Route path="/note/:id" component={NotePage}/>
        <Route path="/create-post/" component={Createpost}/>
        <Route path="/note-list/" component={ListNote}/>
      {/* <div className="app"> */}
        
        {/* <div className="container"> */}
        {/* <Header/> */}
        
        {/* </div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
