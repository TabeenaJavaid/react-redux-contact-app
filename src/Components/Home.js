import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import { deleteContact } from '../redux/action'

const Home = () => {

  const contacts =useSelector(state=>state)
  const dispatch = useDispatch()

  const handleDelete =(id) => {
    dispatch(deleteContact(id))
    toast.success('Contact deleted successfully!')
  }


  return (
    <div className='container '>
    <div className='row' >
        <div className='col-md-12 text-end my-5' >
       <Link to='/add' className='btn btn-outline-dark'> Add Contact</Link>
        </div>
        <div className='col-md-10 mx-auto'>
     <table className='table table-hover'>
     <thead className='text-white bg-dark text-center' >
       <tr>
         <th scope='col'>#</th>
         <th scope='col'>Name</th>
         <th scope='col'>Email</th>
         <th scope='col'>Number</th>
         <th scope='col'>Action</th>
       </tr>
     </thead>
     <tbody>
      {contacts.map(contact =>(
        <tr key={contact.id}>
          <td>{contact.id + 1}</td>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.number}</td>
          <td>
            <Link to={`/edit/${contact.id}`} style={{fontSize:'12px',padding:'0.2rem'}} className='btn btn-small btn-primary mx-2 '>Edit</Link>
            <button onClick ={() => handleDelete(contact.id)} type='button' className='btn btn-small btn-danger'>Delete</button>
          </td>
        </tr>
      ))}
     </tbody>
     </table>
        </div>
    </div>
    </div>
  )
}

export default Home