import React from 'react';
import Equipment from './Equipment';
import { Link } from 'react-router-dom';

const Equipments = ({ loadedEquipments }) => {
    console.log(loadedEquipments);
    return (
        <div>
            <div className='my-14 space-y-3 bg-gray-200 md:p-6 rounded-3xl'>
                <h2 className="text-5xl text-red-700 font-bold tracking-wider font-sans">Buy Sports Gear</h2>
                <p className='text-gray-950 text-xl font-semibold'>Learn the game from any part of the country and stay fit</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    loadedEquipments.map(equipment => <Equipment equipment={equipment} key={equipment._id}></Equipment>)
                }
            </div>
            <div className='my-10'>
                <Link to="/" className='btn btn-error btn-xl'>Show All</Link>
            </div>
        </div>
    );
};

export default Equipments;