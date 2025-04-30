import ModVersionFilters from "./ModVersionFilters";
import TableDisplay from "./TableDisplay";
import TitleSection from "./ui/TitleSection";
import UserFilters from "./UserFilters";

function App() {
  return (
    <div className="bg-ironshade-800 text-ironshade-50 h-dvh w-dvw overflow-auto">
      <TitleSection />
      <ModVersionFilters />
      <UserFilters />
      <TableDisplay />
    </div>
  );
}

export default App;
