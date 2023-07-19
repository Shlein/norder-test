import React from "react";
import {IControl} from "../store/types/filterPageTypes";
import {setFilterPageIsTooltipVisible, setSelectedControlId} from "../store/slice/filterPageSlice";
import {useAppDispatch} from "../../../redux/hooks";

interface IProps {
    controlInfo: IControl,
    isTooltipVisible: boolean,
    selectedControlId: number,
}

const InputControl: React.FC<IProps> = ({controlInfo, isTooltipVisible, selectedControlId,}) => {

    const dispatch = useAppDispatch();

    return (
        <div>
            <div>{controlInfo.text}</div>
            <input
                type={controlInfo.type}
                placeholder={controlInfo.placeholder}
                onClick={() => {
                    dispatch(setSelectedControlId(controlInfo.id));
                    if (selectedControlId !== controlInfo.id) {
                        dispatch(setFilterPageIsTooltipVisible(true));
                    }
                }}
            />
            {
                selectedControlId === controlInfo.id && isTooltipVisible &&
                <button onClick={() => console.log("Показаны товары по фильтру", controlInfo.text)}>
                  Показать
                </button>
            }
        </div>
    )
}

export default InputControl