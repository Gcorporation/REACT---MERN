import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl:'https://images.adsttc.com/media/images/5841/5a74/e58e/ce8f/db00/01f1/newsletter/Empire_State_Building_15_Dec_2005.jpg?1480677994',
        address:'20 W 34th St, New York, NY 10001, United States',
        location: {
            lat: 2.0951298,
            lng: -85.4154899
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'India Gate',
        description: 'One of the most famous places in India',
        imageUrl:'https://www.holidify.com/images/cmsuploads/compressed/5621259188_e74d63cb05_b_20180302140149.jpg',
        address:'Rajpath, India Gate, New Delhi, Delhi 110001',
        location: {
            lat: 28.6258187,
            lng: 77.0905562
        },
        creator: 'u2'
    }
];

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadPlaces = DUMMY_PLACES.filter((item) => item.creator === userId);
    return <PlaceList items={loadPlaces} />
};

export default UserPlaces;