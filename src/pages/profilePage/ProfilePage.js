import { Avatar } from '@chakra-ui/avatar';
import NavBar from '../../components/navbar/Navbar'
import './styles.css';

function ProfilePage(){
    return(
        <div>
            <NavBar  title={'Profile-Page'}/>
            <body className="container-grid">
                <div className="profile-info">
                    <Avatar size="x2" src={`https://avatars.dicebear.com/api/avataaars/sarah.svg`}/>
                    <div className="item-name">Sarah</div>
                    <div className="item-nickname" >@phsarah</div>
                    <div className="item-collection">0 coleções</div>
                    <div className="item-bio">TALVEZ uma bio</div>
                    <div className="item-tag">tags criadas</div>
                </div>
                <div className="profile-collection">Sou as coleções</div>
            </body>
        </div>
    )
}

export default ProfilePage;