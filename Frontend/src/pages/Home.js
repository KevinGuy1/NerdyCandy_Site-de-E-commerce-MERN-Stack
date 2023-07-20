import React from 'react';
import { useEffect, useState } from "react";
import Data from '../data.json';
import Card from "../components/Card";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [matchingTopProducts, setMatchingTopProducts] = useState([]);

    function getProducts() {
        setProducts(Data);
        const filteredProducts = products.filter(product => product.topProduct === true)
        setMatchingTopProducts(filteredProducts);
        console.log(matchingTopProducts)
    }

    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        <>
            <div className='pt-36 flex flex-wrap justify-center'>
                {matchingTopProducts.map((matchingTopProduct, index) => (
                    <Card
                        key={index}
                        title={matchingTopProduct.title}
                        subtitle={matchingTopProduct.subtitle}
                        image={matchingTopProduct.image}
                        prix={matchingTopProduct.prix}
                        top={matchingTopProduct.topProduct}
                    />))}
            </div>
        </>
    );
};

export default Home;