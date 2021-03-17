import axios from 'axios';
import React, { useContext, useEffect, useState} from 'react';
import useForm from '../../hooks/useForm'
import NavBar from '../../components/navbar/Navbar'
import GlobalStateContext from '../../global/GlobalStateContext'
import { Button } from "@chakra-ui/react"
import Select from 'react-select'
import BASE_URL from '../../constants/url'
import './styles.css';

function HomePage() {
    const [cardImage, setCardImage] = useState(false)
    const [idImage, setIdImage] = useState("")
    const [file, setFile] = useState("")

    const { states, setters, requests } = useContext(GlobalStateContext)

    const [form, onChange] = useForm({
        subtitle: "",
        url: ""
    })

    const options =  states.collection.map(collection => ({
        value : collection.id,
        label : collection.collection_name
    }))

    const [selectCollection , setSelectCollection] = useState(options)
    

    useEffect(()=> {
        requests.getUser()
        requests.getCollection()
    }, [])
    

    const createImage = () => {

        const token = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const body = {
            subtitle: form.subtitle,
            file: form.url,
            tagsId: "",
            collectionId: selectCollection
            
        }
        axios.post(`${BASE_URL}/image/create`, body, token)
        .then(() => {
            alert("Foto adicionada")
        })
        .catch((error) => {
            console.log(error)
        })
    }
      
    const handleChange = (e)=>{
        setSelectCollection(e.value)
    }

    const imageClick = (e) => {
        setIdImage(e.target.id)
        setFile(e.target.id)
        setCardImage(!cardImage)
    }

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
                        <input 
                            placeholder="URL da imagem"
                            name={"url"}
                            onChange={onChange}/>
                        
                        <Select options={options} onChange={handleChange}/>
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
                    {states.image.map(function(image){
                        return <div >
                            <img className="image" src={image.file} onClick={imageClick} id={image.file}/>
                            <p className="image-subtitle">{image.subtitle}</p>
                        </div>
                    })}
                    { cardImage ? <div className="show-card-image"> 
                        <img className="image-card" src={file}/>
                       
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default HomePage