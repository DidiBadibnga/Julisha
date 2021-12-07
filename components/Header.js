import React from 'react'
import HeaderItem from './HeaderItem'
import { ChatIcon, HeartIcon, HomeIcon, MenuIcon, UserIcon } from "@heroicons/react/outline"
import SearchLogo from './SearchLogo'
import { PlusIcon } from "@heroicons/react/solid"
import router from 'next/router'
import Link from 'next/link'
function Header() {
    return (
        <header className="bg-white shadow py-2 px-2 flex items-center justify-between fixed top-0  z-50 w-full">
            <div className='flex items-center sm:hidden'>
                <button>
                    <MenuIcon  className="h-10 w-10 text-yellow-600"/>
                </button>
            </div>
            <div className="flex items-center">
                <Link href='/'>
                    <a className="text-yellow-600 text-4xl font-bold italic">Julisha</a>
                </Link>
            </div>
            <section className=' sm:flex sm:items-center  hidden'>
                <button onClick={() => { router.push('/') }}> <HeaderItem title="Home" Icon={HomeIcon}  />
                </button>
                <HeaderItem title="Favoris" Icon={HeartIcon} />
                <HeaderItem title="Messages" Icon={ChatIcon} />
                <button><HeaderItem title="Sign in" Icon={UserIcon} /></button>
            </section>
            <div>
                <SearchLogo />
            </div>
        </header>
    )
}

export default Header
