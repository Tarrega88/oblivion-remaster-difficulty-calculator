import TableDisplay from "./TableDisplay";
import Dropdown from "./ui/Dropdown";
import UserFilters from "./UserFilters";

function App() {
  return (
    <div className="bg-ironshade-800 text-ironshade-50 h-dvh w-dvw">
      {/* <Dropdown /> */}
      <UserFilters />
      <TableDisplay />
    </div>
  );
}

export default App;
