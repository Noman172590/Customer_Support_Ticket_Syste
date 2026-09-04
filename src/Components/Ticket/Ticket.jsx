import React, { use } from 'react';

const Ticket = ({data}) => {
   const overAllData=use(data)
   const singeData=overAllData.data
   console.log(singeData);
    return (
        <div className='max-w-7xl mx-auto border py-20'>
            <dinov className='grid grid-cols-[minmax(0,1fr)_358px]'>
                <div className='border'>
                    Customer Tickets
                </div>
                <div className='border'>Status</div>
            </dinov>
        </div>
    );
};

export default Ticket;