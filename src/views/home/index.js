import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Thumbnail from '../../components/thumbnail';
import './home.css';

function Home({sessions}) {
    console.log("Printing session..\n")
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            <Header/>
            <Menu/>
            <Thumbnail sessions={sessions}/>   
            <Footer/>
        </div>
    );
}

export default Home;