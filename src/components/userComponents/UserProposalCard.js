import React from 'react'
import '../../styles/userProposalCard.css'
const UserProposalCard = (props) => {
    const event = props.data
  return (
    <div className='user-card-container'>
      <div >
        <img className='user-card-image' alt='card' src={event.images[0]}/>
      </div>
      <div className='user-card-details'>
        <div className='user-card-vendorName'>{event.vendorName}</div>
        <div className='user-card-budget'>{event.budget}</div>
        <div className='user-card-location'>{event.placeOfEvent}</div>
      </div>
    </div>
  )
}
export default UserProposalCard
