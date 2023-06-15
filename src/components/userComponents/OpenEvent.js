import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import '../../styles/openeve.css';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
const OpenEvent = () => {
  const navigate = useNavigate();
  const { eventname, contact,vcontact } = useParams();
  const [userData, setUserData] = useState(null);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    axios
      .get(`${api}/finduser/${contact}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get(`${api}/getglobaldata/${eventname}/${vcontact}`)
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [eventname, contact, vcontact]);

const toggleSelect=()=>{

  axios.get(`${api}/updateuserselections/${eventData.eventName}/${eventData.vendorContact}/${userData.contact}`).then((res)=>{
    alert('Event added to Selections');
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
            <button className='select-btn-ev' onClick={toggleSelect} >SELECT</button>
          </div>
        </div>
        <div className='row2-eve'>
          <div className='row2col1-eve'>
            <div className='row2col1-eve-pic'>
              <div className='eve-pic-img'>
                <img className='load-eve-img' alt='Event' src={eventData?.images[0]} />
              </div>
              <div className='id-bg-eve'><b className='id-bg-eve1'>ID:  {eventData?._id.slice(0,9)}</b></div>
            </div>
            <div className='row2col1-eve-card'>
              <div><b>Name:</b> {eventData?.vendorName}</div>
              <div><b>Email:</b> user123@gmail.com</div>
              <div><b>From:</b> {eventData?.from?.slice(0, 10)}</div>
              <div><b>To:</b> {eventData?.to?.slice(0, 10)}</div>
              <div><b>Event Type:</b> {eventData?.eventType}</div>
              <div><b>Event Class:</b> {eventData?.proposalType}</div>
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
              <div className='albums-cont'>
                <div className='row1-alb'>
                  <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[1]}/></div>
                  <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[2]}/></div>
                  <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[3]}/></div>
                </div>
                <div className='row2-alb'>
                <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[4]}/></div>
                <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[5]}/></div>
                <div className='alb-img'><img className='alb-ip-img' alt='src' src={eventData?.images[6]}/></div>
                </div>
              </div>
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
