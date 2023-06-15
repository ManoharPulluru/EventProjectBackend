import React, { useEffect, useState } from 'react'
import '../styles/vend1.css'
import edit from '../images/pencil-edit-button.png'
import del from '../images/bin.png'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import api from '../api'
const VenderProposalCard1 = (props) => {
    const navigate = useNavigate()
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
    const ven = props.data;
const toggleDelete = () => {
  const confirmation = window.confirm('Are you sure you want to delete this event?');
  if (confirmation) {
    axios.delete(`${api}/vendorproposals/${ven.eventName}/${vendor.contact}`)
      .then((res) => {
        alert('Event Deleted');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
const toggleEdit=()=>{
    navigate(`/vendorproposals/editproposal/${vendor.contact}`)
}
  return (
    <div className='card-container'>
        <div className='card-container-top'>
            <div className='eventname'>{ven.eventName}</div>
            <div className='about'>{ven.description}</div>
        </div>
        <div className='card-container-bottom'>
            <div className='table'>
                <div className='tabletop'>Event Type</div>
                <div className='tablebot'>{ven.eventType}</div>
            </div>
            <div className='table'>
            <div className='tabletop'>Proposal Type</div>
                <div className='tablebot'>{ven.proposalType}</div>
            </div>
            <div className='table'>
            <div className='tabletop'>From Date</div>
                <div className='tablebot'>{ven.from}</div>
            </div>
            <div className='table'>
            <div className='tabletop'>To Date</div>
                <div className='tablebot'>{ven.to}</div>
            </div>
            <div className='table1'>
            <div className='tabletop'>Budget</div>
                <div className='tablebot'>{ven.budget}</div></div>            
            <div className='big-table'>
                <div><img className='edit' onClick={toggleEdit} src={edit} alt='edit'/></div>
                <div><img className='del' onClick={toggleDelete} src={del} alt='del'/></div>
            </div>            
        </div>  
    </div>
  )
}
export default VenderProposalCard1
