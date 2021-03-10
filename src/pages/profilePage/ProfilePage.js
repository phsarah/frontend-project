import React, { useContext, useEffect} from 'react';
import NavBar from '../../components/navbar/Navbar'
import { Avatar } from '@chakra-ui/avatar';
import GlobalStateContext from '../../global/GlobalStateContext'
import './styles.css';

function ProfilePage(){
    const { states, setters, requests } = useContext(GlobalStateContext)
    
    useEffect(()=> {
        requests.getUser()
    }, [])
    
    const nameLowerCase = (states.user.name).toLowerCase()
    return(
        <div>
            <NavBar  title={'Profile-Page'}/>
            <body className="container-grid">
                <div className="profile-info">
                    <Avatar size="x2" src={`https://avatars.dicebear.com/api/avataaars/${nameLowerCase}.svg`}/>
                    <div className="item-name">{states.user.name && <h1>{states.user.name}</h1>}</div>
                    <div className="item-nickname" >{states.user.nickname && <h2>@{states.user.nickname}</h2>}</div>
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