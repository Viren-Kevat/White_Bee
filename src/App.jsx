import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/header.jsx';
// import Footer from './components/footer.jsx';
// import Home from './components/home.jsx';
// import About from './components/about.jsx';
// import Services from './components/service.jsx';
import {Header,Footer,Home,AboutUs,Services,ContactUs,SignIn,ScrollToTop} from "./component"
import './App.css';

function App() {
    return (
        <Router>
          <ScrollToTop/>
                <Header />
                
                    <Routes>
                        <Route path="/" element={<><Home /><Footer /></>} />
                        <Route path="/about" element={<><AboutUs /><Footer /></>} />
                        <Route path="/services" element={<><Services /><Footer /></>} />
                        <Route path="/contactus" element={<><ContactUs/><Footer /></>}/>
                        <Route path="/signin" element={<><SignIn/><Footer /></>}/>
                    </Routes>
    
                
           
        </Router>
    );
}

export default App;
