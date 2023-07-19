import {combineReducers} from '@reduxjs/toolkit'
import filterPageSlice from "../Pages/FilterPage/store/slice/filterPageSlice";

export const rootReducer = combineReducers({
    filterPageSlice: filterPageSlice,
})

export type RootState = ReturnType<typeof rootReducer>