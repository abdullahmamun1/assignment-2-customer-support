import TicketCard from "../TicketCard/TicketCard";

const CustomerTickets = ({ tickets, setTickets, setTasks, tasks }) => {
  return (
    <div className="mb-10">
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">
        Customer Tickets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            tickets={tickets}
            setTickets={setTickets}
            setTasks={setTasks}
            tasks={tasks}
            ticket={ticket}
          ></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
