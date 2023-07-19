import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilterPageState} from "../types/filterPageTypes";

const initialState: IFilterPageState = {
    controlsArray: [
        {id: 1, type: "input", text: "Поиск по названию", placeholder: "Введите название товара"},
        {id: 2, type: "checkbox", text: "В наличии"},
        {id: 3, type: "checkbox", text: "Под заказ"},
        {id: 4, type: "checkbox", text: "Возможна доставка"},
    ],
    selectedControlId: 0,
    isTooltipVisible: false,
}

const FilterPageSlice = createSlice({
    name: "filterPageSlice",
    initialState: initialState,
    reducers: {
        setFilterPageIsTooltipVisible(state, {payload}: PayloadAction<boolean>) {
            state.isTooltipVisible = payload;
        },
        setSelectedControlId(state, {payload}: PayloadAction<number>) {
            state.selectedControlId = payload
        },
    }
})

export const {
    setFilterPageIsTooltipVisible,
    setSelectedControlId,
} = FilterPageSlice.actions;

export default FilterPageSlice.reducer;