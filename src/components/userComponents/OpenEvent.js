import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import '../../styles/openeve.css';
import { useNavigate } from 'react-router-dom';
const OpenEvent = () => {
  const navigate = useNavigate();
  const { eventname, contact } = useParams();
  const [userData, setUserData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3300/finduser/${contact}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`http://localhost:3300/getglobaldata/${eventname}/${contact}`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [eventname, contact]);
console.log(eventData);

const toggleSelect=()=>{
  axios.get(`http://localhost:3300/updateuserselections/${eventData.eventName}/${eventData.vendorContact}/${userData.contact}`).then((res)=>{
    alert(res.data);
    navigate(`/userwelcome/${userData.contact}`)
  }).catch((err)=>{
    console.log(err);
  })
}
  return (
    <div>
      <Header data={userData} />
      <div className='open-eve-body'>
        <div className='row1-eve'>
          <div className='eve-prop'>Proposals {'<'} Contract</div>
          <div className='eve-cont'>
            <button onClick={toggleSelect} >SELECT</button>
          </div>
        </div>
        <div className='row2-eve'>
          <div className='row2col1-eve'>
            <div className='row2col1-eve-pic'>
              <div className='eve-pic-img'>
                <img className='load-eve-img' alt='Event' src={eventData?.images} />
              </div>
              <div className='id-bg-eve'>ID</div>
            </div>
            <div className='row2col1-eve-card'>
              <div>Name: {eventData?.vendorName}</div>
              <div>Email: {eventData?.email}</div>
              <div>From: {eventData?.from?.slice(0, 10)}</div>
              <div>To: {eventData?.to?.slice(0, 10)}</div>
              <div>Event Type: {eventData?.eventType}</div>
              <div>Event Class: {eventData?.proposalType}</div>
            </div>
          </div>
          <div className='row2col2-eve'>
            <div>
              <b>Venue and Arrangements</b>
            </div>
            {eventData && eventData.placeOfEvent && (
              <div>{eventData.placeOfEvent}</div>
            )}
          </div>
          <div className='row2col3-eve'>
            <div>
              <b>Food Preferences</b>
            </div>
            {eventData && eventData.foodPreferences && (
              <div>{eventData.foodPreferences}</div>
            )}
          </div>
        </div>
        <div className='row3-eve'>
          <div className='row3col1-eve'>
            <div>
              <b>My Albums</b>
            </div>
            <div>{/* Place your albums data here */}</div>
          </div>
          <div className='row3col2-eve'>
            <div>
              <b>Contacts | 12</b>
            </div>
            {eventData && eventData.vendorContact && (
              <div>{eventData.vendorContact}</div>
            )}
          </div>
          <div className='row3col3-eve'>
            <div>
              <b>Events</b>
            </div>
            {eventData && eventData.events && (
              <div>{eventData.events}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEvent;
