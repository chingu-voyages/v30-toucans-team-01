import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Menu from '../../components/menu';
import Gallery from '../../components/gallery';
import {ModalTwo} from '../../components/modal';
import './home.css';

function Home() {  
    const [modal , setModal] = React.useState(true);

    React.useEffect(async () => {
        await navigator.storage.persist().then(
            () => {setModal(false)}
            , () => {setModal(true)})
      },[])
    return (
        <div className="Home">
            {/* TODO: HOME VIEW */}
            {modal && <ModalTwo/>}
            <Header/>
            <Menu/>
            <Gallery/>   
            <Footer/>
        </div>
    );
}

export default Home;