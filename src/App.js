import React from 'react'
import './App.css';
import { ToastContainer} from 'react-toastify'
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home';
import AddContact from './Components/AddContact';
import EditComponent from './Components/EditComponent';

function App() {
  return (
    <div className="App" >
      <ToastContainer />
      <Navbar/>
      < Routes>
        <Route  exact path='/' element={ <Home/>}/>
        <Route  path='/add' element={<AddContact/>}/>
        <Route  path='/edit/:id' element={<EditComponent/>}/>
    

      </Routes>
    </div>
  );
}

export default App;
