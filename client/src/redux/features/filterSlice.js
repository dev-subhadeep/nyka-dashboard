import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    genderToggled(state, action) {
      state.gender = action.payload
    },
    categoryToggled(state, action) {
      state.category = action.payload
    },
  },
})

export const { genderToggled, categoryToggled } = filterSlice.actions
export default filterSlice.reducer
