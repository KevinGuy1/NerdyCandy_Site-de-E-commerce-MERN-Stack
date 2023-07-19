import React from 'react';
import ExImage from "../images/ExempleImage.jpg";

const Footer = () => {
    return (
        <>
            <div className='bg-primary text-center'>
                <p>RETROUVEZ-NOUS SUR INSTAGRAM + COEUR</p>
                <div className='flex justify-between m-auto w-1/2'>
                    <img className="h-32 w-32 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-32 w-32 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-32 w-32 object-cover" src={ExImage} alt="Exemple" />
                    <img className="h-32 w-32 object-cover" src={ExImage} alt="Exemple" />
                </div>
            </div>
            <div className='bg-secondary text-end'>
                <p>Nos réseaux</p>
                <p>ici mettre les 2 logos </p>
            </div>
        </>
    );
};

export default Footer;