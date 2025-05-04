import React from 'react';
import Banner from '../components/Banner';
import Delivery from '../components/Delivery';
import { useLoaderData } from 'react-router-dom';
import Equipments from '../components/Equipments';

const Home = () => {
    const loadedEquipments = useLoaderData()
    return (
        <div>
            <Banner />
            <Delivery />
            <Equipments loadedEquipments={loadedEquipments} />
        </div>
    );
};

export default Home;