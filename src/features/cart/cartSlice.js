import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    addItems: (state, action) => {
  
      state.value=state.value.concat(action.payload)
    },
    removeItems: (state, action) => {
      state.value=state.value.filter((value,index)=>index!==action.payload)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItems, removeItems, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;