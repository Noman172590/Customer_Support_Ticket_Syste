import  { use } from "react";
import { DateIcon } from "../../assets";

const sameClass="text-[#627382] text-base"
const Ticket = ({ data }) => {
  const overAllData = use(data);
  const singeData = overAllData.data;
  console.log(singeData);
  return (
    <div className="max-w-7xl mx-auto  py-20">
      <div className="grid grid-cols-[minmax(0,1fr)_358px] gap-8">
        <div>
          <p className="mb-4 text-[#34485A] font-semibold text-2xl">Customer Tickets</p>
          <div className="grid grid-cols-2 gap-6">
            {singeData.map((item) => (
              <div className="rounded-lg bg-white shadow-[10px_10px_12px_rgba(0,0,0,0.12)] p-2">
                <div className="flex justify-between">
                  <p className="text-[#001931] font-bold">
  {item.title}
</p>
                  <div className={`flex items-center gap-2 ${item.status==="Open"?"bg-[#B9F8CF]":"bg-[#F8F3B9]"} p-3 rounded-4xl`}>
                    <div className={`w-4 h-4 rounded-full  ${item.status==="Open"?"bg-[#02A53B]":"bg-[#FEBB0C]"}`}></div>
                    <div className="">
                    {item.status}
                     </div>
                    </div>
                </div>
                <p className={sameClass}>{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p className={sameClass}>#{item.id}</p>
                    <p className={`${item.status==="Open"?"text-[#F83044]":"text-[#FEBB0C]"}`}>{item.priority} PRIORITY</p>
                  </div>
                  <div className="flex gap-2">
                    <p className={sameClass}>{item.customer}</p>
                    <div className="flex gap-2 text-[#627382]">
                      <DateIcon />
                      {item.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <p className="mb-4 text-[#34485A] font-semibold text-2xl">Task Status</p>
            <p className={sameClass}>Select a ticket to add to Task Status</p>
            </div>
          <div className="mb-10">
            <p className="mb-4 text-[#34485A] font-semibold text-2xl">Resolved Task</p>
            <p className={sameClass}>No resolved tasks yet.</p>
            </div>
          
          </div>
      </div>
    </div>
  );
};

export default Ticket;
