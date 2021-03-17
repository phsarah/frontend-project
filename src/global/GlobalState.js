import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BASE_URL from '../constants/url'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [user, setUser] = useState({});
    const [image, setImage] = useState([]);
    const [collection, setCollection] = useState([])
    const [divShow, setDivShow] = useState(false)


    useEffect(()=> {
        getImagesByUser()
    }, [])

    const getUser = () => {
        const token = { 
            headers: {
                Authorization: localStorage.getItem('token')
              }
        }
        axios.get(`${BASE_URL}/user/infos`, token)
            .then((res) => {
                setUser(res.data.result)
            })
            .catch((error) => {
                console.log(error)
            })
    } 

    const getImagesByUser = () => {
        const token = { 
            headers: {
                Authorization: localStorage.getItem('token')
              }
        } 
        axios.get(`${BASE_URL}/image/feed`, token)
            .then((res)=>{
                console.log(res)
                setImage(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
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


    const states = { user, image, divShow, collection };
    const setters = { setUser, setImage, setDivShow, setCollection }
    const requests = { getUser, getImagesByUser, getCollection };

    const data = { states, setters, requests };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState