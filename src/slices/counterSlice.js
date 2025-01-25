import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    count:0
};
export const counterSlice = createSlice(
    {
        name:'counter',
        initialState,
        reducers:
        {
           increment : (state)=>
           {
            state.count++
           } ,
           decrement:(state)=>
           {
            state.count--;
           },
           incrementByNumber:(state,pl)=>
           {
            
            state.count = state.count+parseInt(pl.payload)
           }
        }
    }
)
export default counterSlice.reducer
export const {increment,decrement,incrementByNumber} = counterSlice.actions;
// export const { reducerName } = siceName.actions;

// export default sliceName.reducer;