import { AuthContext } from '../providers/AuthContext';
import Swal from 'sweetalert2';

const AddEquipment = () => {

    const handleAddEquipment = event => {
        event.preventDefault();
        const form = event.target;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const deliveryTime = form.deliveryTime.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const equipmentDetails = { itemName, category, price, rating, deliveryTime, customization, stockStatus, photo, description }

        fetch("http://localhost:5000/equipments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(equipmentDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(`${itemName} added successfully!`);
                    form.reset()
                }
                console.log(data);
            })
        // console.log(equipmentDetails);
    }
    return (
        <section className="p-6 bg-gray-50 text-gray-900">
            <form onSubmit={handleAddEquipment} className="container flex flex-col mx-auto space-y-12">
                <fieldset className=" p-6 rounded-md shadow-sm bg-gray-300">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-left">
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="itemName" className="text-sm">Item Name</label>
                            <input required id="itemName" name="itemName" type="text" placeholder="Item Name" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Category Name</label>
                            <select defaultValue="Pick a Category" name='category' className="select w-full">
                                <option disabled={true}>Pick a category</option>
                                <option>Football</option>
                                <option>Fitness</option>
                                <option>Cycling</option>
                                <option>MMA</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input required id="price" name='price' type="text" placeholder="e.g.120" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="rating" className="text-sm">Rating</label>
                            <input required id="rating" name='rating' type="text" placeholder="4.5" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="deliveryTime" className="text-sm">{"Delivery Time (Processing Time)"} </label>
                            <input required id="deliveryTime" name='deliveryTime' type="text" placeholder="3" defaultValue="3" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="customization" className="text-sm">Customization</label>
                            <input required id="customization" name='customization' type="text" placeholder="Customization (bat with extra paper)" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="stockStatus" className="text-sm">Stock Status</label>
                            <input required id="stockStatus" name='stockStatus' type="text" placeholder="e.g. 3" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="photo" className="text-sm">Phono link</label>
                            <input required id="photo" name='photo' type="url" placeholder="https://example.com/football.jpg" className="w-full p-2 h-10 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-indigo-600 border-gray-300" />
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