import axios from 'axios';
import React, { useState } from 'react';
import BASE_URL from '../constants/url'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [user, setUser] = useState({});
    const [drop, setDrop] = useState(false)
    
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
    const states = { user };
    const setters = { setUser }
    const requests = { getUser };

    const data = { states, setters, requests };

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState