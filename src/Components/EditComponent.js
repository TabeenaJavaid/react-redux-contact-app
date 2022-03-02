import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link,useParams,useNavigate} from 'react-router-dom'
import { updateContact} from '../redux/action'
import {toast} from 'react-toastify'

const EditComponent = () => {
  const [name,setName] =useState('')
  const [email,setEmail] =useState('')
  const [number,setNumber] =useState('')
  const {id} = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const contacts = useSelector(state=>state);
  const currentContact = contacts.find(contact=>(contact.id === parseInt(id)))

   useEffect(()=>{
     if(currentContact){
   setName(currentContact.name)
   setEmail(currentContact.email)
   setNumber(currentContact.number)
     }
   },[currentContact])
   
   const handleSubmit = e => {
    e.preventDefault();
    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email ===email)
    const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number) && number)
  
    if(!name || !email || !number){
      return toast.warning('please fill in all fields!')
    }
  
    if(checkEmail){
      return toast.error('This email already exists!')
    }
  
    if(checkNumber){
      return toast.error('This number already exists!')
    }
    dispatch(updateContact(newdata))
    toast.success('Student contact updated successfully!')
    navigate('/')
  }
  
  const newdata = {
    id:parseInt(id),
    name,
    email,
    number
  }
  

  return (
    <div className='container'>
      {currentContact ? (<div className='row'>
        <h1 className='display-3 text-center mt-5'> Edit Student {id}</h1>
        <div className='col-md-6 shadow mx-auto p-5 mt-2'>
       <form onSubmit={handleSubmit}>
           <div className='form-group'>
             <input value = {name} onChange={e => setName(e.target.value)} type='text' placeholder='Name'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input value={email}  onChange ={e => setEmail(e.target.value)} type='email' placeholder='Email'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input value={number} onChange ={e => setNumber(e.target.value)} type='number' placeholder='Phone number'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input type='submit' value='Update ' className='btn btn-dark my-3' />
             <Link to='/' className='btn btn-danger mx-3' >Cancel</Link>
           </div>
       </form>
        </div>
    </div>):( <h1 className='display-3 text-center mt-5'> Student contact with id-{id} not found.</h1>)}
    
    </div>
  )
}

export default EditComponent