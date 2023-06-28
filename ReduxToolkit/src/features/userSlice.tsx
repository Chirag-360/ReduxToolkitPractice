
import { createSlice } from "@reduxjs/toolkit";

interface Users {
id:string;
name:string;
}

const initialState:Users[] = [
    { id: '0', name: 'Rahul Prajapati' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Meet Patel' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state:{users:Users[]}) => state.users;


export default usersSlice.reducer