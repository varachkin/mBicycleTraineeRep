import React from 'react';
import './App.css';
import Header from "./modules/Header/Header";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from "./modules/Main/Main";
import About from "./modules/About/About";
import Contacts from "./modules/Contacts/Contacts";
import Favourite from "./modules/Favourite/Favourite";
import Footer from "./modules/Footer/Footer";
import LoginPage from "./modules/LoginPage/LoginPage";


function App() {
    return (
        <BrowserRouter>
            <div className="body">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/favourite" element={<Favourite/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
