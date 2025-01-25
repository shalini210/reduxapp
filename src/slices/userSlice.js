import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user:{
        _id:0,
        username: "",
       pwd: "",
        email: "",
        contact: "",
        verified: false,
        type: "",
        
    }
};

export const sliceName = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setUser: (state,action) => {
      state.user = action.payload
    },
  },
});

export const { setUser } = sliceName.actions;

export default sliceName.reducer;