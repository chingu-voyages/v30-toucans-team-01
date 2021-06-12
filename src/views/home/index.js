import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Gallery from '../../components/gallery';
import './home.css';

function Home() {  
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            <Header/>
            <Menu/>
            <Gallery/>   
            <Footer/>
        </div>
    );
}

export default Home;