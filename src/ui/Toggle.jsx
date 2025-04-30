function Toggle({ isOn = true, setIsOn, text, tooltip, children }) {
  /*
    ember, molten, inferno, ironshade, oblivioncore, flamegold
    copper, ash, stonegray, cobble, emeraldshade

    */

  /*
          <div className="flex w-56 justify-between pl-4">
            <div className="flex items-center">Min Dealt</div>
            <Toggle
              isOn={useMinDealtFilter}
              setIsOn={() => dispatch(setUseFilter("useMinDealtFilter"))}
            />
          </div>
    */

  const backgroundColor = isOn
    ? "bg-stonegray-600 hover:bg-stonegray-500"
    : "bg-stonegray-700 hover-bg-stonegray-600";
  const toggleColor = isOn
    ? "bg-emeraldshade-500 text-emeraldshade-50"
    : "bg-inferno-300 text-inferno-100";
  const position = isOn ? "translate-x-[100%]" : "translate-x-[0%]";

  return (
    <div className="flex w-full items-center justify-center gap-4">
      <div className="flex w-48 justify-between">
        <div className="flex px-2" title={tooltip}>
          {text}
        </div>
        {children}
      </div>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`flex h-8 w-24 items-center ${backgroundColor} hover:bg-stonegray-500 mx-2 cursor-pointer px-2 transition-all duration-200`}
      >
        <div
          className={`text-center ${toggleColor} ${position} h-6 w-10 transition-all duration-200 select-none`}
        >
          {isOn ? "On" : "Off"}
        </div>
      </div>
    </div>
  );
}

export default Toggle;
