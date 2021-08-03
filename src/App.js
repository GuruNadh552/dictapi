import './App.css';
import React,{useState} from 'react';
import ShowWord from './ShowWord';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [inpWord,setInpWord] = useState('');
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
          <header className="App-header">
          <div className="App-main">
            <p>Enter a Word : </p>
            <input type="text" className="inpword" onChange={(e)=>{setInpWord(e.target.value);console.log(e.target.value)}}/>  
            <Link to="/show">
              <button className="btnsubmit">
                Search
              </button>
            </Link>
          </div>
        </header>
          </Route>
          <Route exact path="/show">
            <ShowWord word={inpWord}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
