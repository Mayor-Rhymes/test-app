import {createSlice} from '@reduxjs/toolkit'


const user = JSON.parse(sessionStorage.getItem('user'))
const initialState = {

    user: user ? user : null
}


export const userSlice = createSlice({



    initialState,
    name: 'user',
    reducers: {


        login: (state, action) => {


            state.user = action.payload
            sessionStorage.setItem('user', JSON.stringify(state.user))
        },

        logout: (state) => {


            state.user = null
            sessionStorage.removeItem('user')
        }
    }
})

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;