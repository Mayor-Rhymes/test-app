import {createSlice} from '@reduxjs/toolkit'

const messages = JSON.parse(localStorage.getItem('messages'))
const initialState ={

    messages: messages ? messages : []
}


export const messageSlice = createSlice({

    name: 'message',
    initialState,
    reducers: {

        addMessages: (state, action) => {

            state.messages.push(action.payload)
            localStorage.setItem('messages', JSON.stringify(state.messages))
        }
    }

})


export const {addMessages} = messageSlice.actions
export default messageSlice.reducer