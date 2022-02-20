import {createSlice} from '@reduxjs/toolkit';

const initialState = {fruitList: []};

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState,
    reducers:{
        addFruit:{
            reducer: (state, action)=>{
                state.fruitList = [...state.fruitList, action.payload];
            },
            prepare: (name, count)=>{
                return {payload: {name, count}};
            }
        }
    }
});

export const {addFruit} = fruitsSlice.actions;
export default fruitsSlice;