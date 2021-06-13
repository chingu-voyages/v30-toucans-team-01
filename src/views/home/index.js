import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Gallery from '../../components/gallery';
import Progress from '../../components/progress'
import './home.css';

function Home({sessions, storageData}) {
    console.log("Printing session..\n")
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            <Header/>
            <Menu/>
            <Gallery/>   
            <Footer/>
            <Progress storageData={storageData}/>
        </div>
    );
}

export default Home;