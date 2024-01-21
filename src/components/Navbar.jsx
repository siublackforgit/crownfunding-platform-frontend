import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { CustomButton } from './index';
import { logo, menu, search, thirdweb } from '../assets';
 import { navlinks } from '../constants';

const Navbar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState('dashboard');
    const [toggle,settoggle] = useState(false);
  return (
    <div className='flex md:flex-row
    flex-col-reverse justify-between mb-[35px] gap-6
    '>
    Navbar TEST
    </div>
  )
}

export default Navbar