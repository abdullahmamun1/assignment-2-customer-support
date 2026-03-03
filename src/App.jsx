import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import StatusDashboard from "./Components/StatusDashboard/StatusDashboard";
import { ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [tasks, setTasks] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <div className="root">
      <Navbar></Navbar>
      <Banner tasks={tasks} resolved={resolved}></Banner>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <StatusDashboard
          tasks={tasks}
          setTasks={setTasks}
          resolved={resolved}
          setResolved={setResolved}
          ticketsPromise={ticketsPromise}
        ></StatusDashboard>
      </Suspense>
      <ToastContainer />

      <Footer></Footer>
    </div>
  );
}

export default App;
