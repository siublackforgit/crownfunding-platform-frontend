import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { Home , Profile , CreateCampaign , CampaignDetail } from './pages/index.js';
import { Navbar , Sidebar } from './components'; 


const App = () => {

  console.log(<Home/>);

  return (
    <div className="relative sm:-8 p-4   min-h-screen flex">
      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar/>
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280px]
      mx-auto sm:pr-5'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/create-campaign' element={<CreateCampaign/>}/> 
      </Routes>
    </div>
  )
}

export default App;
