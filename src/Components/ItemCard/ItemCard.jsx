import React from 'react';
import { Link } from 'react-router-dom';
const ItemCard = ({ item }) => {
    const {id, picture, title, category_bg, category, card_bg, text_color, button_bg } = item;

    return (
        <div>
            <Link to={`/data/${id}`}>
                <div className="card card-compact bg-base-100 rounded-md" style={{ backgroundColor: category_bg }}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="p-4">
                        <button className='text-sm font-medium py-1 px-3 bg rounded' style={{ backgroundColor: button_bg, color: text_color }}>{category}</button>
                        <h2 className='text-xl font-semibold' style={{ color: text_color }}>{title}</h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default ItemCard;