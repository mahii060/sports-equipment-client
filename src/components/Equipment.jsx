
import React from 'react';

const Equipment = ({ equipment }) => {
    const { itemName, photo, price, rating } = equipment;
    return (
        <div className="max-w-xs hover:-translate-y-2 group transition-all  duration-200 ease-in-out hover:shadow-black hover:shadow-2xl rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={photo} alt="" className="object-cover  transition-all object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{itemName}</h2>
                    <div className='text-start space-y-2'>
                        <p className="text-gray-800">Rating: {rating}</p>
                        <p className="text-red-600 text-2xl font-bold">BDT {price}.00</p>
                    </div>
                </div>
                <button type="button" className=" w-full btn  group-hover:btn-error transition-all">View more</button>
            </div>
        </div>
    );
};

export default Equipment;