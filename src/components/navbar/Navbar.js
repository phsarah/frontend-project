import React, { useContext} from 'react';
import { useHistory} from 'react-router-dom';
import GlobalStateContext from '../../global/GlobalStateContext'
import { Button, Heading, Stack, Flex } from "@chakra-ui/react"
import { Avatar, AvatarBadge, Wrap } from "@chakra-ui/react"
import { goToHome, goToLogin, goToSignup, goToProfile } from '../../route/Coordinator'
import './styles.css';

function NavBar(props){
    const history = useHistory()
    const { states, setters, requests } = useContext(GlobalStateContext)

    const divShow = () => {
        setters.setDivShow(!states.divShow)
    }
    const logout = () => {
        window.localStorage.removeItem('token')
        window.alert("Você saiu, volte logo :D")
        history.push("/login")
    }

    const nameToLower = (states.user.name) && (states.user.name).toLowerCase()

    const Button1 = () => {
        switch (props.title) {
            case ('Home'):
                return(
                   
                    <Stack 
                        direction="row" 
                        spacing={4}
                        align="center">
                        <Button
                            as="button"
                            color="black"
                            colorScheme="black"
                            marginRight="10px"
                            variant="link"
                            onClick={() => goToLogin(history)}
                            
                        >
                            LOGIN
                        </Button>
                        <Button
                            as="button"
                            color="black"
                            colorScheme="black"
                            marginRight="15px"
                            variant="link"
                            onClick={() => goToSignup(history)}
                        >
                            SIGNUP
                        </Button>
                    </Stack>
                   
                )
            case('Home-Logged'):
                    return(
                        <Stack 
                            direction="row" 
                            spacing={5}
                            align="center">
                            <Button
                                as="button"
                                color="white"
                                fontSize="25px"
                                height="46px"
                                width="48px"
                                variant="solid"
                                colorScheme="purple"
                                borderRadius="50px"
                                onClick={divShow}
                            >
                                +
                            </Button>
                            <Wrap>
                            <Avatar 
                                size="md" 
                                onClick={() => goToProfile(history)} 
                                cursor="pointer" 
                                boxSize="2.2em" 
                                marginRight="15px"
                                src={`https://avatars.dicebear.com/api/avataaars/${nameToLower}.svg`}>
                                <AvatarBadge boxSize="0.90em" bg="green.500" />
                            </Avatar>
                            </Wrap>
                            <Button
                                as="button"
                                color="white"
                                fontSize="15px"
                                right="5px"
                                variant="solid"
                                colorScheme="red"
                                onClick={logout}
                            >
                                Sair
                            </Button>
                        </Stack>
                    )
                     case('Login-Page'):
                    return(
                        <Stack 
                        direction="row" 
                        spacing={4}
                        align="center">
                        <Button
                            bg="black"
                            as="button"
                            color="white"
                            colorScheme="black"
                            marginRight="10px"
                            variant="solid"
                            borderRadius="20px"
                            onClick={() => goToLogin(history)}
                            
                        >
                            LOGIN
                        </Button>
                        <Button
                            as="button"
                            color="white"
                            colorScheme="black"
                            marginRight="15px"
                            variant="link"
                            onClick={() => goToSignup(history)}
                        >
                            SIGNUP
                        </Button>
                    </Stack>
                    )
                    case('Signup-Page'):
                    return(
                        <Stack 
                        direction="row" 
                        spacing={4}
                        align="center">
                        <Button
                            as="button"
                            color="white"
                            colorScheme="black"
                            marginRight="10px"
                            variant="link"
                            onClick={() => goToLogin(history)}
                            
                        >
                            LOGIN
                        </Button>
                        <Button
                             bg="black"
                             as="button"
                             color="white"
                             colorScheme="black"
                             marginRight="10px"
                             variant="solid"
                             borderRadius="20px"
                            onClick={() => goToSignup(history)}
                        >
                            SIGNUP
                        </Button>
                    </Stack>
                    )
                    case('Profile-Page'):
                    return(
                        <Stack 
                            direction="row" 
                            spacing={4}
                            align="center">
                            <Button
                                as="button"
                                color="black"
                                bg="#F6AD55"
                                onClick={() => goToHome(history)}
                            >
                                Voltar
                            </Button>
                        </Stack>
                    )
            default:
                return(
                    <div></div>
                )
        }
    }


    return(
        <header className="navbar-container">
            <Flex 
                as="nav"
                bg={props.color}
                wrap="wrap"
                // boxShadow="xl"
                align="center"
                padding="1.59rem"
                justify="space-between"
              >  
                <Flex
                    align="center" 
                     mr={5}>
                    <div id="logo-navbar"></div>

                    <Heading 
                        as="h1" 
                        size="lg" 
                        letterSpacing={"-.1rem"}
                        cursor="pointer" 
                        >
                    <h1 
                        id="logo-name"
                        onClick={() => goToHome(history)}
                        
                    >
                        Pixalabel
                    </h1>
                    </Heading> 
                   
                </Flex>
               
            <Button1/>
            </Flex>
        </header>
    )
}

export default NavBar;