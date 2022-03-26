import React from 'react';
import UsersList from '../components/UsersList';
import image from '../../Assets/7468.jpg'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Gagan',
            image: image,
            places: 3
        }
    ];

    return <UsersList items={USERS} />
};

export default Users;