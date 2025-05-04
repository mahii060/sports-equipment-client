import { Link } from 'react-router-dom';

const Equipment = ({ equipment }) => {
    const { _id, itemName, photo, price, rating } = equipment;
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
                <Link to={`/equipments/${_id}`} type="button" className=" w-full btn  group-hover:btn-error transition-all">View Product</Link>
            </div>
        </div>
    );
};

export default Equipment;