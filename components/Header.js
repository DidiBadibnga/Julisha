import React from 'react'
import HeaderItem from './HeaderItem'
import { ChatIcon, HeartIcon, HomeIcon, UserIcon } from "@heroicons/react/outline"
import { PlusIcon } from "@heroicons/react/solid"
import { useRouter } from 'next/router'
function Header() {
    const router = useRouter()
    return (
        <header className="bg-white shadow py-2 flex items-center justify-between static z-50 w-full">
            <section className='flex space-x-2'>
            <section></section>
                <h1 className="text-yellow-600 text-3xl font-semibold ml-3 cursor-pointer" onClick={() => { router.push('/') }}>Julisha</h1>
                <section className="">
                    <button className="flex items-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-center py-2 justify-center px-2 rounded-md  bg-yellow-500 text-md text-white font-semibold hover:bg-yellow-700" onClick={() => router.push('/new_post')}>
                        <PlusIcon className="w-5 mx-1" />
                        Annoncer
                    </button>
                </section>
            </section>
            <section className='flex items-center'>
                <button onClick={() => { router.push('/') }}> <HeaderItem title="Home" Icon={HomeIcon}  />
                </button>
                <HeaderItem title="Favoris" Icon={HeartIcon} />
                <HeaderItem title="Messages" Icon={ChatIcon} />
                <button onClick={() => { router.push('/auth') }}><HeaderItem title="Sign in" Icon={UserIcon} /></button>
            </section>
        </header>
    )
}

export default Header
