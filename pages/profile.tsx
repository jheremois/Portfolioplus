import { NextPage } from 'next';
import axios from 'axios';
import Nav from '../components/layouts/Nav';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { setTimeout } from 'timers';
import Image from 'next/image';
import {ShareIcon} from "@heroicons/react/24/outline"

interface userData {
  display_name: string
  profile_pic: string
}

const Profile: NextPage = (props: any) => {

  const token = Cookies.get('token');
  const [userData, setUserData]: [userData: userData, setUserData: any] = useState({
    display_name: "...",
    profile_pic: "/user.png"
  })

  const getProfile = ()=>{

    axios.get('http://localhost:3100/auth/private', { 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response: any) => {
      console.log(response);
      setUserData(response.data.myProfile)
      setTimeout(()=>{
        console.log("userData: ", userData, response.data.myProfile);
      }, 4000)
    })
    .catch(error => {
      console.log(error);
    });

  }

  useEffect(()=>{
    getProfile()
  }, [])


  
  return (
    <>
      <Nav>
        <div className=" p-12">
          <div className="userInfo flex items-center pb-9 gap-4 border-b-4 border-grey">
            <img 
              src={userData.profile_pic} 
              alt='' width={240} height={240}
              className='
                rounded-lg
              '
            />
            <div className="flex flex-col gap-2">
              <h1 className='text-white font-semibold text-3xl'>
                {userData.display_name}
              </h1>
              <h5 className='font-medium text-lg text-primaryAlt'>
                Software developer
              </h5>
              <p className='font-light text-sm text-bodyText'>
                Hello, im new here
              </p>
              <div className='flex gap-3 pt-4'>
                <button 
                  className="
                    rounded-xl py-2 px-8 bg-primary
                    hover:bg-primaryAlt w-fit duration-100
                  "
                >
                  Edit
                </button>
                <button 
                  className="
                    rounded-xl py-2 px-8 bg-grey w-fit
                    hover:bg-black duration-100
                  "
                >
                  <ShareIcon width={17}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </>
  )
}

export default Profile;
