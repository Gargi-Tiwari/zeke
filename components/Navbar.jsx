import React from "react";
import {search} from "../Assets/search.svg"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=" sticky  ">
      <div className="text-white pt-5 pb-3 sticky flex justify-between items-center ">
           
            <div className="border-2">
              <span className="flex flex-row items-center flex-1 text-center">
                <h1 className="text-3xl text-white text-x-bold  p-3 ">Z | </h1>
                <h3 className="text-white px-2">Z E K E</h3>
              </span>
            </div>

            
            <div className={`blue-glassmorphism h-12 flex-1 flex items-center p-2 rounded-full`}>
                <div className="  w-10 h-10 text-white justify-center items-center p-3 ">
                  <SearchIcon className="text-white " />
                    
                </div>
                <input
                    type="text"
                    placeholder="Collections, item or users... "
                    className="bg-transparent border-none w-full text-[#eee] p-3 font-medium" />
            </div>
            <div className='flex justify-evenly'>
                {/* <Link to={!user && '/Signin'}> */}
                <div 
                // onClick={handleAuthentication} 
                className='flex flex-col mr-2.5 ml-2.5 text-white '>
                    <span className='text-sm '>Hello,Guest
                     {/* {!user ? 'Guest': user.email}  */}
                     </span>
                    <span className='text-lg font-bold'>signin
                      {/* {user ? 'Sign Out': 'SignIn'} */}
                      </span>
                </div>
                {/* </Link> */}
                {/* <Link to ='/orders'> */}
                <div className='flex flex-col mr-2.5 ml-2.5 text-white'>
                    <span className='text-sm'>Returns</span>
                    <span className='text-lg font-bold'>& Orders</span>
                </div>
                {/* </Link> */}

                
                
                {/* <Link to="/checkout"> */}
                  <div className='flex items-center mr-2 text-white'>
                    <ShoppingCartIcon />
                     <span className='text-lg font-bold '>
                        {/* {basket?.length} */} 0
                     </span>
                  </div>
                {/* </Link> */}
                <div className='flex items-center mr-2 text-white'>
                    <span><button className="p-2 capitalize blue-glassmorphism">connect<br/> metamask</button></span>
                  </div>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
