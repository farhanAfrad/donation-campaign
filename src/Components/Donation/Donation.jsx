import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDonationData } from '../../Utility/localStorageData';
import DonationCard from '../DonationCard/DonationCard';

const Donation = () => {
    const donationItem = useLoaderData();
    const donatedData = getDonationData();
    const donations = donationItem.filter( item => donatedData.find(data => item.id == data) );

    console.log(donations);
    let flag = '';

    const [donatedItemLength, setDonatedItemLenght] = useState(4);
    if(donations.length <= 4 || donatedItemLength === donations.length){
        flag = 'hidden';
    }
    else{
        flag = '';
    }

    // donatedItemLength === donations.length ? 'hidden': donatedItemLength === 4 ? 'hidden' : ''

    return (
        <div>
            <div className='grid grid-cols-2 gap-6 mt-20'>
                {
                    donations.slice(0,donatedItemLength).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
            <div className={`mt-10 text-center ${flag}`}>
                <button onClick={()=>setDonatedItemLenght(donations.length)} className='py-3 px-6 rounded-lg bg-green-600 text-white font-semibold'>See All</button>
            </div>
        </div>
    );
};

export default Donation;