
const initialState = [
    {
      id:0,
      name:'Tabeena Javaid',
      number: 1234567890,
      email: 'tj@gmail.com'

    },
    {
        id:1,
        name:'Javaid Iqbal',
        number: 6783521156,
        email: 'testcontact@gmail.com'
    }
]


const contactReducer =(state=initialState,action) =>{
    switch(action.type){
      case 'ADD_CONTACT':{
          return [...state,action.payload]
      }
      case 'UPDATE_CONTACT':{
       const updateState = state.map( contact=>contact.id === action.payload.id ? action.payload: contact)
       state=updateState
       return state
    }
    case 'DELETE_CONTACT':{
        const filteredContacts = state.filter( contact=>contact.id !== action.payload && contact)
        state=filteredContacts
        return state
     }

       default:
           return state;
    }
}

export default contactReducer