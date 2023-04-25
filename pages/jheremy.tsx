import { NextPage } from 'next';
import Image from 'next/image';
import { LinkIcon } from "@heroicons/react/24/outline"
import Project from '../components/Project';
import Link from 'next/link';
import ContactModal from '../components/ContactModal';
import PortfolioLoading from '../components/PorfolioLoading';
import { useEffect, useState } from 'react';

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

const socials = [
  {
      src: "/profile/ig-icon.png",
      alt: 'Instagram',
      url: 'https://www.instagram.com/jheremois/',
  },
  {
      src: "/profile/linkedin-icon.png",
      alt: 'Linkedin',
      url: 'https://www.linkedin.com/in/jheremy-ricardo-castro-guerrero-3a85521a0/',
  },
  {
      src: "/profile/twitter-icon.png",
      alt: 'Twitter',
      url: 'https://www.twitter.com/jheremois/',
  },
  {
      src: "/profile/github-icon.png",
      alt: 'Github',
      url: 'https://github.com/jheremois',
  },
]

const Jheremy: NextPage = (props: any) => {

    const [isLoading, setIsLoading] = useState(true); // State to manage loader visibility
  
    useEffect(()=>{
        setTimeout(()=>{
            if(isLoading){
                setIsLoading(false)
            }
        }, 4000)
    }, [])

    return (
        <>
            {
                isLoading ?
                    <PortfolioLoading/>
                :
                    <div className="max-w-7xl mx-auto">
                        <div className="p-7 md:p-12">
                            <div 
                                className="
                                    userInfo flex flex-col md:flex-row 
                                    items-center pb-9 gap-6 moveTop
                                "
                            >
                                <Image
                                    src={"/profPic.png"} 
                                    alt='' width={240} height={240}
                                    className={`
                                        rounded-xl
                                        w-full md:w-fit
                                        
                                    `}
                                    onLoad={()=> setIsLoading(false)}
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
                                            Jheremy Castro
                                        </h1>
                                        <span className='md:bg-white md:h-2 w-2 rounded-full translate-y-1'>

                                        </span>
                                        <div className="flex items-center gap-4">
                                            {
                                                socials.map((social, inx)=>(
                                                    <Link
                                                        href={social.url}
                                                        key={inx}
                                                        target='_blank'
                                                    >
                                                        <Image
                                                            src={social.src} 
                                                            alt={social.alt} width={24} height={24}
                                                            className='
                                                                translate-y-1
                                                                md:w-6
                                                            '
                                                        />
                                                    </Link>
                                                ))
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
                                        Software developer
                                    </h5>
                                    <p className='font-light text-lg md:text-base text-bodyText'>
                                        Dominican software developer with knowledge of web and mobile development.
                                    </p>
                                    <div className='flex gap-3 pt-4 justify-center md:justify-start'>
                                        <ContactModal/>
                                        {/* <button 
                                            className="
                                            rounded-xl px-8 bg-grey w-fit
                                            hover:bg-black duration-100
                                            "
                                        >
                                            <LinkIcon 
                                                className='w-5'
                                            />
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                            <hr className='border-b-4 border-grey'/>
                            <div className="py-6 grid gap-6">
                                <h4 className='fadeIn text-3xl md:text-2xl font-semibold text-center md:text-start'>
                                    Projects
                                </h4>
                                <div className="projectList grid md:grid-cols-3 gap-7">
                                    {
                                        projectList.map((prjt, indx)=>(
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
                    </div>
            }
        </>
    )
}

export default Jheremy;