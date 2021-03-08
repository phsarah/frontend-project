import NavBar from '../../components/navbar/Navbar'
import './styles.css';

function HomePage() {

    return(
        <div>
            {window.localStorage.getItem("token")? <NavBar title={'Home-Logged'}/> : <NavBar color={"blue"}title={'Home'}/>}
            <div className="container-grid"
            >
                <div className="item">
                    <div className="banner">
                        banner
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage