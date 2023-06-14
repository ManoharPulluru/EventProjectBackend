import React, { useEffect, useState } from 'react'
import Header from './Header'
import ProposalForm from './ProposalForm'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ProposalCreatePage = () => {
  const [vendor,setVendor] = useState('');
  const { contact } = useParams();
  useEffect(() => {
    axios.get(`https://event-proposal-backend-w3o5.onrender.com/vendorproposals/${contact}`)
      .then((response) => {
        setVendor(response.data.vendor);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contact]);
  return (
    <div>
        <Header data={vendor} />
        <ProposalForm/>
    </div>
  )
}

export default ProposalCreatePage
