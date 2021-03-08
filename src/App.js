import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "./customTheme/CustomTheme"
import Router from './route/Router'


function App() {
return (
  <ChakraProvider theme={customTheme}>
    <Router/>
  </ChakraProvider>
  );
}

export default App;
