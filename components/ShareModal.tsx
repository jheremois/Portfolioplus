import { XMarkIcon, ClipboardDocumentIcon, ShareIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareModal =()=>{
    const [openModal, setOpenModal] = useState(false)

    const copyToClipboard = () => {
        const urlToCopy = "https://portfolioplus-dun.vercel.app/jheremy"; // URL que deseas copiar
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
                toast.success("URL copied to clipboard", {
                    theme: "dark",
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000, // Tiempo en milisegundos (2 segundos en este caso)
                });
            })
            .catch((error) => {
                console.error("Error copying URL to clipboard: ", error);
                toast.error("Error copying URL to clipboard", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000, // Tiempo en milisegundos
                });
            });
    };

    
    // Función para manejar el clic en el botón de descarga
    const handleDownloadClick = async () => {
        try {
            // URL de la imagen que deseas descargar
            //const imageUrl = 'https://storage.googleapis.com/portfoliprofiles/profileQr.png';
            const imageUrl = 'jheremy/profileQr.png';

            // Obtener la imagen como un blob
            const response = await fetch(imageUrl);
            const imageBlob = await response.blob();

            // Crear un objeto URL para el blob
            const blobUrl = URL.createObjectURL(imageBlob);

            // Crear un elemento <a> temporal
            const downloadLink = document.createElement("a");
            downloadLink.href = blobUrl;
            downloadLink.download = "qr-code.png"; // Cambia el nombre del archivo según tus necesidades

            // Simular un clic en el enlace para iniciar la descarga
            document.body.appendChild(downloadLink);
            downloadLink.click();

            // Eliminar el enlace temporal y liberar el objeto URL
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Error al descargar la imagen:", error);
        }
    };


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
                            <img src="jheremy/profileQr.png" alt="qr" className="w-1/2"/>
                            <button 
                                className="bg-primary p-2 px-6 text-lg rounded-xl text-white"
                                onClick={ ()=> handleDownloadClick()}
                            >
                                Download QR
                            </button>
                        </div>
                        <hr className="border-grey" />
                        <div className="flex flex-col gap-4 text-center justify-center items-center">
                            <p className="text-lg font-medium text-white">
                                Copy profile url
                            </p>
                            <div 
                                className="
                                w-full relative flex items-center justify-center
                                bg-grey p-2 rounded-md mb-4
                                "
                            >
                                <input 
                                    type="text"  
                                    value={"https://portfolioplus-dun.vercel.app/jheremy"}
                                    readOnly
                                    className="bg-grey w-full rounded-md"
                                    placeholder="https://portfolioplus-dun.vercel.app/jheremy"
                                />
                                <button className="right-1 p-2" onClick={()=> copyToClipboard()}>
                                    <ClipboardDocumentIcon width={24} className=""/>
                                </button>
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