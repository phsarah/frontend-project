import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react';
import NavBar from '../../components/navbar/Navbar'
import GlobalStateContext from '../../global/GlobalStateContext'
import BASE_URL from '../../constants/url'
import './styles.css';

function HomePage() {
    const [image, setImage] = useState([])
    const { states, setters, requests } = useContext(GlobalStateContext)
    
    useEffect(()=> {
        requests.getUser()
        getImages()
    }, [])
    
    const getImages = () => {
        axios.get(`${BASE_URL}/image/feed`)
        .then((res) => {
            setImage(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="home">
            <div className="container-header-grid">
                {window.localStorage.getItem("token") ? <NavBar color={"transparent"} title={'Home-Logged'} /> : <NavBar color={"transparent"} title={'Home'} />}
                <div className="container-grid-home">
                    <section className="container-section-home">   
                        <h1 className="title">{states.user.name && <h1>Oi, {states.user.name}</h1>}</h1>
                        <input className="search"  variant="filled" placeholder="Buscar imagens" />
                    </section>
               </div>
            </div>
            <div className="container-images">
                <div className="item-images">
                    {image.map(function(image){
                        return <img className="exemple" src={image.file}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage