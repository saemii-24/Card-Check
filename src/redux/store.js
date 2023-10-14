import { configureStore } from '@reduxjs/toolkit'
import cardBoxReducer from './cardBoxSlice'

const store = configureStore({
  reducer: {
    cardBoxSlice: cardBoxReducer,
  },
})

export default store
