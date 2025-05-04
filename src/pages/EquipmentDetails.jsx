import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EquipmentDetails = () => {
    const loadedEquipment = useLoaderData()
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(loadedEquipment);
    const { itemName, photo, price, rating, description, category,
        deliveryTime, stockStatus, customization } = loadedEquipment;

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
                        <button type="button" className="btn btn-error">Add to My List</button>
                        <button type="button" className="btn btn-error">Buy Now</button>
                        <button onClick={handleGoBack} type="button" className="btn btn-error">Go Back</button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EquipmentDetails;

/*
<div className="p-6 text-left space-y-4 lg:col-span-5 bg-gradient-to-r from-pink-100 via-red-100 to-red-200 rounded-xl shadow-lg">
  <h3 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">{itemName}</h3>

  <div className="flex items-center justify-between">
    <span className="badge badge-warning text-lg px-4 py-2">BDT {price}.00</span>
    <span className="badge badge-success text-sm">Rating: {rating}⭐</span>
  </div>

  <div className="grid grid-cols-2 gap-3 text-gray-700 mt-4">
    <p><span className="font-semibold">Category:</span> {category}</p>
    <p><span className="font-semibold">Customization:</span> {customization}</p>
    <p><span className="font-semibold">Delivery Time:</span> {deliveryTime} days</p>
    <p>
      <span className="font-semibold">Stock:</span>
      <span className={`ml-2 font-bold ${stockStatus === "In Stock" ? "text-green-600" : "text-red-600"}`}>
        {stockStatus}
      </span>
    </p>
  </div>

  <div className="pt-4">
    <h4 className="text-lg font-semibold mb-2 text-gray-900">Description:</h4>
    <p className="text-justify text-gray-800 leading-relaxed">{description}</p>
  </div>
</div>


*/