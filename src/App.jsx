import About from "./About";
import ModVersionFilters from "./ModVersionFilters";
import TableDisplay from "./TableDisplay";
import TitleSection from "./ui/TitleSection";
import UserFilters from "./UserFilters";
import Guide from "./guide/Guide";

function App() {
  return (
    <div className="bg-ironshade-800 text-ironshade-50 overflow-auto sm:h-dvh sm:w-dvw">
      <TitleSection />
      <About />
      <Guide />
      <ModVersionFilters />
      <UserFilters />
      <TableDisplay />
    </div>
  );
}

export default App;
