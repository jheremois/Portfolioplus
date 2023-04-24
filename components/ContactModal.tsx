import {XMarkIcon} from "@heroicons/react/24/outline"
import React, { useState } from 'react';
import * as Yup from "yup";
import contactService from '../services/contact.services';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(){

  return (
    <div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  );
}

interface contactForm{
    name: string
    email: string
    company: string
    number: string
    message: string
}

const ContactModal = ()=>{
    const [loading, setLoading] = useState(false)
    const [modalopen, setModalopen] = useState(false)

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
        setLoading(true)
    
        try {
    
          await schema.validate(formData, { abortEarly: false });
    
          // Submit form data to server or perform further actions
          console.log("Form data:", formData);
            contactService(formData).then((res)=>{

                if(res.status == 200){
                    //setModalOpen(true)
                    toast.success('Recived', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setModalopen(false)
                    setLoading(false)

                    setFormData({
                        name: "",
                        company: "",
                        email: "",
                        number: "",
                        message: "",
                    });
                }
                if(res.status == 500){
                    setLoading(false)
                    //setOpenModalBad(true)
                }
            }).catch(()=>{
                setLoading(false)
                //setOpenModalBad(true)
            })
          // Reset form data
          
          setErrors({ name: "", email: "", company: "", number: "", message: "" });
        } catch (err) {
            setLoading(false)
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
        <>
            <button 
                className="
                rounded-xl py-2 px-8 bg-primary
                hover:bg-primaryAlt w-fit duration-100
                "
                onClick={()=>{
                    setModalopen(true)
                }}
            >
                Contact
            </button>
            <Toast/>
            {
                modalopen &&
                <div className="left-0 w-screen bg-grey bg-opacity-30 fixed modal top-0 z-50 min-h-screen ">
                    
                    <div 
                        className="
                            py-4
                            overflow-auto
                            max-h-screen
                            flex justify-center 
                        "
                    >
                        {
                            loading
                            ?
                                <div
                                    onSubmit={handleSubmit}
                                    className="
                                        justify-center items-center
                                        w-11/12  md:w-2/5 2xl:w-1/3 bg-darkGray mt-4 md:mt-20 
                                        rounded-lg shadow-sm shadow-gray-600
                                        p-9 flex-col flex gap-6 h-fit
                                    "
                                >
                                    <div className="loader h-20 w-20 rounded-full my-14"></div>
                                </div>
                            :
                                <form
                                    onSubmit={handleSubmit}
                                    className="
                                        w-11/12  md:w-2/5 2xl:w-1/3 bg-darkGray mt-4 md:mt-20 
                                        rounded-lg shadow-sm shadow-gray-600
                                        p-9 flex-col flex gap-6 h-fit
                                    "
                                >
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <h4 className='text-xl font-semibold'>
                                                Send a message to Jheremy
                                            </h4>
                                            <div 
                                                onClick={()=>{
                                                    setModalopen(false)
                                                }}
                                                className="text-2xl cursor-pointer -translate-y-4 translate-x-4"
                                            >
                                                <XMarkIcon width={25} hanging={25}/>
                                            </div>
                                        </div>
                                        <p className='text-lg font-normal text-bodyText'>
                                            We will use your contact details to contact you directly about potential cooperation opportunities now or in the future.
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
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default ContactModal