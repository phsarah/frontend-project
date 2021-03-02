import { Button, Heading, Stack, Flex } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import { Avatar, AvatarBadge, Wrap, FormControl, Input } from "@chakra-ui/react"
import {  IconButton  } from "@chakra-ui/button"
import { SearchIcon} from '@chakra-ui/icons'


function NavBar(props){

    const history = useHistory()

    const goBack = () => {
        history.goBack()
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
            case('Login'):
                    return(
                        <Stack 
                            direction="row" 
                            spacing={4}
                            align="center">
                            <Wrap>
                            <Avatar boxSize="2.2em" src={`https://avatars.dicebear.com/api/avataaars/sarah.svg`}>
                                <AvatarBadge boxSize="0.8em" bg="green.500" />
                            </Avatar>
                            </Wrap>
                            <Button
                                as="button"
                                color="black"
                             >
                                SIGNUP
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
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.59rem"
                bg="teal.500"
                color="white">  
                
                <Flex 
                    align="center" 
                     mr={5}>
                     <Heading 
                        as="h1" 
                        size="lg" 
                        letterSpacing={"-.1rem"}>
                            Pixalabel
                    </Heading>
                </Flex>
               
            <Button1/>
            </Flex>
        </header>
    )
}

export default NavBar;