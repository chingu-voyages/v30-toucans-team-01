import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Gallery from '../../components/gallery';
import './home.css';

function Home({sessions}) {
    console.log("Printing session..\n")
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            <Header/>
            <Menu/>
            <div className="gallery__container">
                {sessions.map((session, index) =>  <Gallery key={index} snapshots={session.snapshots}/>)}
            </div>
            
            <Footer/>
        </div>
    );
}

export default Home;