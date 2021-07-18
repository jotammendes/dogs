import React from 'react';
import UserHeader from './UserHeader';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';

const User = () => {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={ <Feed /> } />
                <Route path="/estatisticas" element={ <UserStats /> } />
                <Route path="/postar" element={ <UserPhotoPost /> } />
            </Routes>
        </section>
    )
}

export default User;
