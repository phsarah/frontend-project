import NavBar from './components/navbar/Navbar'
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./customTheme-chakra-ui/CustomTheme"
import {LoginPage} from './pages/loginPage/LoginPage'


function App() {
return (
  <ChakraProvider theme={customTheme}>
    <LoginPage/>
  </ChakraProvider>
  );
}

export default App;
