import React from 'react';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, picture_2, title, category_bg, category, card_bg, text_color, price } = donation;
    return (
        <div>
            <div className="flex flex-row items-center rounded-md" style={{backgroundColor: card_bg}}>
                <figure><img src={picture_2} alt="Movie" /></figure>
                <div className="ml-6">
                    <button className='text-sm font-medium py-1 px-3 bg rounded' style={{ backgroundColor: category_bg, color: text_color }}>{category}</button>
                    <h2 className='text-xl font-semibold mt-2'>{title}</h2>
                    <p className='font-semibold mb-5 mt-2' style={{ color: text_color }}>{price}</p>
    
                    <Link to={`/data/${id}`}>
                        <button className="px-4 py-1 text-lg font-semibold text-white rounded" style={{ backgroundColor: text_color }}>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;