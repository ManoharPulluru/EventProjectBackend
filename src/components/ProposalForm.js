import React, { useEffect, useState } from 'react';
import '../styles/form.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProposalForm = () => {
  const navigate = useNavigate();
  const [vendor,setVendor] = useState('');
  const { contact } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3300/vendorproposals/${contact}`)
      .then((response) => {
        setVendor(response.data.vendor);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);
  console.log(vendor);

  const [eventName, setEventName] = useState('');
  const [placeOfEvent, setPlaceOfEvent] = useState('');
  const [proposalType, setProposalType] = useState('');
  const [eventType, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [foodPreferences, setFoodPreferences] = useState('');
  const [events, setEvents] = useState('');

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handlePlaceOfEventChange = (event) => {
    setPlaceOfEvent(event.target.value);
  };

  const handleProposalTypeChange = (event) => {
    setProposalType(event.target.value);
  };

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFoodPreferencesChange = (event) => {
    setFoodPreferences(event.target.value);
  };

  const handleEventsChange = (event) => {
    setEvents(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const vendorName = vendor.username
    const vendorContact = vendor.contact
    axios.post(`https://eventbackend-2hj4.onrender.com/vendorcreateproposal/${vendor.contact}`,{
      vendorName: vendorName,
      vendorContact : vendorContact,
      eventName: eventName,
      placeOfEvent: placeOfEvent,
      proposalType: proposalType,
      eventType: eventType,
      budget: budget,
      images:'https://www.tamarindglobal.com/images/events/events.jpg',
      from: from,
      to: to,
      description: description,
      foodPreferences: foodPreferences,
      events: events
    }).then((response)=>{
     alert(response.data);
    navigate(`/vendorproposals/${contact}`);
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div className='form-container'>
      <div className='form-main'>
        <div className='header-form'>
          <div>Create Proposal</div>
        </div>
        <div className='body-form'>
          <div className='body-left'>
            <div className='first-portion'>
              <div className='event'>Event Name</div>
              <div>
                <input required
                  className='input-s1'
                  placeholder='Name'
                  value={eventName}
                  onChange={handleEventNameChange}
                />
              </div>
            </div>
            <div className='second-portion'>
              <div className='second-p-left'>
                <div className='placeofevent'>Place of Event</div>
                <div>
                  <select
                    className='select'
                    value={placeOfEvent}
                    onChange={handlePlaceOfEventChange}
                  >
                    <option value=''>select</option>
                    <option value='Tirupati'>Tirupati</option>
                    <option value='Bangalore'>Bangalore</option>
                    <option value='Hyderabad'>Hyderabad</option>
                    <option value='Chennai'>Chennai</option>
                    <option value='Vijayawada'>Vijayawada</option>
                  </select>
                </div>
              </div>
              <div className='second-p-right'>
                <div className='placeofevent'>Proposal Type</div>
                <div>
                  <select
                    className='select'
                    value={proposalType}
                    onChange={handleProposalTypeChange}
                  >
                    <option value=''>Select</option>
                    <option value='Marriage'>Marriage</option>
                    <option value='Birthday'>Birthday</option>
                    <option value='Reception'>Reception</option>
                    <option value='Party'>Party</option>
                    <option value='Farewell'>Farewell</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='second-portion'>
              <div className='second-p-left'>
                <div className='placeofevent'>Event Type</div>
                <div>
                  <select
                    className='select'
                    value={eventType}
                    onChange={handleEventTypeChange}
                  >
                    <option value=''>Select</option>
                    <option value='Marriage'>Marriage</option>
                    <option value='Wedding'>Wedding</option>
                    <option value='Birthday'>Birthday</option>
                  </select>
                </div>
              </div>
              <div className='second-p-right'>
                <div className='placeofevent'>Budget</div>
                <div>
                  <input required
                    className='budget'
                    placeholder='00000'
                    value={budget}
                    onChange={handleBudgetChange}
                  />
                </div>
              </div>
            </div>
            <div className='second-portion'>
              <div className='second-p-left'>
                <div className='placeofevent'>From</div>
                <div>
                  <input required
                    className='date'
                    type='date'
                    value={from}
                    onChange={handleFromChange}
                  />
                </div>
              </div>
              <div className='second-p-right'>
                <div className='placeofevent'>To</div>
                <div>
                  <input required
                    className='date'
                    type='date'
                    value={to}
                    onChange={handleToChange}
                  />
                </div>
              </div>
            </div>
            <div className='portion-3'>
              <div className='des'>Description</div>
              <div>
                <input required
                  className='ipportion3'
                  placeholder='Description'
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
            </div>
          </div>
          <div className='body-right'>
            <div className='right-first'>
              <div className='images'>
                <div className='imagesdiv'>Images</div>
                <div className='addbuttondiv'>
                  <button className='addbuttondiv1'>ADD</button>
                </div>
              </div>
              <div className='pics'>
              </div>
            </div>
            <div className='right-second'>
              <div className='food-pref'>Food Preferences</div>
              <div>
                <input required
                  className='food-pref-ip'
                  placeholder='Preferences'
                  value={foodPreferences}
                  onChange={handleFoodPreferencesChange}
                />
              </div>
            </div>
            <div className='right-third'>
              <div className='food-pref'>Events</div>
              <div>
                <input required
                  className='food-pref-ip'
                  placeholder='Preferences'
                  value={events}
                  onChange={handleEventsChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='footer-form'>
          <button className='addbutton' onClick={handleSubmit}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default ProposalForm;
