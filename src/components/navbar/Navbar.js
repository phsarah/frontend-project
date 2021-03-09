import {useState} from 'react'
import { Button, Heading, Stack, Flex } from "@chakra-ui/react"
import { useHistory} from 'react-router-dom';
import { Avatar, AvatarBadge, Wrap } from "@chakra-ui/react"
import { goToHome, goToLogin, goToSignup, goToProfile } from '../../route/Coordinator'
import './styles.css';

function NavBar(props){
    // const [show, setShow] = useState(false)
    // const [classe, setClasse] = useState('hide')
    const history = useHistory()
    
    // const showDiv = () => {
    //     if(show === false){
    //         setClasse("show")
    //         setShow(true)
    //     }
    //     else{
    //         setClasse("hide")
    //         setShow(false)
    //     }
    // }

    const logout = () => {
        window.localStorage.removeItem('token')
        window.alert("Você saiu, volte logo :D")
        history.push("/login")
    }
    
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
                            color="white"
                            variant="ghost"
                            onClick={() => goToLogin(history)}
                            
                        >
                            LOGIN
                        </Button>
                        <Button
                            as="button"
                            color="white"
                            variant="ghost"
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
                            spacing={4}
                            align="center">
                            <Button
                                as="button"
                                color="white"
                                fontSize="15px"
                                variant="outline"
                                colorScheme="white"
                                // onClick={showDiv}
                            >
                                + Create
                            </Button>
                            <Wrap>
                            <Avatar 
                                size="md" 
                                onClick={() => goToProfile(history)} 
                                cursor="pointer" 
                                boxSize="2.2em" 
                                src={`https://avatars.dicebear.com/api/avataaars/sarah.svg`}>
                                <AvatarBadge boxSize="0.90em" bg="green.500" />
                            </Avatar>
                            </Wrap>
                            <Button
                                as="button"
                                color="red"
                                fontSize="15px"
                                variant="outline"
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
                                as="button"
                                color="black"
                                bg="#F6AD55"
                                onClick={() => goToSignup(history)}
                             >
                                É novo em Pixalabel?
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
                                color="black"
                                bg="#F6AD55"
                                onClick={() => goToLogin(history)}
                            >
                                Voltar
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