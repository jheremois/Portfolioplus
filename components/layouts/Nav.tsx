import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface OverlayOption {
  label: string;
  onClick: () => void;
}

const options: OverlayOption[] = [
  { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
  { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
  { label: 'Option 3', onClick: () => console.log('Option 3 clicked') }
];

const Nav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <div className="flex h-screen">
        <div className={`${showSidebar ? 'block' : 'hidden'} md:block bg-gray-200 h-screen w-64 md:w-1/4 lg:w-1/5 xl:w-1/6`}>
          <nav className="p-4">
            <div className="proflieBlock">
              <div className="">
                {/* <Image src={'/next.svg'} alt="" /> */}
                <div className="relative">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md" onClick={() => setShowOverlay(!showOverlay)}>
                Show Overlay
            </button>
            {showOverlay && (
                <div className="absolute right-0 mt-2 py-2 bg-white rounded-md shadow-md">
                    {options.map((option, index) => (
                        <button key={index} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={option.onClick}>
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
              </div>
            </div>
            <Link href="/" className="block text-lg font-medium text-indigo-600 hover:text-indigo-900">
              Home
            </Link>
          </nav>
        </div>
        <div className={`${showSidebar ? 'md:ml-64' : 'md:ml-0'} flex-1`}>
          <header className={`${showSidebar ? 'hidden' : 'block'} lg:hidden bg-white flex items-center`}>
            <button className="text-xl leading-none px-3 py-1 rounded-md text-indigo-600 hover:text-indigo-900" onClick={() => setShowSidebar(!showSidebar)}>
              &#9776; aaaaa
            </button>
          </header>
          {children}
        </div>
      </div>
    </>
  )
}

export default Nav
