import React from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'
import BASE_URL from '../../constants/url'
import useForm from '../../hooks/useForm'
import NavBar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/footer'
import {Input, Button, Flex, FormLabel } from "@chakra-ui/react"
import './styles.css';

function SignupPage(){
    const history = useHistory()
    
    const [form, onChange] = useForm({
        name: "",
        nickname: "",
        email: "",
        password: ""
    })

    const signup = () => {
        const body = {
            name: form.name,
            nickname: form.nickname,
            email: form.email,
            password: form.password
        }
        
        axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            window.localStorage.setItem("token", res.data.token)
            history.push('/')
        })
        .catch((e) => {
            window.alert(e.message)
        })
    }

    return(
        <div >
            <NavBar  color={"rgb(131, 17, 72)"} title={'Signup-Page'}/>
            <div className="container" >
               
               <div className="menu-signup">
                   <div className="logo-signup"></div>
                   <h1 id="title-signup">
                      Junte-se a nós, crie sua conta!
                   </h1>
                   <Flex className="form-signup">
                   <FormLabel>
                           Nome
                           <Input 
                               className="input-signup"
                               borderColor="grey"
                               type="name" 
                               variant="outline"
                               borderRadius="2xl"
                               name={"name"}
                               onChange={onChange}
                           />
                       </FormLabel>
                       <FormLabel>
                           Nickname
                           <Input 
                               className="input-signup"
                               borderColor="grey"
                               type="nickname" 
                               variant="outline"
                               borderRadius="2xl"
                               name={"nickname"}
                               onChange={onChange}
                           />
                       </FormLabel>
                       <FormLabel>
                           E-mail
                           <Input 
                               className="input-signup"
                               borderColor="grey"
                               type="email" 
                               variant="outline"
                               borderRadius="2xl"
                               name={"email"}
                               onChange={onChange}
                           />
                       </FormLabel>
                       <FormLabel>
                           Crie uma senha
                       <Input 
                           className="input-signup"
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
                       className="form-button-signup"
                       onClick={signup}
                   >       Criar
                   </Button>
               </div>
           </div>
           <Footer/>
        </div>
    )
}

export default SignupPage;
