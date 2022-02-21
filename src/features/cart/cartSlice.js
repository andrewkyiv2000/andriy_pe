import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: []
  },
  reducers: {
    addItems: (state, action) => {
    const product = action.payload;
    const id = product.id;
    
    for (var i=0; i<state.value.length; i++){
      const item = state.value[i]
    }
    
  
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


