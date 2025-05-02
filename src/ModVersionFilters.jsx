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
import CollapsibleWrapper from "./ui/CollapsibleWrapper";

function ModVersionFilters() {
  const { damageMods, sliderMods } = useSelector((state) => state.mod);
  const dispatch = useDispatch();

  //const [isActive, setIsActive] = useState(false);

  const customSliderMod = sliderMods[sliderMods.length - 1];
  const customDamageMod = damageMods[damageMods.length - 1];

  return (
    // <div className="bg-ironshade-600 flex flex-col gap-4 py-4">
    <CollapsibleWrapper text="Enabled Mod Versions" lightHover={false}>
      <div className="flex flex-col justify-evenly gap-8 md:flex-row">
        <div className="flex flex-col gap-2 md:w-1/2">
          <Subheader
            text="Difficulty Slider Fixed Versions"
            link="https://www.nexusmods.com/oblivionremastered/mods/58"
          />
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
        <div className="flex flex-col gap-2 md:w-1/2">
          <Subheader
            text="More Damage Versions"
            link="https://www.nexusmods.com/oblivionremastered/mods/269"
          />
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
    </CollapsibleWrapper>
    // </div>
  );
}

export default ModVersionFilters;
