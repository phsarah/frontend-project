import axios from 'axios'
import React, { useContext, useEffect, useState} from 'react';
import GlobalStateContext from '../../global/GlobalStateContext'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import CardImage from '../../components/cardImageProfile/cardImage'
import BASE_URL from '../../constants/url'
import useForm from '../../hooks/useForm'
import { Box, Input, Button, FormControl, FormLabel} from "@chakra-ui/react"
import { Avatar } from '@chakra-ui/avatar';
import './styles.css';

function ProfilePage(){

    const [mudarPage, setMudarPage] = useState('collection')
    const [ divCreate, setDivCreate ] = useState(false)
    const [idCollection, setIdCollection] = useState("")
    const [imagesCollection, setImagesCollection] = useState([])

    const { states, setters, requests } = useContext(GlobalStateContext)

    const [form, onChange] = useForm({
        name: ""
    })
    
    useEffect(()=> {
        requests.getUser()
        requests.getImagesByUser()
        requests.getCollection()
        
    }, [])

   

    const goToCollection = (e) =>{
        setIdCollection(e.target.id)
        setMudarPage('image')
        getImagesByCollection()
    }

    const goToBack = () => {
        setMudarPage('collection')
    }
    const goToCreate = () => {
        setDivCreate(!divCreate)
    }
    
    
    const createCollection = () => {
        const token = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        const body = {
            name: form.name
        }
        if(!body.name){
            alert("Ops, parece que você está tentando criar uma coleção sem nome!")
        }
        else{
            axios.post(`${BASE_URL}/collection/create`, body, token)
            .then(() => {
                setDivCreate(!divCreate)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
    
    const getImagesByCollection = () => {
        axios.get(`${BASE_URL}/image/collection/${idCollection}`)
        .then((res) => {
            setImagesCollection(res.data)
            console.log(imagesCollection)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    const nameToLower = (states.user.name) && (states.user.name).toLowerCase()
    return(
        <div>
            <NavBar  title={'Profile-Page'} color={"black"}/>
            <body className="container-grid">
                <div className="profile-info">
                    <Avatar size="xl2" src={`https://avatars.dicebear.com/api/avataaars/${nameToLower}.svg`}/>
                    <div className="item-name">
                        {states.user.name && <h1>{states.user.name}</h1>}
                    </div>
                    <div className="item-nickname" >
                        {states.user.nickname && <h2>@{states.user.nickname}</h2>}
                    </div>
                    <div className="profile-flex">
                        <div className="item-collection">{states.collection.length} coleções</div>
                        <div className="item-image">{states.imageUser.length} pixels</div>
                    </div>
                    <input className="item-bio"/>
                    <div className="item-tag">tags</div>
                </div>
                { mudarPage === "collection"? <div className="collection">
                    <h1>Coleções</h1>
                   <div className="collection-grid">
                        <Box 
                            maxW="sm" 
                            borderWidth="1px" 
                            borderRadius="lg" 
                            onClick={goToCreate}
                            className="input-collection-grid"> 
                            <p>+</p>
                        </Box>
                        {states.collection.map(function(collection){
                            return <Box 
                                        id={collection.id}
                                        maxW="sm" 
                                        borderWidth="1px" 
                                        borderRadius="lg" 
                                        overflow="hidden" 
                                        onClick={goToCollection}
                                        cursor="pointer" 
                                        className="item-collection-grid">
                                            <Box
                                                 color="gray.500"
                                                fontWeight="semibold"
                                                letterSpacing="wide"
                                                fontSize="xs"
                                                textTransform="uppercase"
                                                ml="2"
                                                >
                                            </Box>
                                            <Box
                                            animation="running"
                                                fontSize="17px"
                                                ml="30"
                                                fontWeight="semibold"
                                                as="h4"
                                                lineHeight="tight"
                                                isTruncated
                                             >
                                            {collection.collection_name}
                                            </Box>
                                     </Box>
                        })}
                        </div>
                        {divCreate? <div className="div-create-collection">
                                        <p>Criar coleção</p>
                                        <FormControl id="first-name" isRequired>
                                            <FormLabel 
                                                color="white" 
                                                marginTop="35px"
                                                fontWeight="light"
                                                fontSize="15px"
                                            >
                                                 Nome da coleção
                                            </FormLabel>
                                        <Input
                                            color="white"
                                            borderColor="black"
                                            type="name" 
                                            name={"name"}
                                            onChange={onChange}
                                            variant="filled"
                                        />
                                        </FormControl>
                                        <Button 
                                            colorScheme="white"
                                            color="white" 
                                            variant="outline"
                                            onClick={createCollection}
                                            >
                                            Criar
                                        </Button>
                                    </div> 
                                : <div className="hide"></div>}
                        </div>  
                        : mudarPage === "image" ? 
                            <div className="collection">
                                <button onClick={goToBack}>Voltar</button>
                                <div className="collection-grid">
                                    {!imagesCollection.length? <p>Não tem images</p> :
                                        imagesCollection.map(function(infos){
                                            return (
                                            <CardImage file={infos.file}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        : ""
                    }
            </body>
            <Footer/>
        </div>
    )
}

export default ProfilePage;