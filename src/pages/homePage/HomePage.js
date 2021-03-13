import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react';
import useForm from '../../hooks/useForm'
import NavBar from '../../components/navbar/Navbar'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Button } from "@chakra-ui/react"
import BASE_URL from '../../constants/url'
import './styles.css';

function HomePage() {
    const [image, setImage] = useState([])
    const [create, setCreate] = useState({})
    const [selectCollection , setSelectCollection ] = useState("")

    const { states, setters, requests } = useContext(GlobalStateContext)
    
    const [form, onChange] = useForm({
        subtitle: "",
        url: ""
    })

    useEffect(()=> {
        requests.getUser()
        getImages()
        requests.getCollection()
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

    const createImage = () => {

        const token = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const body = {
            subtitle: form.subtitle,
            file: form.url,
            collectionId: EventTarget.value
        }
        axios.post(`${BASE_URL}/image/create`)
        .then(() => {

        })
        .catch((error) => {
            console.log(error)
        })
    }

    const options = states.collection.map(collection => ({
        "name" : collection.collection_name,
        "id" : collection.id,
  
      }))

    return (
        <div className="home">
            <div className="container-header-grid">
                {window.localStorage.getItem("token") ? <NavBar color={"transparent"} title={'Home-Logged'} /> : <NavBar color={"transparent"} title={'Home'} />}
                <div className="container-grid-home">
                    {states.divShow ? 
                    <div className="show">
                        <input 
                            placeholder="Subtítulo" 
                            name={"subtitle"}
                            onChange={onChange}/>
                        <input placeholder="URL da imagem"/>
                        <select>
                            
                        </select>

                        <Button 
                            color="white"
                            bg="orange" 
                            marginLeft="70px"
                            marginRight="70px"
                            marginTop="30px"
                            onClick={createImage}
                        >Criar</Button>
                    </div> 
                        : <section className="container-section-home">   
                            { states.user.name? <h1 className="title-logged">
                                {states.user.name && <h1>Oie, {states.user.name}</h1>}
                            </h1> : <h1 className="title-home">
                                Uma comunidade para compartilhar suas fotos favoritas.
                            </h1> }
                        <input className="search"  variant="filled" placeholder="Buscar imagens" />
                        </section>
                    }
               </div>
            </div>
            <div className="container-images">
                <div className="item-images">
                    {image.map(function(image){
                        return <div >
                            <img className="image" src={image.file}/>
                            <p className="image-subtitle">{image.subtitle}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage