import { NextPage } from 'next';
import axios from 'axios';

const Profile: NextPage = (props: any) => {
  console.log("props: ", props);
  
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

Profile.getInitialProps = async (ctx) => {
  console.log("cookies: ", ctx.req?.headers.cookie)
  
  try {
    const res = await axios.get('http://localhost:3000/api/profile', {
      headers: {
        cookie: ctx.req?.headers.cookie,
      },
    });
    const user = res.data;
    return { user };
  } catch (error: any) {
    if (error.response.status === 401) {
      //redirectToLogin(ctx);
      console.log("no se dio");
    }
    throw error;
  }
};

export default Profile;
