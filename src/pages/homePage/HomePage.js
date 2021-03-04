import NavBar from '../../components/navbar/Navbar'
import { Flex } from "@chakra-ui/react"
import './styles.css';

function HomePage() {
    return(
        <div>
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
        </div>
    )
}

export default HomePage