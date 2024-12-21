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
// BrowserRouter :This is used to Route a page in browser and work as parent of react-router-dom
// Router :This is used to Route a page in browser and work as parent of react-router-dom or this is a alias of BrowserRouter
// Routes :Routes is a child of Router it is used to Routes a multiple pages via Route
// Route :Route is multiple it is used to load a multiple pages 
// Path :Path is a attributes of Route and it is locate you on page or it is redirect on page via routing name 
// Element :Element is also attributes of Route and it is locate you on React components.

// *  :* is a module of react router dom and it is used to search all pages or routing if page not found it generate 404 error.
// Link : Link is just like used of <a href=""></a>  or <Link to=""></Link>
// useNavigate: useNavigate is redirect one page to another

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