import { Routes, Route } from "react-router-dom";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardMainContent />} />
      </Routes>
    </>
  );
};

export default App;
