import NavBar from '../../components/navbar/Navbar'
import { FormLabel, FormHelperText, FormControl, Input, Button } from "@chakra-ui/react"
import './styles.css';

export function LoginPage(){
    return(
        <div>
            <NavBar title={'Login-Page'}/>
            <div className="container" >
                <div className="menu">
                    <h1 id="title">
                        Seja bem-vinda(o) ao Pixalabel
                    </h1>
                    <div className="form">
                        <Input 
                            focusBorderColor="grey.400"
                            placeholder="Email/Nickname"
                            type="email" 
                        />
                        <Input 
                            focusBorderColor="grey.400"
                            placeholder="Password"
                            type="password" 
                        />
                    </div>
                        <Button 
                             as="button"
                             color="black"
                             className="form-button"
                        >   Entrar
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

