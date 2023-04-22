import { NextPage } from 'next';
import Image from 'next/image';
import {LinkIcon} from "@heroicons/react/24/outline"
import Project from '../components/Project';


const Dama: NextPage = (props: any) => {

  const projectList = [
    {
        bgColor: '#DA403F',
        description: 'Oximiun oficial e-comerce.',
        imgBg: '/project5.png',
        projectUrl: 'https://ritme.vercel.app/rt/login',
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
        projectUrl: 'https://portfolio-plus-info.vercel.app/',
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
        projectUrl: 'https://play.google.com/store/apps/details?id=ritme.app',
        title: 'Shuni'
    }
  ]
  
  return (
    <>
        <div className="max-w-7xl mx-auto">
            <div className="p-7 md:p-12">
                <div 
                    className="
                        userInfo flex flex-col md:flex-row 
                        items-center pb-9 gap-4 border-b-4 
                        border-grey
                    "
                >
                    <Image
                        src={"/profPic.png"} 
                        alt='' width={240} height={240}
                        className='
                        rounded-lg
                        w-full md:w-fit
                        '
                    />
                    <div className="flex flex-col gap-2 text-center md:text-start">
                        <h1 
                            className='
                                text-white font-semibold 
                                text-4xl md:text-3xl
                            '
                        >
                            Jheremy Castro
                        </h1>
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
                            <button 
                                className="
                                rounded-xl py-2 px-8 bg-primary
                                hover:bg-primaryAlt w-fit duration-100
                                "
                            >
                                Contact
                            </button>
                            <button 
                                className="
                                rounded-xl px-8 bg-grey w-fit
                                hover:bg-black duration-100
                                "
                            >
                                <LinkIcon 
                                    className='w-5'
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="py-6 grid gap-6">
                    <h4 className='text-3xl md:text-2xl font-semibold text-center md:text-start'>
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
    </>
  )
}

export default Dama;