import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/welcomeUser.css';
import welcome from '../../images/welcome.png';
import UserProposalCard from './UserProposalCard';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
const UserWelcome = () => {
  const [userData, setUserData] = useState('');
  const [globalData, setGlobalData] = useState([]);
  const { contact } = useParams();
  const navigate = useNavigate();
  const [userSelections, setUserSelections] = useState([]);

  useEffect(() => {
    axios
      .get(`${api}/finduser/${contact}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`${api}/getglobaldata`)
      .then((res) => {
        setGlobalData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(`${api}/getuser/${contact}`)
      .then((res) => {
        setUserSelections(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);
  const toggleSignout=()=>{
    navigate('/usersignin')
  }
  const handleCardClick = (cardData) => {
    console.log('Clicked on card:', cardData);
    navigate(`/openevent/${cardData.eventName}/${userData.contact}/${cardData.vendorContact}`);
  };

  return (
    <div className='user-welcome-container'>
      <Header data={userData} />
      <div>
        <img className='welcome-img' alt='welcome' src={welcome} />
      </div>
      <div className='logout-btn-wel'><button onClick={toggleSignout} className='signout-btn-wel'>SIGNOUT</button></div>
      <div>
        <div className='proposals-h'>Selections</div>
        <div className='proposals-cards-user'>
          {userSelections.map((selected, index) => (
            <div key={index}>
              <UserProposalCard data={selected}/>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className='proposals-h'>Proposals</div>
        <div className='proposals-cards-user'>
          {globalData.map((user, index) => (
            <div key={index} onClick={() => handleCardClick(user)}>
              <UserProposalCard data={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserWelcome;
