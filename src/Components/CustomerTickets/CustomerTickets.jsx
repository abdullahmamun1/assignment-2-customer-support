import TicketCard from "../ticketCard/ticketCard";

const CustomerTickets = ({
  status,
  setStatus,
  setTasks,
  tasks,
  ticketsData,
}) => {
  return (
    <div className="mb-10">
      <h1 className="text-gray-500 text-3xl font-semibold mb-4">
        Customer Tickets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticketsData.map((ticket) => (
          <TicketCard
            key={ticket.id}
            status={status}
            setStatus={setStatus}
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
