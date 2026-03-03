import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import StatusDashboard from "./Components/StatusDashboard/StatusDashboard";

function App() {
  return (
    <div className="root">
      <Navbar></Navbar>
      <Banner></Banner>
      <StatusDashboard></StatusDashboard>
    </div>
  );
}

export default App;
