import NavBar from '../../components/navbar/Navbar'
import { Input } from "@chakra-ui/react"
import './styles.css';

function HomePage() {

    return (
        <div>
            {window.localStorage.getItem("token") ? <NavBar title={'Home-Logged'} /> : <NavBar color={"blue"} title={'Home'} />}
            <div className="container-grid">
              <h1 className="title">As melhores fotos e vídeos gratuitos compartilhados por criadores talentosos</h1>
              <Input className="search"  variant="filled" placeholder="Buscar fotos e vídeos" />
              <div className="container-images">
                  olaa
                  
              </div>
              
            </div>
        </div>
    )
}

export default HomePage