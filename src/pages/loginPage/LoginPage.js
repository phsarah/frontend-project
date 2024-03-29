import React from 'react'
import NavBar from '../../components/navbar/Navbar'
import {Input, Button, Flex, FormLabel } from "@chakra-ui/react"
import { useHistory} from 'react-router-dom';
import BASE_URL from '../../constants/url'
import useForm from '../../hooks/useForm'
import Footer from '../../components/footer/footer'
import axios from 'axios'
import './styles.css';


function LoginPage(){
    const history = useHistory()
    
    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const logIn = () => {
        const body = {
            emailOrNickname: form.email,
            password: form.password
        }
        
        axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token)
            history.push('/')
        })
        .catch((e) => {
            window.alert(e.message)
        })
        
    }
        
    return(
        <div>
            <NavBar  color={"rgb(131, 17, 72)"} title={'Login-Page'}/>
            <div className="container" >
               
                <div className="menu">
                    <div className="logo-login"></div>
                    <h1 id="title">
                        Bem-vinda(o) ao Pixalabel!
                    </h1>
                    <Flex className="form">
                        <FormLabel>
                            E-mail ou nickname
                            <Input 
                                className="input-login"
                                borderColor="grey"
                                type="email" 
                                variant="outline"
                                borderRadius="2xl"
                                name={"email"}
                                onChange={onChange}
                           
                            />
                        </FormLabel>
                       
                        <FormLabel>
                            Senha
                        <Input 
                            className="input-login"
                            borderColor="grey"
                            variant="outline"
                            borderRadius="2xl"
                            type="password" 
                            name={"password"}
                            onChange={onChange}
                        />
                        </FormLabel>
                        
                    </Flex>
                    <Button 
                        as="button"
                        bg="burlywood"
                        color="black"
                        className="form-button"
                        onClick={logIn}
                    >       Entrar
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage;