import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./features/filterSlice"
import modalReducer from "./features/modalSlice"

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    modal: modalReducer,
  },
})
