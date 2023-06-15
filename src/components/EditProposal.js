import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/editProp.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from '../api';
const EditProposal = () => {
    const navigate = useNavigate()
  const [vendorSelections, setVendorSelections] = useState('');
  const { contact } = useParams();

  useEffect(() => {
    axios
      .get(`${api}/vendorproposals/editproposal/${contact}`)
      .then((response) => {
        setVendorSelections(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);

  const [eventName, setEventName] = useState(vendorSelections.eventName);
  const [placeOfEvent, setPlaceOfEvent] = useState(vendorSelections.placeOfEvent);
  const [proposalType, setProposalType] = useState(vendorSelections.proposalType);
  const [eventType, setEventType] = useState(vendorSelections.eventType);
  const [budget, setBudget] = useState(vendorSelections.budget);
  const [from, setFrom] = useState(vendorSelections.from);
  const [to, setTo] = useState(vendorSelections.to);
  const [description, setDescription] = useState(vendorSelections.description);
  const [images, setImages] = useState(vendorSelections.images);
  const [foodPreferences, setFoodPreferences] = useState(vendorSelections.foodPreferences);
  const [events, setEvents] = useState(vendorSelections.events);

  const handleSubmit = () => {
    console.log('Done');
    axios.post(`${api}/vendorproposals/editproposal/${vendorSelections.eventName}/${contact}`,{
        eventName,placeOfEvent,proposalType,eventType,budget,from,to,description,images,foodPreferences,events
    }).then((res)=>{
        alert(res.data);
        navigate(`/vendorproposals/${contact}`)
        
    }).catch((err)=>{
        console.log(err);
    })
  };

  return (
    <div className='edit-prop-container'>
      <div className='edit-prop-box'>
        <h1>EDIT EVENT</h1>
        <p>fill all the details below</p>
        <input type='text' className='inputs-edit-prop' placeholder='Event Name' onChange={(e) => setEventName(e.target.value)} />
        <div className='selects-edit'>
        <select className='inputs-edit-prop1'  onChange={(e) => setPlaceOfEvent(e.target.value)}>
          <option value=''>Place of Event</option>
          <option value='Tirupati'>Tirupati</option>
          <option value='Vijaywada'>Vijaywada</option>
          <option value='Bangalore'>Bangalore</option>
          <option value='Hyderabad'>Hyderabad</option>
          <option value='Chennai'>Chennai</option>
        </select>
        <select className='inputs-edit-prop1'  onChange={(e) => setProposalType(e.target.value)}>
          <option value=''>Proposal Type</option>
          <option value='Wedding'>Wedding</option>
          <option value='Marriage'>Marriage</option>
          <option value='Reception'>Reception</option>
          <option value='Birthday'>Birthday</option>
        </select>
        <select className='inputs-edit-prop1'  onChange={(e) => setEventType(e.target.value)}>
          <option value=''>Event Type</option>
          <option value='Wedding'>Wedding</option>
          <option value='Marriage'>Marriage</option>
          <option value='Reception'>Reception</option>
          <option value='Birthday'>Birthday</option>
        </select>
        </div>
        <input type='text' className='inputs-edit-prop' placeholder='Budget' onChange={(e) => setBudget(e.target.value)} />
        <input type='date' className='inputs-edit-prop' placeholder='From'  onChange={(e) => setFrom(e.target.value)} />
        <input type='date' className='inputs-edit-prop' placeholder='To'  onChange={(e) => setTo(e.target.value)} />
        <input type='text' className='inputs-edit-prop' placeholder='Description'  onChange={(e) => setDescription(e.target.value)} />
        <input type='text' className='inputs-edit-prop' placeholder='Images'  onChange={(e) => setImages(e.target.value)} />
        <input type='text' className='inputs-edit-prop' placeholder='Food Preferences'  onChange={(e) => setFoodPreferences(e.target.value)} />
        <input type='text' className='inputs-edit-prop' placeholder='Events'  onChange={(e) => setEvents(e.target.value)} />
        <button className='submit-button' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditProposal;
