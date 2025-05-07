import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';

const EquipmentDetails = () => {
    const { activeUser } = useContext(AuthContext)
    const loadedEquipment = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const { _id, itemName, photo, price, rating, description, category,
        deliveryTime, stockStatus, customization } = loadedEquipment;

    const handleAddToMyList = (email, loadedEquipment) => {
        const { _id, rest } = loadedEquipment;
        const usersEquipment = { email, equipmentId: _id, rest }

        fetch('http://localhost:5000/usersEquipments', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(usersEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged && data.insertedId) {
                    Swal.fire("Equipment added to list successfully!");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                Swal.fire("Failed to add equipment.");
            });
    }

    return (
        <div>
            <section className="bg-gray-100 text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div className="grid lg:grid-cols-12 gap-4 bg-gray-50 rounded overflow-hidden">

                        {/* IMAGE */}
                        <div className="lg:col-span-7 h-full">
                            <img
                                src={photo}
                                alt=""
                                className="object-cover w-full h-full max-h-[600px] bg-gray-500"
                            />
                        </div>

                        {/* DETAILS */}
                        <div className="p-6 text-left space-y-2 lg:col-span-5 bg-gradient-to-r from-pink-200 via-red-200 to-red-300 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl text-center font-semibold sm:text-4xl">{itemName}</h3>
                                <p className='badge badge-warning text-xl'>Price: BDT {price}.00</p>

                                {/* TABLE */}
                                <div className="overflow-x-auto my-4">
                                    <table className="table w-full text-left text-gray-800 border border-gray-300 rounded-lg overflow-hidden">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="p-3 bg-red-100 font-semibold">Category</th>
                                                <td className="p-3 bg-red-300">{category}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-3 bg-red-100 font-semibold">Customization</th>
                                                <td className="p-3 bg-red-300">{customization}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-3 bg-red-100 font-semibold">Rating</th>
                                                <td className="p-3 bg-red-300">
                                                    <span className="badge badge-success text-sm">{rating}⭐</span>
                                                </td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="p-3 bg-red-100 font-semibold">Delivery Time</th>
                                                <td className="p-3 bg-red-300">{deliveryTime} days</td>
                                            </tr>
                                            <tr>
                                                <th className="p-3 bg-red-100 font-semibold">Stock</th>
                                                <td className="p-3 bg-red-300 font-bold">
                                                    <span className={`${stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                                                        {stockStatus}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="text-justify font-semibold">{description}</p>
                            </div>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-center space-x-2">
                        <button onClick={() => handleAddToMyList(activeUser?.email, loadedEquipment)} type="button" className="btn btn-error">Add to My List</button>
                        <button type="button" className="btn btn-error">Buy Now</button>
                        <button onClick={handleGoBack} type="button" className="btn btn-error">Go Back</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EquipmentDetails;