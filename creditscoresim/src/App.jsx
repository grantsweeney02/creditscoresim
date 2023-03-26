import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sim from "./pages/Sim";
import Learn from "./pages/Learn";

function App() {
    
    return (
        
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/sim" element={<Sim />} />
            </Routes>
        </Router>
        
    );
    
}

export default App;