import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Photo from './components/Photo/Photo';
import Login from './components/Login/Login';
import { UserStorage } from './UserContext';
import User from './components/User/User';
import ProtectedRoute from './components/Helper/ProtectedRoute';

function App() {
    return <div>
        <BrowserRouter>
            <UserStorage>
                <Header />

                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/login/*" element={ <Login /> } />
                        <ProtectedRoute path="/conta/*" element={ <User /> } />
                        <ProtectedRoute path="/foto/:id" element={ <Photo /> } />
                    </Routes>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    </div>;
}

export default App;
