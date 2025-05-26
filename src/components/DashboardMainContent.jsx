import Header from "./Header";
import LeftDashBoard from "./LeftDashBoard";
import RightDashBoard from "./RightDashBoard";
import Sidebar from "./Sidebar";
const DashboardMainContent = () => {
  return <div className="main-container">
  <Header/>
  <main >
    <Sidebar/>
    <div className="main-dashboard">
      <LeftDashBoard/>
      <RightDashBoard/>
    </div>
  </main>
  </div>;
};

export default DashboardMainContent;
