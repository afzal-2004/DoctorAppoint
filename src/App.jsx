import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { SearchExercies } from "./Components/SearchExercies";

function App() {
  return (
    <>
      <div
        className=" sm:flex md:flex-row 
      w-full justify-between "
      >
        <div className="p-10 sm:w-[70%]">
          <Navbar />
          <Home />
        </div>
        <div className=" sm:flex hidden">
          <img
            src="/BodyBuilder.jpeg"
            alt=""
            className=" rounded   rounded-bl-[100px]"
          />
        </div>
      </div>
      <SearchExercies />
    </>
  );
}

export default App;
