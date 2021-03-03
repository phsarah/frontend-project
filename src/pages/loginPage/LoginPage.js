import NavBar from '../../components/navbar/Navbar'
import {Input, Button, Flex } from "@chakra-ui/react"
import useForm from '../../hooks/useForm'
import './styles.css';

function LoginPage(){
    
    return(
        <div>
            <NavBar  title={'Login-Page'}/>
            <div className="container" >
               
                <div className="menu">
                    <h1 id="title">
                        Seja bem-vinda(o) ao Pixalabel!
                    </h1>
                    <Flex className="form">
                        <Input 
                            className="input"
                            borderColor="grey"
                            placeholder="E-mail ou Nickname"
                            type="email" 
                            marginY="15px"
                            borderRadius="2xl"
                        />
                        <Input 
                            className="input"
                            borderColor="grey"
                            placeholder="Senha"
                            type="password" 
                            borderRadius="2xl"
                        />
                    </Flex>
                    <Button 
                        as="button"
                        bg="#F6AD55"
                        color="black"
                        className="form-button"
                    >       Entrar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;