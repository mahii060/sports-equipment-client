import React from 'react';
import Banner from '../components/Banner';
import Delivery from '../components/Delivery';
import { Link, useLoaderData } from 'react-router-dom';
import Equipments from '../components/Equipments';

const Home = () => {
    const loadedEquipments = useLoaderData()
    return (
        <div>
            <Banner />
            <Delivery />
            <div>
                <Equipments loadedEquipments={loadedEquipments} />
                <div className='my-10'>
                    <Link to="/allEquipments" className='btn btn-error btn-xl'>Show All Equipments</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;