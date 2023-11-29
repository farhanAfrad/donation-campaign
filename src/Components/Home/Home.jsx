import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';


const Home = () => {
    const donationItems = useLoaderData();
    
    const [searchValue , setSearchValue] = useState('');

    const [flag, setFlag] = useState(false);
    
    
    
    console.log(donationItems);
    const handleSubmit = e =>{
        e.preventDefault();
        const searchedValue = e.target.search.value;
        setSearchValue(searchedValue);
        if(searchedValue === 'Education' || searchedValue === 'Food' || searchedValue === 'Health'){
            setFlag(true);
        }
        else{setFlag(false)}
        
    }

    const results = donationItems.filter(item => item.category == searchValue);
    console.log(results);
  
  
    
    return (
        <div>
            <div className="hero h-[600px]" style={{ backgroundImage: 'url(/images/banner.png)' }}>
                <div className="hero-overlay bg-[#fffffff2]"></div>
                <div className="hero-content text-center flex-col">
                    <h2 className='text-5xl font-bold mb-10'>I Grow By Helping People In Need</h2>
                    <div className="max-w-md">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input className='border md:border-r-0 border-[#DEDEDE] p-2 md:p-4 w-[300px] md:rounded-s-lg' type="text" name="search" id="" placeholder='search here...' />
                                <button className='bg-[#FF444A] text-white p-2 md:py-4 md:px-7 md:rounded-e-lg'>Search</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24'>
                {
                    // donationItems.filter(item => item.category === searchValue).map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                     flag ? results.map(item => <ItemCard key={item.id} item={item}></ItemCard>) : donationItems.map(item => <ItemCard key={item.id} item={item}></ItemCard>)  
                    
                }
            </div>
        </div>

    );
};

export default Home;