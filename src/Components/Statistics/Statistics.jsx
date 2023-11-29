import React from 'react';
import CustomPieChart from '../CustomPieChart/CustomPieChart'

const Statistics = () => {
    return (
        <div style={{ height: '500px' }}>
            <CustomPieChart></CustomPieChart>
            <div className='flex justify-center gap-10'>
                <div className='flex items-center gap-3'>
                    <p>Your Donation</p>
                    <span className='w-24 h-3 bg-[#00C49F] rounded-sm'></span>
                </div>
                <div className='flex items-center gap-3'>
                    <p>Total Donation</p>
                    <span className='w-24 h-3 bg-[#FF444A] rounded-sm'></span>
                </div>
            </div>
        </div>
    );
};

export default Statistics;

