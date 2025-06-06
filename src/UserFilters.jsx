import Toggle from "./ui/Toggle";
import { useDispatch, useSelector } from "react-redux";
import {
  revertToRecommended,
  setUseFilter,
  toggleAll,
} from "./redux/filterSlice";
import FilterInput from "./ui/FilterInput";
import SectionHeader from "./ui/SectionHeader";
import CollapsibleWrapper from "./ui/CollapsibleWrapper";

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

  const allOn =
    useMinDealtFilter &&
    useMaxDealtFilter &&
    useMinTakenFilter &&
    useMaxTakenFilter &&
    useMinRelativeFilter &&
    useMaxRelativeFilter;

  return (
    <CollapsibleWrapper text="Damage Filters" lightHover={true}>
      <div className="flex flex-col gap-4 py-2">
        <Toggle
          isOn={allOn}
          text="Toggle All"
          setIsOn={() => dispatch(toggleAll())}
        />
        <div className="flex w-full justify-center py-4">
          <button
            className="bg-emeraldshade-800 hover:bg-emeraldshade-700 h-12 w-48 cursor-pointer transition-all duration-200"
            onClick={() => dispatch(revertToRecommended())}
          >
            Use Recommended
          </button>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Toggle
            isOn={useMinDealtFilter}
            setIsOn={() => dispatch(setUseFilter("useMinDealtFilter"))}
            text="Min Dealt"
            tooltip="The minimum percent of damage your character can deal in comparison to Vanilla Adept."
          >
            <FilterInput type="minDealt" />
          </Toggle>
          <Toggle
            isOn={useMaxDealtFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxDealtFilter"))}
            text="Max Dealt"
            tooltip="The maximum percent of damage your character can deal in comparison to Vanilla Adept."
          >
            <FilterInput type="maxDealt" />
          </Toggle>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Toggle
            isOn={useMinTakenFilter}
            setIsOn={() => dispatch(setUseFilter("useMinTakenFilter"))}
            text="Min Taken"
            tooltip="The minimum percent of damage your character can take in comparison to Vanilla Adept."
          >
            <FilterInput type="minTaken" />
          </Toggle>
          <Toggle
            isOn={useMaxTakenFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxTakenFilter"))}
            text="Max Taken"
            tooltip="The maximum percent of damage your character can take in comparison to Vanilla Adept."
          >
            <FilterInput type="maxTaken" />
          </Toggle>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Toggle
            isOn={useMinRelativeFilter}
            setIsOn={() => dispatch(setUseFilter("useMinRelativeFilter"))}
            text="Min Relative"
            tooltip="Relative strength is how much stronger or weaker your character is compared to enemies. 100% is equal. Anything less means you are weaker."
          >
            <FilterInput type="minRelative" />
          </Toggle>

          <Toggle
            isOn={useMaxRelativeFilter}
            setIsOn={() => dispatch(setUseFilter("useMaxRelativeFilter"))}
            text="Max Relative"
            tooltip="Relative strength is how much stronger or weaker your character is compared to enemies. 100% is equal. Anything more means you are stronger."
          >
            <FilterInput type="maxRelative" />
          </Toggle>
        </div>
      </div>
    </CollapsibleWrapper>
  );
}

export default UserFilters;
