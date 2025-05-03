import React from 'react';

const AddEquipment = () => {
    return (
        <section className="p-6 bg-gray-50 text-gray-900">
            <form className="container flex flex-col mx-auto space-y-12">
                <fieldset className=" p-6 rounded-md shadow-sm bg-gray-300">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-left">
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="itemName" className="text-sm">Item Name</label>
                            <input id="itemName" name="itemName" type="text" placeholder="Item Name" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Category Name</label>
                            <select defaultValue="Pick a Category" className="select w-full">
                                <option disabled={true}>Pick a category</option>
                                <option>Football</option>
                                <option>Fitness</option>
                                <option>Cycling</option>
                                <option>MMA</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input id="price" name='price' type="text" placeholder="e.g.120" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="rating" className="text-sm">Rating</label>
                            <input id="rating" name='rating' type="text" placeholder="4.5" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="deliveryTime" className="text-sm">{"Delivery Time (Processing Time)"} </label>
                            <input id="deliveryTime" name='deliveryTime' type="text" placeholder="3" defaultValue="3" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="customization" className="text-sm">Customization</label>
                            <input id="customization" name='customization' type="text" placeholder="Customization (bat with extra paper)" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="stockStatus" className="text-sm">Stock Status</label>
                            <input id="stockStatus" name='stockStatus' type="text" placeholder="e.g. 3" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="userName" className="text-sm">User name</label>
                            <input id="userName" name='userName' type="text" placeholder="User Name" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="email" className="text-sm">User Email</label>
                            <input id="email" name='userEmail' type="email" placeholder="example@man.com" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="photo" className="text-sm">Phono link</label>
                            <input id="photo" name='photo' type="url" placeholder="https://example.com/football.jpg" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">Description</label>
                            <textarea id="description" name='description' type="text" placeholder="Description" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className='col-span-full'>
                            <button type='submit' className='w-full btn btn-lg bg-red-600 hover:bg-red-700 text-gray-50'>Add Product</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddEquipment;