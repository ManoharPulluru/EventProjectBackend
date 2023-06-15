import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import search from '../images/search.png';
import filter from '../images/filter.png';
import '../styles/searchbar.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/venderproposals.css';
import VenderProposalCard1 from './VenderProposalCard1';
import axios from 'axios';
import api from '../api';
const Venderproposals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vendor, setVendor] = useState('');
  const { contact } = useParams();
  useEffect(() => {
    axios
      .get(`${api}/vendorproposals/${contact}`)
      .then((response) => {
        setVendor(response.data.vendor);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/vendorcreateproposal/${vendor.contact}`);
  };
  const toggleSignout=()=>{
    navigate('/vendorsignin');
  }
  const vendorSel = vendor?.vendorSelections || [];

  // Filter events based on the search term
  const filteredVendorSel = vendorSel.filter((ven) =>
    ven.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header data={vendor} />
      <div className='log-out-ven'>
        <div><button onClick={toggleSignout} className='log-out-ven-btn'>SIGN OUT</button></div>
      </div>
      <div className='flexing-proposals'>
        <div className='searchbar'>
          <div className='left-card'>
            <div className='proposals'>Proposals</div>
            <div>
              <img className='searchicon' src={search} alt='search' />
            </div>
            <div>
              <input
                className='inputsearch'
                placeholder='Search projects'
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className='right-card'>
            <div className='filterdiv'>
              <img className='filter' src={filter} alt='filter' />
            </div>
            <div className='buttondiv'>
              <button className='createbutton' onClick={handleClick}>
                CREATE
              </button>
            </div>
          </div>
        </div>
        {filteredVendorSel.map((ven,index) => (
          <VenderProposalCard1 data={ven} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Venderproposals;
