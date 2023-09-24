import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import authMiddleware from '../../middlewares/authMiddleware';
import PortfolioLoading from '../../components/PorfolioLoading';
import { useUserContext } from '../../contexts/UserContext';
import { getProfile } from '../../services/user.services';
import Project from '../../components/Project';
import { ShareIcon } from '@heroicons/react/24/outline';
import LeftNav from '../../components/layouts/LeftNav';
import { useRouter } from 'next/router'
import Link from 'next/link';
import EditProfileModal from '../../components/EditProfileModal';


const projectList = [
  {
    bgColor: '#DA403F',
    description: 'Oximiun oficial e-comerce.',
    imgBg: '/project5.png',
    projectUrl: 'https://dribbble.com/shots/20967625-Oxmium-Steatwear-Brand-E-Commerce-UI',
    title: 'Oxmiun'
  },
  {
    bgColor: '#1B1B1D',
    description: 'PortfolioPlus ofical website.',
    imgBg: '/project2.png',
    projectUrl: 'https://portfolio-plus-info.vercel.app/',
    title: 'PortfolioPlus Website'
  },
  {
    bgColor: '#007AFF',
    description: 'App for easy portfolio creation.',
    imgBg: '/project1.png',
    projectUrl: 'https://portfolioplus-dun.vercel.app/',
    title: 'PortfolioPlus'
  },
  {
    bgColor: '#E9A62E',
    description: 'Ovion Company oficial website.',
    imgBg: '/project3.png',
    projectUrl: 'https://www.ovioncompany.com/',
    title: 'Ovion Company'
  },
  {
    bgColor: '#5749B8',
    description: 'Create and rate posts from users.',
    imgBg: '/project4.png',
    projectUrl: 'https://play.google.com/store/apps/details?id=ritme.app',
    title: 'Ritme - Mobile App'
  },
  {
    bgColor: '#0CC77E',
    description: 'Daily crypto and stocks news.',
    imgBg: '/project6.png',
    projectUrl: 'https://dribbble.com/shots/21292929-Shuni-How-s-things-going',
    title: 'Shuni'
  }
]


const Profile = () => {
  
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true);
  
  const { userData, setUser } = useUserContext();

  const getUser = async () => {
  }
  
  useEffect(() => {
    getProfile().then((userfetch) => {
      setUser(userfetch.profileData)
      if(!userfetch.profileData?.profile_complete)
        //router.push('/get-started')
        setIsLoading(false)
      else
        setIsLoading(false)
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  const socials = [
    {
      src: "/profile/ig-icon.png",
      alt: 'Instagram',
      url: userData?.instagram,
    },
    {
      src: "/profile/linkedin-icon.png",
      alt: 'Linkedin',
      url: userData?.linkedin,
    },
    {
      src: "/profile/twitter-icon.png",
      alt: 'Twitter',
      url: userData?.twitter,
    },
    {
      src: "/profile/github-icon.png",
      alt: 'Github',
      url: userData?.github,
    }
  ]
  
  return (
    <>
      <EditProfileModal/>
      {
        isLoading ?
          <PortfolioLoading />
          :
          <LeftNav>
            <div className="max-w-7xl mx-auto p-4">
              <div
                className="
                userInfo flex flex-col md:flex-row 
                items-center pb-9 gap-6 moveTop
            "
              >
                <img
                  src={userData?.profile_pic}
                  alt='' width={240} height={240}
                  className='
                rounded-lg
                 h-56 w-56 object-cover
              '
                />
                <div className="flex flex-col gap-2 text-center md:text-start">
                  <div
                    className="flex flex-col md:flex-row gap-3 items-center"
                  >
                    <h1
                      className='
                            text-white font-semibold 
                            text-4xl md:text-3xl
                        '
                    >
                      {userData?.display_name}
                    </h1>
                    <span className='md:bg-white md:h-2 w-2 rounded-full translate-y-1'>

                    </span>
                    <div className="flex items-center gap-4">
                      {
                        socials.map((social, inx) => {
                          console.log(social.url )
                          
                          return (social.url &&
                          <Link
                            href={social.url}
                            key={inx}
                            target='_blank'
                          >
                            <img
                              src={social.src}
                              alt={social.alt} width={24} height={24}
                              className='
                                  mt-1
                                  -translate-y-1
                                  md:mt-0
                                  md:translate-y-1
                                  md:w-6
                              '
                            />
                          </Link>)
                        })
                      }
                    </div>
                  </div>
                  <h5
                    className='
                        text-2xl
                        font-medium md:text-lg
                        text-primaryAlt
                    '
                  >
                    {userData?.profession}
                  </h5>
                  <p className='font-light text-lg md:text-base text-bodyText'>
                    {userData?.description}
                  </p>
                  <div className='flex gap-3 pt-4 justify-center md:justify-start'>
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
                      <ShareIcon width={17} />
                    </button>
                  </div>
                </div>
              </div>
              <hr className='border-b-4 border-grey' />
              <div className="py-6 grid gap-6">
                <h4 className='fadeIn text-3xl md:text-2xl font-semibold text-center md:text-start'>
                  Projects
                </h4>
                <div className="projectList grid md:grid-cols-3 gap-7">
                  {
                    projectList.map((prjt, indx) => (
                      <Project
                        bgColor={prjt.bgColor}
                        description={prjt.description}
                        imgBg={prjt.imgBg}
                        projectUrl={prjt.projectUrl}
                        title={prjt.title}
                        key={indx}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </LeftNav>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const authResult = await authMiddleware(context.req, context.res);

  if (authResult.props.user) {
    return { props: { user: authResult.props.user } };
  } else {
    return { props: {} };
  }
};

export default Profile;
