import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { SideBar , NavBar } from './components' ;
import { CampaignDetail, CreateCampaign , Home , Profile } from './pages/index.js';


const App = () => {


  return (
    <div className='relative sm:-8 p-4   min-h-screen flex bg-[#13131a]  flex-row'>
      <div className='hidden  sm:flex mr-10 relative'>
        < SideBar />
      </div>
      <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
        < NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/create-campaign" element={<CreateCampaign/>} />
          <Route path="/campaign-details/:id" element={<CampaignDetail/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
