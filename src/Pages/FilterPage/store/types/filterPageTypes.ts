export interface IControl {
    id: number,
    type: string,
    text: string,
    placeholder?: string,
}

export interface IFilterPageState  {
    isTooltipVisible: boolean,
    selectedControlId: number,
    controlsArray: IControl[],
}