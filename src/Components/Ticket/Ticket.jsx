import React, { use } from "react";
import { DateIcon } from "../../assets";

const Ticket = ({ data }) => {
  const overAllData = use(data);
  const singeData = overAllData.data;
  console.log(singeData);
  return (
    <div className="max-w-7xl mx-auto border py-20">
      <div className="grid grid-cols-[minmax(0,1fr)_358px]">
        <div className="border">
          <p>Customer Tickets</p>
          <div className="grid grid-cols-2 gap-6">
            {singeData.map((item) => (
              <div className="border p-2">
                <div className="flex justify-between">
                  <p className="text-[#001931] font-bold">
  {item.title}
</p>
                  <p>{item.status}</p>
                </div>
                <p>{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p>#{item.id}</p>
                    <p>{item.priority} PRIORITY</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.customer}</p>
                    <div className="flex gap-2 ">
                      <DateIcon />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border">Status</div>
      </div>
    </div>
  );
};

export default Ticket;
