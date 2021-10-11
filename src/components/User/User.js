import React from 'react';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const User = () => {
    const {data} = React.useContext(UserContext);

    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={ <Feed user={data.id} /> } />
                <Route path="/estatisticas" element={ <UserStats /> } />
                <Route path="/postar" element={ <UserPhotoPost /> } />
            </Routes>
        </section>
    )
}

export default User;
