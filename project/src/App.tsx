import React from 'react';
import './App.css';
import Header from "./modules/Header/Header";
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Main from "./modules/Main/Main";
import About from "./modules/About/About";
import Temp from "./modules/Temp/Temp";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}/>

                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
