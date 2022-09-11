import {useState, useEffect} from "react";
const apiURL = 'https://fakestoreapi.com/products';

const getStoreData = async() => {
const endpoint = apiURL;
const response = await fetch(endpoint);
const data = await response.json();
const [productData] = data
console.log(data);
console.log(data[2].title);
console.log(productData);
return productData;


}

getStoreData();

export {getStoreData};