import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sim from "./pages/Sim";
import Learn from "./pages/Learn";

function App() {
    
    return (
        
        <Router>
            <Routes>
                <Route path="/creditscoresim/" element={<Home />} />
                <Route path="/creditscoresim/learn" element={<Learn />} />
                <Route path="/creditscoresim/sim" element={<Sim />} />
            </Routes>
        </Router>
        
    );
    
}

export default App;