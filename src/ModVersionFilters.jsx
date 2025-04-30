import { useDispatch, useSelector } from "react-redux";
import Toggle from "./ui/Toggle";
import {
  setCustomDamage,
  setCustomSlider,
  setDamageModShown,
  setSliderModShown,
  toggleAllDamage,
  toggleAllSlider,
} from "./redux/modSlice";
import Subheader from "./ui/Subheader";
import SectionHeader from "./ui/SectionHeader";
import { useState } from "react";
import ModFilterInput from "./ui/ModFilterInput";

function ModVersionFilters() {
  const { damageMods, sliderMods } = useSelector((state) => state.mod);
  const dispatch = useDispatch();

  //const [isActive, setIsActive] = useState(false);

  const customSliderMod = sliderMods[sliderMods.length - 1];
  const customDamageMod = damageMods[damageMods.length - 1];

  return (
    <div className="flex flex-col gap-4 px-12 py-4">
      <SectionHeader text="Enabled Mod Versions" />
      <div className="flex justify-evenly gap-8">
        <div className="flex w-1/2 flex-col gap-2">
          <Subheader text="Difficulty Slider Fixed Versions" />
          <Toggle
            text="Toggle All"
            isOn={sliderMods.every((e) => e.isShown)}
            setIsOn={() => dispatch(toggleAllSlider())}
          />
          {sliderMods.map((e, i) =>
            i < sliderMods.length - 1 ? (
              <Toggle
                key={i}
                isOn={e.isShown}
                setIsOn={() => dispatch(setSliderModShown(e.version))}
                text={e.version}
              />
            ) : (
              <Toggle
                key={i}
                isOn={e.isShown}
                setIsOn={() => dispatch(setSliderModShown(e.version))}
                text={e.version}
              >
                <ModFilterInput
                  value={customSliderMod.multiple}
                  onChange={(e) => dispatch(setCustomSlider(e))}
                />
              </Toggle>
            ),
          )}
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <Subheader text="More Damage Versions" />
          <Toggle
            text="Toggle All"
            isOn={damageMods.every((e) => e.isShown)}
            setIsOn={() => dispatch(toggleAllDamage())}
          />
          {damageMods.map((e, i) =>
            i < damageMods.length - 1 ? (
              <Toggle
                key={i}
                isOn={e.isShown}
                setIsOn={() => dispatch(setDamageModShown(e.version))}
                text={e.version}
              />
            ) : (
              <Toggle
                key={i}
                isOn={e.isShown}
                setIsOn={() => dispatch(setDamageModShown(e.version))}
                text={e.version}
              >
                <ModFilterInput
                  value={customDamageMod.value}
                  onChange={(e) => dispatch(setCustomDamage(e))}
                />
              </Toggle>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default ModVersionFilters;
