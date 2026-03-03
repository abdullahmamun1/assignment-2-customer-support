import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import StatusDashboard from "./Components/StatusDashboard/StatusDashboard";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [status, setStatus] = useState("Open");
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <div className="root">
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <StatusDashboard ticketsPromise={ticketsPromise}></StatusDashboard>
      </Suspense>

      <Footer></Footer>
    </div>
  );
}

export default App;
