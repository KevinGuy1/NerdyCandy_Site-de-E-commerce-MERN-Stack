import React from 'react';
import { useEffect, useState } from "react";
import Data from '../data.json';
import Card from "../components/Card";

const Boutique = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [products, setProducts] = useState([]);

    function getProducts() {
        setProducts(Data);
        if (products.length > 0) {
            setIsEmpty(false)
        }
    }

    useEffect(() => {
        getProducts();
    }, [products]);

    return (
        <>
            {isEmpty ? (
                <div className='pt-36'>
                    <p className='text-center'>Je suis la page d'accueil</p>
                    <p className='text-center'>Veuillez nous excuser, il n'y a pas encore de produits disponible sur le site</p>
                </div>
            ) : (
                <div className='w-full pt-36 flex flex-wrap justify-center'>
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            title={product.title}
                            subtitle={product.subtitle}
                            image={product.image}
                            prix={product.prix}
                            top={product.topProduct}
                        />))}
                </div>
            )}
        </>
    );
};

export default Boutique;