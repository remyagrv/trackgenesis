import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import logo from './lost-loch-spirits-logo.jpeg';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';
import './App.css';
import JsonDataDisplay from './components/table';
import Home from './components/home';
import Productdetails from './components/porductdetails'; 
import About from './components/about';



function App() {
  const [loading, setLoading] =useState(false);
useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
},6000)
},[])
  return (
    <div>{
      loading ?
    
      <div className="App-header">
      	<div className="loader">
		      <img src={logo} />
	      </div>
      </div>
      :
      <div >
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>} exact>
            
          </Route>
          <Route path='/table' element={<JsonDataDisplay/>} exact>
            
          </Route>
          <Route path='/productdetails' element={<Productdetails/>} exact>
            
          </Route>
          <Route path='/about' element={<About/>} exact>
            
          </Route>
        
        </Routes>
        </Router>
        <Footer/>  
    </div>

      
   
}</div>

  );
}

export default App;
