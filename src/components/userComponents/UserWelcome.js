import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../styles/welcomeUser.css';
import welcome from '../../images/welcome.png';
import UserProposalCard from './UserProposalCard';
import { useNavigate } from 'react-router-dom';
const UserWelcome = () => {
  const [userData, setUserData] = useState('');
  const [globalData, setGlobalData] = useState([]);
  const { contact } = useParams();
  const [sel,setSel] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`http://localhost:3300/finduser/${contact}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('http://localhost:3300/getglobaldata')
      .then((res) => {
        setGlobalData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);

  axios.get(`http://localhost:3300/updateuserselections/${globalData.eventName}/${globalData.contact}/${userData.contact}`).then((res)=>{
    setSel(res.data)
  }).catch((err)=>{
    console.log(err);
  })
  const handleCardClick = (cardData) => {
    // Handle the click event for a specific card
    console.log('Clicked on card:', cardData);

    navigate(`/openevent/${cardData.eventName}/${cardData.vendorContact}`)
    
  };

  return (
    <div className='user-welcome-container'>
      <Header data={userData} />
      <div>
        <img className='welcome-img' alt='welcome' src={welcome} />
      </div>
      <div>
        <div className='proposals-h'>Selections</div>
        <div className='proposals-cards-user'>
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
