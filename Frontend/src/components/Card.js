import React from 'react';

const Card = ({ key, title, subtitle, image, prix, top }) => {
    return (
        <div className=' relative w-64 mx-5 my-5 bg-primary rounded-3xl hover:scale-105 drop-shadow-lg shadow-tertiary'>
            <img className='object-cover w-64 h-64' src={image} alt={title} />
            {top ? (<i class="fas fa-fire absolute top-5 right-6 text-4xl font-bold text-red"></i>) : null}
            <div className='relative py-4'>
                <h2 className='pl-1 text-lg font-bold'>{title}</h2>
                <h3 className='pl-1 text-md '>{subtitle}</h3>
                <div className='absolute bottom-0 left-10 w-2/3 h-px bg-black' />
            </div>
            <p className='pl-1 text-md py-4'>À partir de <b>{prix} €</b></p>
            <button className=' h-16 w-4/5 mx-auto mb-4 p-2 flex justify-center items-center rounded-full text-white bg-tertiary'>
                AJOUTER AU PANIER
            </button>
        </div>
    );
};

export default Card;