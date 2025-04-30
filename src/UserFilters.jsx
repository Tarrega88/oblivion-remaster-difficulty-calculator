import Toggle from "./ui/Toggle";
import { useDispatch, useSelector } from "react-redux";
import { setUseFilter } from "./redux/filterSlice";
import FilterInput from "./ui/FilterInput";
import SectionHeader from "./ui/SectionHeader";

function UserFilters() {
  const {
    useMinDealtFilter,
    useMaxDealtFilter,
    useMinTakenFilter,
    useMaxTakenFilter,
    useMinRelativeFilter,
    useMaxRelativeFilter,
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  return (
    <div className="px-8 pb-2">
      <SectionHeader text="Filters" />
      <div className="flex flex-col gap-4 py-2">
        <div className="flex">
          <Toggle
            isOn={useMinDealtFilter}
            setIsOn={() => dispatch(setUseFilter("useMinDealtFilter"))}
            text="Min Dealt"
          >
            <FilterInput type="minDealt" />
          </Toggle>
          <Toggle
            isOn={useMaxDealtFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxDealtFilter"))}
            text="Max Dealt"
          >
            <FilterInput type="maxDealt" />
          </Toggle>
        </div>
        <div className="flex">
          <Toggle
            isOn={useMinTakenFilter}
            setIsOn={() => dispatch(setUseFilter("useMinTakenFilter"))}
            text="Min Taken"
          >
            <FilterInput type="minTaken" />
          </Toggle>
          <Toggle
            isOn={useMaxTakenFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxTakenFilter"))}
            text="Max Taken"
          >
            <FilterInput type="maxTaken" />
          </Toggle>
        </div>
        <div className="flex">
          <Toggle
            isOn={useMinRelativeFilter}
            setIsOn={() => dispatch(setUseFilter("useMinRelativeFilter"))}
            text="Min Relative"
          >
            <FilterInput type="minRelative" />
          </Toggle>

          <Toggle
            isOn={useMaxRelativeFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxRelativeFilter"))}
            text="Max Relative"
          >
            <FilterInput type="maxRelative" />
          </Toggle>
        </div>
      </div>
    </div>
  );
}

export default UserFilters;
