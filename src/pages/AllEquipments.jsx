import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Equipments from '../components/Equipments';

const AllEquipments = () => {
    const loadedEquipments = useLoaderData()
    return (
        <div>
            <Equipments loadedEquipments={loadedEquipments} />
        </div>
    );
};

export default AllEquipments;