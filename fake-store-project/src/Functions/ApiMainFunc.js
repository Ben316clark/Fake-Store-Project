const apiURL = 'https://fakestoreapi.com/products';

const getStoreData = async() => {
const endpoint = apiURL;
const response = await fetch(endpoint);
const data = await response.json();
console.log(data);
return data;
};

getStoreData();

export {getStoreData};