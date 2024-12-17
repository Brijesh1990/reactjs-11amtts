import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Feedback from "./components/pages/Feedback";
import Contact from "./components/pages/Contact";
import Register from "./components/pages/Register";
import PageNotFound from "./components/pages/PageNotFound";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/our-services" element={<Services />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/create-account" element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    </StrictMode>
)