import { useState } from "react";
import Toggle from "./ui/Toggle";

function UserFilters() {
  /*
const filters = {
  minDealt: 75, //75
  maxDealt: 300, //300
  minTaken: 80, //80
    maxTaken: 500, //500
    minRelative: 16 //16
    maxRelative: 156, //156
}
*/

  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <Toggle isOn={isOn} setIsOn={setIsOn} />
    </div>
  );
}

export default UserFilters;
