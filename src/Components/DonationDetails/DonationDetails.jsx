import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const donationItems = useLoaderData();
    // console.log(donationItems);
    const { id } = useParams();
    const donationItem = donationItems.find(item => item.id == id);
    console.log(donationItem);
    const {picture, text_color, price, title, description} = donationItem;

    return (
        <div className="mt-20">
            <div className="rounded relative">
                <img className="w-full rounded-xl md:h-[500px]" src={picture} alt="" />
                <div className="py-9 px-9 bg-[#0b0b0b80] rounded-br-xl rounded-bl-xl absolute bottom-0 w-full">
                    <button className="py-4 px-6 text-xl font-semibold text-white rounded" style={{backgroundColor: text_color}}>
                        Donate{price}
                    </button>
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-4xl font-bold mb-6">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;