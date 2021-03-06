import { Button, Heading, Stack, Flex } from "@chakra-ui/react"
import { useHistory} from 'react-router-dom';
import { Avatar, AvatarBadge, Wrap } from "@chakra-ui/react"
import './styles.css';

function NavBar(props){

    const history = useHistory()

    const goToSignup = () => {
        history.push("/signup")
    }


    const logOut = () => {
        localStorage.removeItem('token')
        window.alert("Você saiu, estaremos te esperando :)")
        history.push("/login")
    }
    const goToProfile = () => {
        history.push("/profile")
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
                            color="black"
                        >
                            LOGIN
                        </Button>
                        <Button
                            as="button"
                            color="black"
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
                            <Wrap>
                            <Avatar onClick={goToProfile} cursor="pointer" boxSize="2.2em" src={`https://avatars.dicebear.com/api/avataaars/sarah.svg`}>
                                <AvatarBadge boxSize="0.8em" bg="green.500" />
                            </Avatar>
                            </Wrap>
                            <Button
                                as="button"
                                color="black"
                                onClick={logOut}
                             >
                                Logout
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
                                onClick={goToSignup}
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
                bg="black"
                wrap="wrap"
                boxShadow="xl"
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
                        letterSpacing={"-.1rem"}>
                    <h1 
                        id="logo-name"
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