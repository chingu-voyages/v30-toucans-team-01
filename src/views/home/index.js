import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Gallery from '../../components/gallery';
import {HomeModal} from '../../components/modal'
import './home.css';

function Home({sessions, storageData}) {
    console.log("Printing session..\n")
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            <HomeModal/>
            <Header/>
            <Menu/>
            <Gallery/>   
            <Footer storageData={storageData}/>
        </div>
    );
}

export default Home;