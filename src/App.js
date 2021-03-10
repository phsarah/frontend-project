import GlobalState from './global/GlobalState'
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./components/customTheme/CustomTheme"
import Router from './route/Router'


function App() {
return (
  <ChakraProvider theme={customTheme}>
     <GlobalState> 
    <Router/>
    </GlobalState> 
  </ChakraProvider>
  );
}

export default App;
