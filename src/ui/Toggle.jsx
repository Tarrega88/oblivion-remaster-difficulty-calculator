function Toggle({ isOn = true, setIsOn, text, tooltip, children }) {
  /*
    ember, molten, inferno, ironshade, oblivioncore, flamegold
    copper, ash, stonegray, cobble, emeraldshade

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
      <div className="flex w-full justify-between sm:w-60">
        <div className="flex px-2 text-base sm:text-lg" title={tooltip}>
          {text}
        </div>
        {children}
      </div>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`flex h-8 w-18 items-center sm:w-24 ${backgroundColor} hover:bg-stonegray-500 mx-2 cursor-pointer px-2 transition-all duration-200`}
      >
        <div
          className={`text-center ${toggleColor} ${position} h-6 w-5 transition-all duration-200 select-none sm:w-10`}
        >
          <span className="hidden sm:inline">{isOn ? "On" : "Off"}</span>
        </div>
      </div>
    </div>
  );
}

export default Toggle;
