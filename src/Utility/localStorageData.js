const getDonationData = () =>{
    const donatedData = localStorage.getItem('donated-data');
    if(donatedData){
        return JSON.parse(donatedData);
    }
    return [];
}

const setDonatedData = (id) =>{
    const donatedData = getDonationData();
    const exist = donatedData.find(dataId => dataId == id);
    if(!exist){
        donatedData.push(id);
        localStorage.setItem('donated-data', JSON.stringify(donatedData));
    }
}

export{getDonationData, setDonatedData};