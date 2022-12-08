import {createSlice, nanoid} from '@reduxjs/toolkit'


const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]
const contactSlice = createSlice({
    name: 'contacts',
    initialState: defaultContacts,
    reducers: {
        addContact: {
            addContact: (state, { payload }) => [payload, ...state]
 
    }
}
})

export const {addContact} = contactSlice.actions
export default contactSlice.reducer