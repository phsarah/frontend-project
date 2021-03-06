import NavBar from '../../components/navbar/Navbar'
import { useHistory} from 'react-router-dom';

import './styles.css';

function HomePage() {

    return(
        <div>
            {window.localStorage.getItem("token")? <NavBar title={'Home-Logged'}/> : <NavBar title={'Home'}/>}
            <div className="container-grid"
            >
               <div className="item">ITEM 1</div>
               <div className="item">ITEM 2</div>
               <div className="item">ITEM 3</div>
               <div className="item">ITEM 4</div>
               <div className="item">ITEM 5</div>
               <div className="item">ITEM 6</div>

            </div>
        </div>
    )
}

export default HomePage