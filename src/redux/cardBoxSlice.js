import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: [],
}

const cardBoxSlice = createSlice({
  name: 'cardBoxSlice', //slice
  initialState,
  reducers: {
    putCardBox: (state, action) => {
      //reducer
      const findId = state.value.some((item) => item.id === action.payload.id)
      if (state.value.length < 3 && !findId) {
        state.value.push(action.payload)
      }
    },
    deleteCardBox: (state, action) => {
      let filterValue = state.value.filter((item) => item.id !== action.payload.id)
      state.value = filterValue
    },
  },
})

export const { putCardBox, deleteCardBox } = cardBoxSlice.actions
export default cardBoxSlice.reducer
