import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {UserCircleIcon, StarIcon, ChartBarIcon } from "@heroicons/react/24/outline"
import { useUserContext } from '../../contexts/UserContext';

interface OverlayOption {
  label: string;
  onClick: () => void;
}

const options: OverlayOption[] = [
  { label: 'Editar perfil', onClick: () => console.log('Option 1 clicked') },
  { label: 'Configuración', onClick: () => console.log('Option 2 clicked') },
  { label: 'Cerrar sesión', onClick: () => console.log('Option 3 clicked') }
];

const navOption = [
  { label: 'Profile', icon: <UserCircleIcon width={35} />, url: "/"},
  { label: 'My Raters', icon: <StarIcon width={35} style={{paddingLeft: 3, paddingRight: 3}} />, url: "/"},
  { label: 'My Stats', icon: <ChartBarIcon width={35} style={{paddingLeft: 3, paddingRight: 3}} />, url: "/" }
];

const LeftNav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData, setUser } = useUserContext();
  const [showSidebar, setShowSidebar] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <div className="flex bg-mainBg">
        <div className={`${showSidebar ? 'block' : 'hidden'} relative md:block bg-darkGray w-64 md:w-1/4 lg:w-1/5 2xl:w-1/6 border-r-4 border-grey`}>
          <nav className="fixed w-64 md:w-1/4 lg:w-1/5 2xl:w-1/6">
            <div className="proflieBlock">
              <div className="flex items-center justify-between border-b border-grey p-4">
                <div className="flex items-center gap-2">
                  <Image src={'/logo.png'} alt="" width={50} height={50} />
                  <div className="flex flex-col text-sm">
                    <p className='font-semibold'>
                      {userData?.display_name}
                    </p>
                    <p className='text-bodyText'>
                      {userData?.profession}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <button 
                    className="
                      bg-indigo-500 text-white px-2 py-2 rounded-full hover:bg-grey
                      flex justify-center items-center duration-150
                    " 
                    onClick={() => setShowOverlay(!showOverlay)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {showOverlay && (
                    <div 
                      className="
                        absolute right-0 mt-2 border 
                        border-grey rounded-md shadow-md overflow-hidden
                        bg-mainBg
                      "
                    >
                      {options.map((option, index) => (
                        <button key={index} className="w-full block px-8 py-4 hover:bg-indigo-500 text-white hover:bg-black" onClick={option.onClick}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
              { navOption.map((option, i)=>(
                <Link 
                  key={`${option}ec${i}`}
                  href={option.url} 
                  className="block text-lg font-medium text-indigo-600 hover:text-indigo-900"
                >
                  <div 
                    className="
                      flex items-center gap-2 w-full
                      p-3 rounded-xl
                      hover:bg-grey duration-100
                    "
                  >
                    {option.icon}
                    <h5 className='text-2xl'>
                      {option.label}
                    </h5>
                  </div>
                </Link>
              ))
              }
              <Link href="" className="block text-lg font-medium text-indigo-600 hover:text-indigo-900">
                <div 
                  className="
                    flex items-center gap-2 w-full bg-primary p-3 rounded-xl
                    hover:scale-105 duration-100
                  "
                >
                  {/* <PlusCircleIcon width={30} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={35} className="bg-primary text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

                  <h5 className='text-2xl'>
                    New Rater
                  </h5>
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <div className={`${showSidebar ? 'md:ml-64' : 'md:ml-0'} flex-1`}>
          <header className={`${showSidebar ? 'hidden' : 'block'} lg:hidden bg-white flex items-center`}>
            <button className="text-xl leading-none px-3 py-1 rounded-md text-indigo-600 hover:text-indigo-900" onClick={() => setShowSidebar(!showSidebar)}>
              &#9776; boton
            </button>
          </header>
          {children}
        </div>
      </div>
    </>
  )
}

export default LeftNav