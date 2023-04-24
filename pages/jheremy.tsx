import { NextPage } from 'next';
import Image from 'next/image';
import {LinkIcon} from "@heroicons/react/24/outline"
import Project from '../components/Project';
import Link from 'next/link';
import { useRef, useState } from 'react';
import * as Yup from "yup";

interface contactForm{
    name: string
    email: string
    company: string
    number: string
    message: string
}

const FormModal = ()=>{
    const [formData, setFormData] = useState<contactForm>({
        name: "",
        company: "",
        email: "",
        number: "",
        message: "",
    });

    const [errors, setErrors] = useState<contactForm>({
        name: "",
        email: "",
        company: "",
        number: "",
        message: "",
    });

    const schema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        company: Yup.string().required("Company is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        number: Yup.string(),
        message: Yup.string().required("Message is required"),
    });

    const handleInputChange = async (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        try {
    
          await schema.validate(formData, { abortEarly: false });
    
          // Submit form data to server or perform further actions
          console.log("Form data:", formData);
          // Reset form data
          setFormData({
            name: "",
            company: "",
            email: "",
            number: "",
            message: "",
          });
          setErrors({ name: "", email: "", company: "", number: "", message: "" });
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const validationErrors: any = {
                 name: "", email: "", company: "", number: "", message: ""
            };
            err.inner.forEach((error) => {
                if (error.path !== undefined) {
                    validationErrors[error.path] = error.message;
                }
            });
            setErrors(validationErrors);
          }
        }
    };

    return(
        <div className="w-screen bg-grey bg-opacity-30 fixed modal top-0 z-50 min-h-screen ">
            <div 
                className="
                    py-4
                    overflow-auto
                    max-h-screen
                    flex justify-center 
                "
            >
                <form
                    onSubmit={handleSubmit}
                    className="
                        w-11/12  md:w-2/5 2xl:w-1/3 bg-darkGray mt-4 md:mt-20 
                        rounded-lg shadow-sm shadow-gray-600
                        p-9 flex-col flex gap-6 h-fit
                    "
                >
                    <div className="">
                        <h4 className='text-xl font-semibold'>
                            Send a message to Jheremy
                        </h4>
                        <p className='text-lg font-normal text-bodyText'>
                            Send a message to Jheremy
                        </p>
                    </div>
                    <div className="">
                        <div className="flex gap-3 flex-col md:flex-row justify-between">
                            <div className="mb-4 w-full">
                                <label htmlFor="name" className="block mb-1 text-sm">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="
                                        bg-grey
                                        w-full px-4 py-2 border border-gray-400 
                                        rounded focus:outline-none focus:border-gray-200
                                    "
                                />
                                {errors.name && (
                                <p className="text-red-500 text-xs italic">{errors.name}</p>
                                )}
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="company" className="block mb-1 text-sm">
                                    Company Name / Charge:
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleInputChange}
                                    className="
                                        bg-grey
                                        w-full px-4 py-2 border border-gray-400 
                                        rounded focus:outline-none focus:border-gray-200
                                    "
                                />
                                {errors.company && (
                                <p className="text-red-500 text-xs italic">{errors.company}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-3 flex-col md:flex-row justify-between">
                            <div className="mb-4 w-full">
                                <label htmlFor="mail" className="block mb-1 text-sm">
                                    E-mail:
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="
                                        bg-grey
                                        w-full px-4 py-2 border border-gray-400 
                                        rounded focus:outline-none focus:border-gray-200
                                    "
                                />
                                {errors.email && (
                                <p className="text-red-500 text-xs italic">{errors.email}</p>
                                )}
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="phone" className="block mb-1 text-sm">
                                    Phone (optional):
                                </label>
                                <input
                                    type="number"
                                    id="number"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className="
                                        bg-grey
                                        w-full px-4 py-2 border border-gray-400 
                                        rounded focus:outline-none focus:border-gray-200
                                    "
                                />
                                {errors.number && (
                                <p className="text-red-500 text-xs italic">{errors.number}</p>
                                )}
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-1 text-sm">
                                    Message:
                                </label>
                                <textarea
                                    rows={2}
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="
                                        resize-none
                                        bg-grey
                                        w-full px-4 py-2 border border-gray-400 
                                        rounded focus:outline-none focus:border-gray-200
                                    "
                                />
                                {errors.message && (
                                <p className="text-red-500 text-xs italic">{errors.message}</p>
                                )}
                            </div>
                        </div>
                        <button 
                            className="
                            mt-3
                            rounded-xl py-2 px-8 bg-primary
                            hover:bg-primaryAlt w-full duration-100
                            "
                        >
                            Lets Talk
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const Jheremy: NextPage = (props: any) => {

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
        url: 'https://www.instagram.com/jheremois/',
    },
    {
        src: "/profile/github-icon.png",
        alt: 'Github',
        url: 'https://github.com/jheremois',
    },
  ]
  
  return (
    <>
        <FormModal/>
        <div className="max-w-7xl mx-auto">
            <div className="p-7 md:p-12">
                <div 
                    className="
                        userInfo flex flex-col md:flex-row 
                        items-center pb-9 gap-6 border-b-4 
                        border-grey
                    "
                >
                    <Image
                        src={"/profPic.png"} 
                        alt='' width={240} height={240}
                        className='
                        rounded-xl
                        w-full md:w-fit
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

export default Jheremy;