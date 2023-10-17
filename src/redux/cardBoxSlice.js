import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: [],
  duplicatePopup: false,
  fullPopup: false,
  cardCount: 0,
}

const cardBoxSlice = createSlice({
  name: 'cardBoxSlice', //slice
  initialState,
  reducers: {
    putCardBox: (state, action) => {
      //중복되지 않은 경우에만 cardCount를 올린다.
      if (!state.value.some((item) => item.id === action.payload.id)) {
        state.cardCount++
      } else {
        state.duplicatePopup = true //중복된 경우 중복 팝업을 보여준다.
      }
      const findId = state.value.some((item) => item.id === action.payload.id)
      if (state.value.length < 3 && !findId) {
        state.value.push(action.payload)
      }
    },
    deleteCardBox: (state, action) => {
      let filterValue = state.value.filter((item) => item.id !== action.payload.id)
      state.value = filterValue
      state.cardCount = state.value.length
    },
    closeDuplicatePopup: (state) => {
      //중복 팝업 닫기
      state.duplicatePopup = false
    },
    showFullPopup: (state) => {
      //3장 초과시 팝업 열기
      if (state.cardCount >= 4 && state.duplicatePopup === true) {
        state.fullPopup = false
      } else if (state.cardCount >= 4) {
        state.fullPopup = true
      }
    },
    closeFullPopup: (state) => {
      //3장 초과 팝업 닫기
      state.fullPopup = false
    },
  },
})

export const { putCardBox, deleteCardBox, closeDuplicatePopup, showFullPopup, closeFullPopup } =
  cardBoxSlice.actions
export default cardBoxSlice.reducer
