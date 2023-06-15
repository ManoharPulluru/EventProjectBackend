import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Venderproposals from './components/Venderproposals'
import ProposalCreatePage from './components/ProposalCreatePage'
import VendorLoginPage from './components/VendorLoginPage'
import VendorSingupPage from './components/VendorSignupPage'
import UserLoginPage from './components/UserLoginPage'
import UserSignupPage from './components/UserSignupPage'
import EditProposal from './components/EditProposal'
import UserWelcome from './components/userComponents/UserWelcome'
import OpenEvent from './components/userComponents/OpenEvent'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/vendorproposals/:contact' element={<Venderproposals/>}/>
        <Route path='/vendorcreateproposal/:contact' element={<ProposalCreatePage/>}/>
        <Route path='/vendorproposals/editproposal/:contact' element={<EditProposal/>}/>
        <Route path='/vendorsignin' element={<VendorLoginPage/>}/>
        <Route path='/vendorsignup' element={<VendorSingupPage/>}/>
        <Route path='/usersignin' element={<UserLoginPage/>}/>
        <Route path='/usersignup' element={<UserSignupPage/>}/>
        <Route path='/userwelcome/:contact' element={<UserWelcome/>}/>
        <Route path='/openevent/:eventname/:contact/:vcontact' element={<OpenEvent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
