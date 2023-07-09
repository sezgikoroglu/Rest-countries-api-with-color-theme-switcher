import Router from "./router/Router";
import { useSelector } from "react-redux";

function App() {

  const theme=useSelector((state) => state.countries.theme)

  return (
    <div className={theme === "dark" ? "app app--dark" : "app"}>
        <Router/>
    </div>
    
  );
}

export default App;
