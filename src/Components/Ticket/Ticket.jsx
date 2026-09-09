import { use, useEffect, useState } from "react";
import { CorrectICon, DateIcon } from "../../assets";
import Swal from "sweetalert2";

const sameClass = "text-[#627382] text-xs md:text-base";

const priorityColor = {
  HIGH: "text-[#F83044]",
  MEDIUM: "text-[#FEBB0C]",
  LOW: "text-green-500",
};

const Ticket = ({ data, setProgress, setResolved }) => {
  const overAllData = use(data);
  const singeData = overAllData.data;
  // Customer Tickets
  const [customerTickets, setCustomerTickets] = useState(singeData);
  // In-Progress Tickets
  const [ticketStatusData, setTicketStatusData] = useState([]);
  // Resolved Tickets
  const [ticketSolvedStatus, setTicketSolvedStatus] = useState([]);
  // Add ticket to In-Progress
  const clickData = (item) => {
    // Check if ticket is already in progress
    const alreadyExists = ticketStatusData.some(
      (ticket) => ticket.id === item.id,
    );
    if (alreadyExists) {
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      width: 300,
      title: "In-progress",
      showConfirmButton: false,
      timer: 1000,
    });

    setTicketStatusData((prev) => [...prev, item]);
  };

  // Complete button
  const resolvedButton = (item) => {
    // Remove from In-Progress
    setTicketStatusData((prev) =>
      prev.filter((ticket) => ticket.id !== item.id),
    );
    Swal.fire({
      position: "center",
      icon: "success",
      width: 300,
      title: "Complete",
      showConfirmButton: false,
      timer: 1000,
    });
    // Remove from Customer Tickets
    setCustomerTickets((prev) =>
      prev.filter((ticket) => ticket.id !== item.id),
    );

    // Add to Resolved
    setTicketSolvedStatus((prev) => [...prev, item]);
  };

  // Update In-Progress count
  useEffect(() => {
    setProgress(ticketStatusData.length);
  }, [ticketStatusData, setProgress]);

  // Update Resolved count
  useEffect(() => {
    setResolved(ticketSolvedStatus.length);
  }, [ticketSolvedStatus, setResolved]);

  return (
    <div className="max-w-7xl mx-auto px-2 md:py-20">
      <div className="grid md:grid-cols-[minmax(0,1fr)_358px] gap-8">
        {/* Customer Tickets */}
        <div>
          <p className="mb-4 text-[#34485A] font-semibold text-2xl">
            Customer Tickets
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {customerTickets.map((item) => (
              <div
                key={item.id}
                onClick={() => clickData(item)}
                className="rounded-lg bg-white shadow-[10px_10px_12px_rgba(0,0,0,0.12)] p-2 cursor-pointer"
              >
                <div className="flex justify-between">
                  <p className="text-[#001931] font-bold">{item.title}</p>

                  <div
                    className={`flex items-center gap-2 ${
                      item.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"
                    } p-3 rounded-4xl`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full ${
                        item.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
                      }`}
                    ></div>

                    <div className="text-xs md:text-base">{item.status}</div>
                  </div>
                </div>

                <p className={sameClass}>{item.description}</p>

                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p className={sameClass}>#{item.id}</p>

                    <p className={`${priorityColor[item.priority]} text-xs md:text-base`}>
                      {item.priority} PRIORITY
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <p className={sameClass}>{item.customer}</p>

                    <div className="flex gap-2 text-[#627382] text-xs md:text-base">
                      <DateIcon />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* Task Status */}
          <div className="mb-10">
            <p className="mb-4 text-[#34485A] font-semibold text-2xl">
              Task Status
            </p>

            <p className={sameClass}>Select a ticket to add to Task Status</p>

            {ticketStatusData.map((item) => (
              <div key={item.id} className="shadow-2xl mt-10">
                <p>{item.title}</p>

                <button
                  onClick={() => resolvedButton(item)}
                  className="cursor-pointer w-full p-2 rounded bg-[#02A53B] text-white mt-2"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* Resolved Task */}
          <div className="mb-10">
            <p className="mb-4 text-[#34485A] font-semibold text-2xl">
              Resolved Task
            </p>

            <p className={sameClass}>
              {ticketSolvedStatus.length === 0 ? "No resolved tasks yet." : ""}
            </p>

            {ticketSolvedStatus.map((item) => (
              <div key={item.id} className="shadow-2xl mt-10 p-2">
                <p>{item.title}</p>
                <p className="flex items-center gap-1 mt-2 text-green-400"><CorrectICon/>Complete</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
