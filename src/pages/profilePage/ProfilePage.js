import axios from 'axios'
import React, { useContext, useEffect, useState} from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Box, Input, Button, FormControl, FormLabel} from "@chakra-ui/react"
import NavBar from '../../components/navbar/Navbar'
import BASE_URL from '../../constants/url'
import useForm from '../../hooks/useForm'
import GlobalStateContext from '../../global/GlobalStateContext'
import './styles.css';

function ProfilePage(){
    const [collection, setCollection] = useState([])
    const [mudarPage, setMudarPage] = useState('collection')
    const [ divCreate, setDivCreate ] = useState(false)
    const { states, setters, requests } = useContext(GlobalStateContext)

    const [form, onChange] = useForm({
        name: ""
    })
    
    useEffect(()=> {
        requests.getUser()
        getCollection()
    }, [])


    const goToCollection = () =>{
        setMudarPage('image')
    }

    const goToBack = () => {
        setMudarPage('collection')
    }
    const goToCreate = () => {
        setDivCreate(!divCreate)
    }
    
    const getCollection = () => {
        const token = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get(`${BASE_URL}/user/collections`, token)
            .then((res) => {
                setCollection(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const createCollection = () => {
        const body = {
            name: form.name
        }
        axios.post(`${BASE_URL}/collection/create`, body)
            .then((res) => {
                console.log(res)
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
                        <div className="item-collection">{collection.length} coleções</div>
                        <div className="item-image">0 imagens</div>
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
                        {collection.map(function(collection){
                            return <Box 
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
                                             30 imagens
                                            </Box>
                                            <Box
                                                mt="1"
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
                                </div>
                            </div>
                       : ""
                }
            </body>
        </div>
    )
}

export default ProfilePage;