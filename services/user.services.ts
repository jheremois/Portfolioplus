import axios from 'axios';
import Cookies from 'js-cookie';
import { UserData } from '../contexts/UserContext'

interface GetProfileResult {
  success: boolean;
  profileData: UserData | null;
}

export const getProfile = async (): Promise<GetProfileResult> => {
  try {
    const token = Cookies.get('token');
    const response = await axios.get('http://localhost:3100/auth/private', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      profileData: response.data.myProfile,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      profileData: null,
    };
  }
};
