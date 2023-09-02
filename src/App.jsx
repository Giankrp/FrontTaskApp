import { Routes } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks.jsx";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import Register from "./components/Registrer/Registrer.jsx";

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="">
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
