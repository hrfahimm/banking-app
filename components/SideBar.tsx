import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = ({ user }: SiderbarProps) => {
    return (
        <section className='sidebar'>
            <nav className='flex flx-col gap-4'>
                <Link href="/" className='mb-12 cursor-pointer items-center gap-2 '>
                    <Image src="/icons/logo.svg" width={34} height={34} alt='logo' />
                </Link>
            </nav>

        </section>
    )
}

export default SideBar