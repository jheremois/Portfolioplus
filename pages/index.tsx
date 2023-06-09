import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { getGogooleAuth } from '../services/auth.services'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const AuthGoogle = ()=>{
    getGogooleAuth()
  }

  return (
    <>
      <main className={`h-screen flex justify-center items-center bg-black`}>
        <div className="moveTop bg-darkGray maxLoginW -translate-y-9 shadow-gray shadow-sm border border-gray p-7 rounded-xl w-11/12">
          <div className="flex flex-col gap-1">
            <h3 className='font-semibold text-3xl'>
              Get Started
            </h3>
            <p className='text-lg text-lightGray opacity-75'>
              Create your account now
            </p>
          </div>
          <div className="form flex flex-col gap-8 pt-8">
            <input 
              type="text" 
              placeholder='Place your email' 
              className='
                bg-darkGray p-1 w-full border-b-2
                text-lightGray placeholder:text-gray
                placeholder:font-medium
                text-lg outline-none
              '
              style={{borderColor: "#BBBDBE"}}
            />
            <input 
              type="text" 
              placeholder='Place your password' 
              className='
                bg-darkGray p-1 w-full border-b-2
                text-lightGray placeholder:text-gray
                placeholder:font-medium
                text-lg outline-none
              '
              style={{borderColor: "#BBBDBE"}}
            />
            <div className="flex gap-4 flex-col">
              <Link href={'/'}>
                <button 
                  className='
                    bg-white p-2 px-7 rounded-lg 
                    hover:bg-lightGray w-full font-semibold
                    duration-150 text-lg text-black
                  '
                  
                >
                  Register
                </button>
              </Link>
              <div className="flex items-center gap-2 text-gray">
                <hr className='w-full' />
                or
                <hr className='w-full' />
              </div>
              <Link href={'http://localhost:3100/auth/google'}>
                <button 
                  className='
                    bg-primaryAlt p-2 px-7 rounded-lg 
                    hover:bg-primary w-full font-semibold
                    duration-150 text-lg
                  '
                >
                  Google
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="m-auto">
          <Link href={'http://localhost:3100/auth/google'}>
            <button 
              className='
                bg-primaryAlt p-2 px-7 rounded-lg 
                hover:bg-primary
                duration-150
              '
            >
              Google
            </button>
          </Link>
        </div> */}
      </main>
    </>
  )
}
