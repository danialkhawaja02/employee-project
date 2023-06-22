import AddComponent from "./components/AddComponent";
import Header from "./components/Header";
import CurrentComponent from "./components/CurrentComponent";
import { useState } from "react";

function App() {
  const [employees, updateEmployee] = useState([]);

  const addemployee = (payload) => {
    const employeeArray = [...employees];
    employeeArray.push(payload);
    updateEmployee(employeeArray);
  };
  return (
    <div>
      <Header />
      <AddComponent addEmployee={addemployee} />
      <CurrentComponent updateemployee={employees} />
    </div>
  );
}

export default App;
