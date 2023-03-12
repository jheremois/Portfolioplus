import { NextPage } from 'next';
import axios from 'axios';
import Nav from '../components/layouts/Nav';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { setTimeout } from 'timers';

const Profile: NextPage = (props: any) => {

  const token = Cookies.get('token');
  const [userData, setUserData]: any = useState({
    display_name: "..."
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
        <h1 className='text-white text-7xl'>
          {userData.display_name}
        </h1>
      </Nav>
    </>
  )
}

export default Profile;
