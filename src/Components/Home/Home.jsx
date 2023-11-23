import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';

const Home = () => {
    const donationItems = useLoaderData();
    console.log(donationItems.length);
    return (
        <div>
            <div className="hero h-[600px] " style={{ backgroundImage: 'url(/public/images/banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-24'>
                {
                    donationItems.map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                }
            </div>
        </div>

    );
};

export default Home;