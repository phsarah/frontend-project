import NavBar from '../../components/navbar/Navbar'
import { useHistory} from 'react-router-dom';

import './styles.css';

function HomePage() {

    const history = useHistory()

    const returnMessageLogout = () => {
            if(!localStorage.getItem('token')){
            window.alert("Você foi deslogado")
            history.push('/login')
        }
    }
    return(
        <div>
            {returnMessageLogout}
            <NavBar title={'Home-Logged'}/>
            <div className="container-grid"
            >
               <div className="item">ITEM 1</div>
               <div className="item">ITEM 2</div>
               <div className="item">ITEM 3</div>
               <div className="item">ITEM 4</div>
               <div className="item">ITEM 5</div>
               <div className="item">ITEM 6</div>

            </div>
            {returnMessageLogout}
        </div>
    )
}

export default HomePage