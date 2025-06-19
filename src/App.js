import {Routes,Route, Navigate} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AppLayout from './Layout/AppLayout';
import Dashboard from './Pages/Dashboard';
import { useState } from 'react';
function App() {
  //Tracking user details in app because app is the component which decides
  //where to navigate based on the current route and it needs to know wheather
  //the user is login in or not.
  const [userDetails,setUserDetails]=useState(null);
  //this function takes new value of userdetails and update
  const updateUserDetails=(updateData)=>{
    setUserDetails(updateData);
  };
  return (
    <div >
      <Routes>
        <Route path="/" element={<AppLayout><Home/></AppLayout>} />
        <Route path="/Login" element={userDetails? 
        <Navigate to='/dashboard'/>:
        <AppLayout>
          <Login updateUserDetails={updateUserDetails}/>
          </AppLayout>}
          />
        <Route path="/dashboard" element={userDetails? 
        <Dashboard/>:
        <Navigate to='/loign'/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
