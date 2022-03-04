import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {toast} from 'react-toastify'
import { addContact } from '../redux/action'
import {useNavigate} from 'react-router-dom'


const AddContact = () => {
const [name,setName] =useState('')
const [email,setEmail] =useState('')
const [number,setNumber] =useState('')
const contacts = useSelector(state=>state)
const dispatch = useDispatch()
const navigate = useNavigate()

const handleSubmit = e => {
  e.preventDefault();
  const checkEmail = contacts.find(contact => contact.email ===email && email)
  const checkNumber = contacts.find(contact => contact.number === parseInt(number) && number)

  if(!name || !email || !number){
    return toast.warning('please fill in all fields!')
  }

  if(checkEmail){
    return toast.error('This email already exists!')
  }

  if(checkNumber){
    return toast.error('This number already exists!')
  }

  dispatch(addContact(data))
  toast.success('Student added successfully!')
  navigate('/')
}

const data =  (contacts.length >0) ? {
  id: contacts[contacts.length - 1].id +1,
  name,
  email,
  number
} : {id: 0,
  name,
  email,
  number }

console.log(data)


  return (
    <div className='container'>
    <div className='row'>
        <h1 className='display-3 text-center mt-5'> Add Student</h1>
        <div className='col-md-6 shadow mx-auto p-5 mt-2'>
       <form onSubmit={handleSubmit}>
           <div className='form-group'>
             <input value={name}  onChange={(e)=>setName(e.target.value)} type='text' placeholder='Name'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input value={email}  onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input value={number}  onChange={(e)=>setNumber(e.target.value)} type='number' placeholder='Phone number'  className='form-control my-3'/>
           </div>
           <div className='form-group'>
             <input type='submit' value='Add student' className='btn btn-block btn-dark my-3' />
           </div>
       </form>
        </div>
    </div>
    </div>
  )
}

export default AddContact