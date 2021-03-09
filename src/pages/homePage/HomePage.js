import NavBar from '../../components/navbar/Navbar'
import './styles.css';

function HomePage() {

    return (
        <div className="container-home">
            {window.localStorage.getItem("token") ? <NavBar color={"transparent"} title={'Home-Logged'} /> : <NavBar color={"transparent"} title={'Home'} />}
            <div className="container-grid-home">
                <section className="container-section-home">   
                    <h1 className="title">As melhores imagens gratuitas compartilhadas por criadores talentosos.</h1>
                    <input className="search"  variant="filled" placeholder="Buscar fotos e vídeos" />
                    
                </section>
              <div className="container-images">
                  olaa
                  
              </div>
              
            </div>
        </div>
    )
}

export default HomePage