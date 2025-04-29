import TableDisplay from "./TableDisplay";
import Dropdown from "./ui/Dropdown";
import UserFilters from "./UserFilters";

function App() {
  return (
    <div className="bg-ironshade-800 h-dvh w-dvw text-ironshade-50">
      {/* <Dropdown /> */}
      <UserFilters />
      <TableDisplay />
    </div>
  );
}

export default App;
