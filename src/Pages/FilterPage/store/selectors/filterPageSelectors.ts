import {RootState} from "../../../../redux/rootReducer";
import {IControl} from "../types/filterPageTypes";

export const getFilterPageIsTooltipVisible = (state: RootState) => {
    return state.filterPageSlice.isTooltipVisible;
}

export const getFilterPageControlsArray = (state: RootState): IControl[] => {
    return state.filterPageSlice.controlsArray;
}

export const getSelectedControlId = (state: RootState): number => {
    return state.filterPageSlice.selectedControlId;
}