import { XMarkIcon, ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const ShareModal =()=>{
    const [openModal, setOpenModal] = useState(false)
    return(
        <>
            <button 
                onClick={()=> setOpenModal(true)}
                className="
                rounded-xl px-8 bg-grey w-fit
                hover:bg-black duration-100
                "
                >
                <ShareIcon
                    className='w-5'
                />
            </button>
        {
            openModal &&
            <div 
                className="
                    top-0 left-0 w-screen h-screen z-50 fixed 
                    bg-black bg-opacity-30 flex justify-center 
                    items-center
                "
            >
                <div className="moveTop bg-darkGray text-bodyText w-96 p-5 shadow-md shadow-gray-700 rounded-xl">
                    <div className="flex justify-end">
                        <button onClick={()=> setOpenModal(false)}>
                            <XMarkIcon width={30}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col justify-center gap-4 items-center">
                            <img src="https://storage.googleapis.com/ritme-posts/bajoaqr.png" alt="qr" className="w-1/2"/>
                            <button className="bg-primary p-2 px-6 text-lg rounded-xl text-white">
                                Download QR
                            </button>
                        </div>
                        <hr className="border-grey" />
                        <div className="flex flex-col gap-4 text-center justify-center items-center">
                            <p className="text-lg font-medium text-white">
                                Copy profile url
                            </p>
                            <div className="w-full relative">
                                <button className="absolute right-1 p-2">
                                    <ClipboardDocumentIcon width={24} className=""/>
                                </button>
                                <input 
                                    type="text"  
                                    readOnly
                                    className="bg-grey w-full p-2 rounded-md mb-4"
                                    placeholder="http://portfoliogg.com/jheremy"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        }
        </>
    )
}

export default ShareModal