import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {
    getFilterPageControlsArray,
    getFilterPageIsTooltipVisible,
    getSelectedControlId
} from "./store/selectors/filterPageSelectors";
import InputControl from "./InputControl/InputControl";


const FilterPage = () => {

    const dispatch = useAppDispatch();
    const controlsArray = useAppSelector(getFilterPageControlsArray);
    const selectedControlId = useAppSelector(getSelectedControlId);
    const isTooltipVisible = useAppSelector(getFilterPageIsTooltipVisible);

    return (
        <div>
            {controlsArray.map((control) => (
                <InputControl
                    key={control.id}
                    controlInfo={control}
                    isTooltipVisible={isTooltipVisible}
                    selectedControlId={selectedControlId}
                />
            ))}
        </div>
    )
}

export default FilterPage