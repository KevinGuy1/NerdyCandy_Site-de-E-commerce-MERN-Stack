import React from 'react';
import ExImage from "../images/ExempleImage.jpg";

const Footer = () => {
    return (
        <>
            <div className='bg-primary text-center drop-shadow-xl shadow-tertiary rounded'>
                <p className='py-5 text-3xl font-bold'>RETROUVEZ-NOUS SUR INSTAGRAM &#10084;</p>
                <div className='flex justify-between m-auto w-1/2 pb-5'>
                    <img className="h-52 w-52 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-52 w-52 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-52 w-52 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-52 w-52 object-cover" src={ExImage} alt="Exemple" />
                </div>
            </div>
            <div className='bg-secondary text-end flex flex-col justify-end h-64'>
                <p className='text-xl font-bold pr-8'>Réseaux Sociaux</p>
                <div>
                    <i class="fab fa-instagram text-3xl font-bold mb-8 pr-8"></i>
                    <i class="far fa-envelope text-3xl font-bold mb-8 mr-8 pr-8"></i>
                </div>
            </div>
        </>
    );
};

export default Footer;