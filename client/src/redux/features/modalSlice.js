import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
  name: "modal",
  initialState: { visibility: false, mode: "edit" },
  reducers: {
    toggleVisibility(state, action) {
      state.visibility = !state.visibility
    },
    setAddMode(state, action) {
      state.mode = "add"
    },
    setEditMode(state, action) {
      state.mode = "edit"
    },
  },
})

export const { toggleVisibility, setAddMode, setEditMode } = modalSlice.actions
export default modalSlice.reducer
