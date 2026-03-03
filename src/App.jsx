import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import StatusDashboard from "./Components/StatusDashboard/StatusDashboard";

function App() {
  return (
    <div className="root">
      <Navbar></Navbar>
      <Banner></Banner>
      <StatusDashboard></StatusDashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
